export interface AssessmentAnswers {
  companySize: string;
  industry: string;
  aiPolicy: string;
  monitoring: string;
  training: string;
  governanceTools: string;
  primaryConcern: string;
}

export interface RiskBreakdown {
  dataExposure: number;
  policyGap: number;
  compliance: number;
  visibilityGap: number;
}

export interface RiskResult {
  totalScore: number;
  breakdown: RiskBreakdown;
  riskLevel: "low" | "medium" | "high" | "critical";
  recommendations: string[];
}

const INDUSTRY_MULTIPLIERS: Record<string, number> = {
  "Financial Services": 1.3,
  Healthcare: 1.3,
  Government: 1.2,
  Technology: 1.0,
  Education: 1.1,
  Manufacturing: 1.1,
  Other: 1.0,
};

const COMPANY_SIZE_FACTOR: Record<string, number> = {
  "1-50": 0.5,
  "51-200": 0.7,
  "201-1000": 0.85,
  "1001-5000": 1.0,
  "5000+": 1.0,
};

export function calculateRiskScore(answers: AssessmentAnswers): RiskResult {
  const sizeFactor = COMPANY_SIZE_FACTOR[answers.companySize] ?? 0.8;
  const industryMultiplier = INDUSTRY_MULTIPLIERS[answers.industry] ?? 1.0;

  // Data Exposure Risk (0-25)
  let dataExposure = 10; // base
  if (answers.aiPolicy === "No") dataExposure += 6;
  else if (answers.aiPolicy === "Unsure") dataExposure += 4;
  if (answers.monitoring === "No") dataExposure += 5;
  else if (answers.monitoring === "Partially") dataExposure += 2;
  if (answers.training === "No") dataExposure += 4;
  else if (answers.training === "Some") dataExposure += 2;
  dataExposure = Math.min(25, Math.round(dataExposure * sizeFactor));

  // Policy Gap Risk (0-25)
  let policyGap = 5; // base
  if (answers.aiPolicy === "No") policyGap += 10;
  else if (answers.aiPolicy === "Unsure") policyGap += 7;
  if (answers.training === "No") policyGap += 8;
  else if (answers.training === "Some") policyGap += 4;
  policyGap = Math.min(25, Math.round(policyGap * sizeFactor));

  // Compliance Risk (0-25)
  let compliance = 8; // base
  if (answers.aiPolicy === "No") compliance += 5;
  else if (answers.aiPolicy === "Unsure") compliance += 3;
  if (answers.governanceTools === "No") compliance += 5;
  if (answers.monitoring === "No") compliance += 4;
  else if (answers.monitoring === "Partially") compliance += 2;
  compliance = Math.min(25, Math.round(compliance * industryMultiplier));

  // Visibility Gap Risk (0-25)
  let visibilityGap = 5; // base
  if (answers.monitoring === "No") visibilityGap += 10;
  else if (answers.monitoring === "Partially") visibilityGap += 5;
  if (answers.governanceTools === "No") visibilityGap += 8;
  visibilityGap = Math.min(25, Math.round(visibilityGap * sizeFactor));

  const rawTotal = dataExposure + policyGap + compliance + visibilityGap;
  const totalScore = Math.min(100, rawTotal);

  const riskLevel =
    totalScore >= 75
      ? "critical"
      : totalScore >= 50
        ? "high"
        : totalScore >= 30
          ? "medium"
          : "low";

  const recommendations = generateRecommendations(answers, {
    dataExposure,
    policyGap,
    compliance,
    visibilityGap,
  });

  return {
    totalScore,
    breakdown: { dataExposure, policyGap, compliance, visibilityGap },
    riskLevel,
    recommendations,
  };
}

function generateRecommendations(
  answers: AssessmentAnswers,
  breakdown: RiskBreakdown
): string[] {
  const recs: string[] = [];

  if (answers.aiPolicy !== "Yes") {
    recs.push(
      "Establish a formal AI Acceptable Use Policy to set clear boundaries for AI tool usage across your organization."
    );
  }

  if (answers.monitoring === "No") {
    recs.push(
      "Deploy AI usage monitoring to gain visibility into which AI tools employees are using and what data is being shared."
    );
  } else if (answers.monitoring === "Partially") {
    recs.push(
      "Expand your AI monitoring coverage to include all departments and shadow IT channels."
    );
  }

  if (answers.training === "No") {
    recs.push(
      "Implement mandatory AI data handling training for all employees to reduce data leakage risks."
    );
  } else if (answers.training === "Some") {
    recs.push(
      "Extend AI security training to cover all employees, not just select teams."
    );
  }

  if (answers.governanceTools === "No") {
    recs.push(
      "Consider adopting an AI governance platform like Aona AI to automate policy enforcement and risk monitoring."
    );
  }

  if (breakdown.compliance > 15) {
    recs.push(
      "Your industry has heightened regulatory requirements. Prioritize compliance-focused AI governance to avoid potential fines and penalties."
    );
  }

  if (breakdown.dataExposure > 18) {
    recs.push(
      "Your data exposure risk is critical. Implement DLP (Data Loss Prevention) controls specifically for AI tool interactions."
    );
  }

  if (recs.length === 0) {
    recs.push(
      "Your organization shows strong AI governance fundamentals. Consider continuous monitoring with Aona AI to maintain this posture."
    );
  }

  return recs;
}
