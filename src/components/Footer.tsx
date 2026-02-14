import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-brand-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-accent flex items-center justify-center text-white font-bold text-sm">
                S
              </div>
              <span className="font-manrope font-bold text-white text-lg">
                Shadow<span className="text-brand-glow">AI</span>
                <span className="text-white/50 font-normal">.report</span>
              </span>
            </div>
            <p className="text-sm text-white/50 max-w-xs">
              Free enterprise Shadow AI risk assessment tool. Understand your
              organization&apos;s exposure in 2 minutes.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/assess"
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  Risk Assessment
                </Link>
              </li>
              <li>
                <Link
                  href="/methodology"
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  Methodology
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              Powered by
            </h3>
            <a
              href="https://aona.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-glow hover:text-white transition-colors"
            >
              <span className="font-manrope font-bold text-lg">Aona AI</span>
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
            <p className="text-sm text-white/50 mt-2">
              Enterprise AI governance &amp; security platform
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Aona AI. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            ShadowAI.report is a free tool by{" "}
            <a
              href="https://aona.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
            >
              Aona AI
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
