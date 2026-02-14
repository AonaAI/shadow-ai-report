import Link from "next/link";
import { STATS } from "@/lib/constants";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-accent/10 via-transparent to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-glow text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-glow animate-pulse" />
              Free assessment &mdash; no signup required
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              How Exposed Is Your Organization to{" "}
              <span className="text-gradient">Shadow AI</span>?
            </h1>
            <p className="text-lg sm:text-xl text-white/60 mb-8 max-w-2xl mx-auto leading-relaxed">
              Employees are using ChatGPT, Copilot, and dozens of AI tools
              &mdash; often without IT&apos;s knowledge. Discover your risk
              level in under 2 minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/assess"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-glow text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 animate-pulse-glow text-lg"
              >
                Get Your Free Risk Score
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
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                href="/methodology"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white/60 hover:text-white font-medium px-6 py-4 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200"
              >
                How it works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Shadow AI */}
      <section className="relative py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What is <span className="text-gradient">Shadow AI</span>?
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              Shadow AI refers to the use of artificial intelligence tools by
              employees without the knowledge, approval, or oversight of IT and
              security teams. It&apos;s the fastest-growing shadow IT risk in
              enterprises today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "M12 9v2m0 4h.01M5.07 19h13.86c1.38 0 2.24-1.5 1.55-2.68l-6.93-12a1.75 1.75 0 00-3.1 0l-6.93 12C2.83 17.5 3.69 19 5.07 19z",
                title: "Data Leakage",
                desc: "Employees paste confidential data into AI tools, exposing trade secrets, customer data, and source code to third-party models.",
              },
              {
                icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
                title: "Compliance Violations",
                desc: "Unmonitored AI usage can violate GDPR, HIPAA, SOC 2, and other regulatory frameworks, resulting in fines and penalties.",
              },
              {
                icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
                title: "Zero Visibility",
                desc: "Most organizations have no idea which AI tools are being used, how often, or what data is being shared with them.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-brand-mid/50 border border-white/5 rounded-2xl p-6 hover:border-brand-accent/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 text-brand-glow"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={card.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20 sm:py-28 border-t border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/5 via-transparent to-brand-accent/5" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            The Shadow AI Problem by the Numbers
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div
                key={stat.value}
                className="text-center p-6 rounded-2xl bg-brand-mid/30 border border-white/5"
              >
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to find out your risk?
            </h2>
            <p className="text-white/50 text-lg mb-8">
              Take our free 2-minute assessment and get your personalized Shadow
              AI Risk Score with actionable recommendations.
            </p>
            <Link
              href="/assess"
              className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-glow text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-lg"
            >
              Start Free Assessment
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
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
