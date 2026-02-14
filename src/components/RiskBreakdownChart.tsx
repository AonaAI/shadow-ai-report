"use client";

import { useEffect, useState } from "react";
import type { RiskBreakdown } from "@/lib/scoring";

const CATEGORIES = [
  { key: "dataExposure" as const, label: "Data Exposure", color: "#ef4444", icon: "M12 9v2m0 4h.01M5.07 19h13.86c1.38 0 2.24-1.5 1.55-2.68l-6.93-12a1.75 1.75 0 00-3.1 0l-6.93 12C2.83 17.5 3.69 19 5.07 19z" },
  { key: "policyGap" as const, label: "Policy Gap", color: "#f97316", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { key: "compliance" as const, label: "Compliance", color: "#eab308", icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
  { key: "visibilityGap" as const, label: "Visibility Gap", color: "#8b5cf6", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" },
];

export default function RiskBreakdownChart({ breakdown }: { breakdown: RiskBreakdown }) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-5">
      {CATEGORIES.map((cat) => {
        const value = breakdown[cat.key];
        const pct = (value / 25) * 100;

        return (
          <div key={cat.key} className="group">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke={cat.color} viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={cat.icon} />
                </svg>
                <span className="text-sm font-medium text-white/80">{cat.label}</span>
              </div>
              <span className="text-sm font-bold text-white">{value}/25</span>
            </div>
            <div className="h-2.5 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: animated ? `${pct}%` : "0%",
                  backgroundColor: cat.color,
                  boxShadow: `0 0 8px ${cat.color}66`,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
