"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { STEPS } from "@/lib/constants";

export default function AssessPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  const step = STEPS[currentStep];
  const totalSteps = STEPS.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const handleSelect = useCallback(
    (value: string) => {
      const newAnswers = { ...answers, [step.id]: value };
      setAnswers(newAnswers);

      if (currentStep < totalSteps - 1) {
        setDirection("forward");
        setTimeout(() => setCurrentStep((s) => s + 1), 150);
      } else {
        // All steps complete — navigate to results
        const params = new URLSearchParams(newAnswers as Record<string, string>);
        router.push(`/results?${params.toString()}`);
      }
    },
    [answers, currentStep, totalSteps, step.id, router]
  );

  const handleBack = useCallback(() => {
    if (currentStep > 0) {
      setDirection("backward");
      setCurrentStep((s) => s - 1);
    }
  }, [currentStep]);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col">
      {/* Progress bar */}
      <div className="w-full bg-brand-mid/50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between text-xs text-white/40 mb-2">
            <span>
              Step {currentStep + 1} of {totalSteps}
            </span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-accent rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Form content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-12">
        <div className="w-full max-w-xl">
          <div
            key={currentStep}
            className={`${
              direction === "forward" ? "animate-slide-in-right" : "animate-fade-in"
            }`}
          >
            {/* Back button */}
            {currentStep > 0 && (
              <button
                onClick={handleBack}
                className="flex items-center gap-1 text-sm text-white/40 hover:text-white/70 transition-colors mb-8"
              >
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back
              </button>
            )}

            {/* Question */}
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {step.question}
            </h2>
            <p className="text-white/40 mb-8">{step.description}</p>

            {/* Options */}
            <div className="space-y-3">
              {step.options.map((option) => {
                const isSelected = answers[step.id] === option;
                return (
                  <button
                    key={option}
                    onClick={() => handleSelect(option)}
                    className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 group ${
                      isSelected
                        ? "border-brand-accent bg-brand-accent/10 text-white"
                        : "border-white/10 bg-brand-mid/30 text-white/70 hover:border-brand-accent/50 hover:bg-brand-mid/50 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{option}</span>
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                          isSelected
                            ? "border-brand-accent bg-brand-accent"
                            : "border-white/20 group-hover:border-white/40"
                        }`}
                      >
                        {isSelected && (
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
