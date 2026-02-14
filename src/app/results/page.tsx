"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import Link from "next/link";
import { calculateRiskScore, type AssessmentAnswers } from "@/lib/scoring";
import RiskGauge from "@/components/RiskGauge";
import RiskBreakdownChart from "@/components/RiskBreakdownChart";

function ResultsContent() {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [, setEmailSubmitted] = useState(false);
  const [showFullReport, setShowFullReport] = useState(false);

  const answers: AssessmentAnswers = {
    companySize: searchParams.get("companySize") || "201-1000",
    industry: searchParams.get("industry") || "Technology",
    aiPolicy: searchParams.get("aiPolicy") || "No",
    monitoring: searchParams.get("monitoring") || "No",
    training: searchParams.get("training") || "No",
    governanceTools: searchParams.get("governanceTools") || "No",
    primaryConcern: searchParams.get("primaryConcern") || "All of the above",
  };

  const result = calculateRiskScore(answers);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setEmailSubmitted(true);
      setShowFullReport(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          Your Shadow AI Risk Score
        </h1>
        <p className="text-white/50">
          Based on your responses, here&apos;s your organization&apos;s risk
          assessment.
        </p>
      </div>

      {/* Score Gauge */}
      <div className="flex justify-center mb-12 animate-slide-up">
        <RiskGauge score={result.totalScore} riskLevel={result.riskLevel} />
      </div>

      {/* Breakdown */}
      <div className="bg-brand-mid/30 border border-white/5 rounded-2xl p-6 sm:p-8 mb-8 animate-slide-up">
        <h2 className="text-xl font-semibold mb-6">Risk Breakdown</h2>
        <RiskBreakdownChart breakdown={result.breakdown} />
      </div>

      {/* Top Recommendations (always visible) */}
      <div className="bg-brand-mid/30 border border-white/5 rounded-2xl p-6 sm:p-8 mb-8 animate-slide-up">
        <h2 className="text-xl font-semibold mb-4">Top Recommendations</h2>
        <ul className="space-y-3">
          {result.recommendations.slice(0, 2).map((rec, i) => (
            <li key={i} className="flex gap-3 text-white/70">
              <svg
                className="w-5 h-5 text-brand-glow mt-0.5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{rec}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Email gate */}
      {!showFullReport && (
        <div className="bg-gradient-to-br from-brand-accent/20 to-brand-mid/50 border border-brand-accent/30 rounded-2xl p-6 sm:p-8 mb-8 animate-slide-up">
          <div className="text-center max-w-md mx-auto">
            <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-brand-glow"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Get Your Full Detailed Report
            </h3>
            <p className="text-sm text-white/50 mb-6">
              Enter your email to unlock all recommendations and a downloadable
              report with actionable next steps.
            </p>
            <form onSubmit={handleEmailSubmit} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="work@company.com"
                className="flex-1 px-4 py-3 rounded-xl bg-brand-dark border border-white/10 text-white placeholder-white/30 focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-brand-accent hover:bg-brand-glow text-white font-semibold rounded-xl transition-colors shrink-0"
              >
                Unlock
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Full report (after email) */}
      {showFullReport && (
        <div className="space-y-8 animate-slide-up">
          {/* All recommendations */}
          <div className="bg-brand-mid/30 border border-white/5 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-semibold mb-4">
              All Recommendations
            </h2>
            <ul className="space-y-4">
              {result.recommendations.map((rec, i) => (
                <li key={i} className="flex gap-3 text-white/70">
                  <span className="w-6 h-6 rounded-full bg-brand-accent/20 text-brand-glow text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Assessment summary */}
          <div className="bg-brand-mid/30 border border-white/5 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-semibold mb-4">Your Responses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Company Size", value: answers.companySize },
                { label: "Industry", value: answers.industry },
                { label: "AI Policy", value: answers.aiPolicy },
                { label: "AI Monitoring", value: answers.monitoring },
                { label: "Employee Training", value: answers.training },
                { label: "Governance Tools", value: answers.governanceTools },
                { label: "Primary Concern", value: answers.primaryConcern },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between items-center py-2 border-b border-white/5 last:border-0"
                >
                  <span className="text-sm text-white/40">{item.label}</span>
                  <span className="text-sm font-medium text-white">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-brand-accent/20 to-brand-mid/50 border border-brand-accent/30 rounded-2xl p-6 sm:p-8 text-center">
            <h3 className="text-xl font-semibold mb-2">
              Ready to take control of Shadow AI?
            </h3>
            <p className="text-white/50 mb-6 max-w-md mx-auto">
              Aona AI provides enterprise-grade AI governance with real-time
              monitoring, policy enforcement, and compliance reporting.
            </p>
            <a
              href="https://aona.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-glow text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
            >
              Book a Demo with Aona AI
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      )}

      {/* Retake */}
      <div className="text-center mt-8">
        <Link
          href="/assess"
          className="text-sm text-white/40 hover:text-white/70 transition-colors"
        >
          Retake the assessment
        </Link>
      </div>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-brand-accent border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ResultsContent />
    </Suspense>
  );
}
