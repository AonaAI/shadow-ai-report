import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Methodology — Shadow AI Risk Score",
  description:
    "Learn how the Shadow AI Risk Score is calculated across four key dimensions: Data Exposure, Policy Gap, Compliance, and Visibility Gap.",
};

export default function MethodologyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          How We Calculate Your{" "}
          <span className="text-gradient">Risk Score</span>
        </h1>
        <p className="text-white/50 text-lg">
          Our scoring methodology is designed to give you a realistic picture of
          your Shadow AI exposure. Here&apos;s how it works.
        </p>
      </div>

      {/* Overview */}
      <div className="bg-brand-mid/30 border border-white/5 rounded-2xl p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-semibold mb-4">Overview</h2>
        <p className="text-white/60 leading-relaxed mb-4">
          Your total Shadow AI Risk Score is calculated on a 0&ndash;100 scale
          by summing four risk dimension scores, each weighted 0&ndash;25
          points. The score is then adjusted based on your industry&apos;s
          regulatory environment.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { score: "0-25", label: "Low Risk", color: "text-green-400" },
            { score: "26-49", label: "Medium Risk", color: "text-yellow-400" },
            { score: "50-74", label: "High Risk", color: "text-orange-400" },
            { score: "75-100", label: "Critical", color: "text-red-400" },
          ].map((level) => (
            <div
              key={level.label}
              className="text-center p-3 rounded-xl bg-brand-dark/50 border border-white/5"
            >
              <div className={`text-lg font-bold ${level.color}`}>
                {level.score}
              </div>
              <div className="text-xs text-white/40">{level.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Four Dimensions */}
      <div className="space-y-6 mb-8">
        <h2 className="text-xl font-semibold">The Four Risk Dimensions</h2>

        {[
          {
            title: "Data Exposure Risk",
            points: "0-25 points",
            color: "#ef4444",
            description:
              "Measures the likelihood of sensitive data being exposed through unmonitored AI tool usage.",
            factors: [
              "No AI acceptable use policy increases base risk significantly",
              "Lack of monitoring means data flows to AI tools go undetected",
              "Untrained employees are more likely to share sensitive information",
              "Larger organizations have more potential data exposure vectors",
            ],
          },
          {
            title: "Policy Gap Risk",
            points: "0-25 points",
            color: "#f97316",
            description:
              "Evaluates the maturity of your organization's AI governance policies and employee training.",
            factors: [
              "Organizations without formal AI policies score highest",
              "Partial or uncertain policy status still indicates elevated risk",
              "Employee training status directly impacts this dimension",
              "Company size affects scale of policy coverage needed",
            ],
          },
          {
            title: "Compliance Risk",
            points: "0-25 points",
            color: "#eab308",
            description:
              "Assesses regulatory and compliance exposure based on your industry and current governance posture.",
            factors: [
              "Financial Services and Healthcare industries carry 1.3x multiplier",
              "Government organizations carry a 1.2x multiplier",
              "Lack of governance tools compounds compliance risk",
              "Missing monitoring capabilities increase regulatory exposure",
            ],
          },
          {
            title: "Visibility Gap Risk",
            points: "0-25 points",
            color: "#8b5cf6",
            description:
              "Measures how well your organization can detect and track AI tool usage across the workforce.",
            factors: [
              "No monitoring capability results in maximum visibility gap",
              "Partial monitoring leaves blind spots across departments",
              "Absence of dedicated governance tools amplifies the gap",
              "Larger organizations require more robust visibility solutions",
            ],
          },
        ].map((dim) => (
          <div
            key={dim.title}
            className="bg-brand-mid/30 border border-white/5 rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: dim.color }}
              />
              <h3 className="text-lg font-semibold">{dim.title}</h3>
              <span className="text-xs text-white/30 ml-auto">
                {dim.points}
              </span>
            </div>
            <p className="text-white/60 mb-4">{dim.description}</p>
            <ul className="space-y-2">
              {dim.factors.map((factor, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-white/50"
                >
                  <svg
                    className="w-4 h-4 mt-0.5 shrink-0"
                    fill="none"
                    stroke={dim.color}
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  {factor}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Industry Multipliers */}
      <div className="bg-brand-mid/30 border border-white/5 rounded-2xl p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-semibold mb-4">Industry Multipliers</h2>
        <p className="text-white/60 mb-6">
          Compliance risk is adjusted based on your industry&apos;s regulatory
          environment. More heavily regulated industries face higher base
          compliance risk.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { name: "Financial Services", mult: "1.3x", high: true },
            { name: "Healthcare", mult: "1.3x", high: true },
            { name: "Government", mult: "1.2x", high: false },
            { name: "Education", mult: "1.1x", high: false },
            { name: "Manufacturing", mult: "1.1x", high: false },
            { name: "Technology", mult: "1.0x", high: false },
          ].map((ind) => (
            <div
              key={ind.name}
              className={`p-3 rounded-xl border text-center ${
                ind.high
                  ? "border-red-500/20 bg-red-500/5"
                  : "border-white/5 bg-brand-dark/30"
              }`}
            >
              <div
                className={`text-lg font-bold ${ind.high ? "text-red-400" : "text-white/70"}`}
              >
                {ind.mult}
              </div>
              <div className="text-xs text-white/40">{ind.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Aona AI CTA */}
      <div className="bg-gradient-to-br from-brand-accent/20 to-brand-mid/50 border border-brand-accent/30 rounded-2xl p-6 sm:p-8 text-center">
        <h2 className="text-xl font-semibold mb-2">
          Want to go beyond the score?
        </h2>
        <p className="text-white/50 mb-6 max-w-lg mx-auto">
          Aona AI provides a comprehensive AI governance platform with
          real-time monitoring, automated policy enforcement, and continuous
          risk scoring across your entire organization.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://aona.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-glow text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Learn about Aona AI
            <svg
              className="w-4 h-4"
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
          <Link
            href="/assess"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white px-6 py-3 rounded-xl border border-white/10 hover:border-white/20 transition-colors"
          >
            Take the assessment
          </Link>
        </div>
      </div>
    </div>
  );
}
