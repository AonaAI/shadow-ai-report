"use client";

import { useEffect, useState } from "react";

interface RiskGaugeProps {
  score: number;
  riskLevel: "low" | "medium" | "high" | "critical";
}

const RISK_COLORS = {
  low: { stroke: "#22c55e", text: "text-green-400", label: "Low Risk" },
  medium: { stroke: "#eab308", text: "text-yellow-400", label: "Medium Risk" },
  high: { stroke: "#f97316", text: "text-orange-400", label: "High Risk" },
  critical: { stroke: "#ef4444", text: "text-red-400", label: "Critical Risk" },
};

export default function RiskGauge({ score, riskLevel }: RiskGaugeProps) {
  const [animatedScore, setAnimatedScore] = useState(0);
  const config = RISK_COLORS[riskLevel];

  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (animatedScore / 100) * circumference;

  useEffect(() => {
    const duration = 1500;
    const start = performance.now();

    function animate(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimatedScore(Math.round(score * eased));
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [score]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-48 h-48 sm:w-56 sm:h-56">
        <svg
          className="w-full h-full -rotate-90"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="8"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke={config.stroke}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-100"
            style={{
              filter: `drop-shadow(0 0 8px ${config.stroke}66)`,
            }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-5xl sm:text-6xl font-bold font-manrope ${config.text}`}>
            {animatedScore}
          </span>
          <span className="text-white/40 text-sm mt-1">out of 100</span>
        </div>
      </div>
      <div className={`mt-4 px-4 py-1.5 rounded-full text-sm font-semibold ${config.text} bg-white/5 border border-white/10`}>
        {config.label}
      </div>
    </div>
  );
}
