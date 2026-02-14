export const COMPANY_SIZES = [
  "1-50",
  "51-200",
  "201-1000",
  "1001-5000",
  "5000+",
] as const;

export const INDUSTRIES = [
  "Financial Services",
  "Healthcare",
  "Technology",
  "Government",
  "Education",
  "Manufacturing",
  "Other",
] as const;

export const STATS = [
  {
    value: "73%",
    label: "of employees use AI tools without IT approval",
  },
  {
    value: "60%",
    label: "of organizations have no AI acceptable use policy",
  },
  {
    value: "$4.2M",
    label: "average cost of a data breach involving AI tools",
  },
  {
    value: "38%",
    label: "of sensitive data shared with AI is confidential business data",
  },
];

export const STEPS = [
  {
    id: "companySize",
    question: "How many employees does your organization have?",
    description:
      "Larger organizations typically face greater Shadow AI exposure due to more users and less centralized control.",
    type: "select" as const,
    options: ["1-50", "51-200", "201-1000", "1001-5000", "5000+"],
  },
  {
    id: "industry",
    question: "What industry is your organization in?",
    description:
      "Different industries face varying levels of regulatory scrutiny around AI usage and data handling.",
    type: "select" as const,
    options: [
      "Financial Services",
      "Healthcare",
      "Technology",
      "Government",
      "Education",
      "Manufacturing",
      "Other",
    ],
  },
  {
    id: "aiPolicy",
    question: "Do you have an AI acceptable use policy?",
    description:
      "An AI policy sets guidelines for how employees can use AI tools and what data can be shared.",
    type: "select" as const,
    options: ["Yes", "No", "Unsure"],
  },
  {
    id: "monitoring",
    question: "Do you monitor which AI tools employees use?",
    description:
      "Visibility into AI tool usage is the first step to managing Shadow AI risk.",
    type: "select" as const,
    options: ["Yes", "No", "Partially"],
  },
  {
    id: "training",
    question: "Have employees been trained on AI data handling?",
    description:
      "Training helps employees understand what data is safe to share with AI tools.",
    type: "select" as const,
    options: ["Yes", "No", "Some"],
  },
  {
    id: "governanceTools",
    question: "Do you use any AI governance or security tools?",
    description:
      "Dedicated tools help automate AI policy enforcement and monitor data flows.",
    type: "select" as const,
    options: ["Yes", "No"],
  },
  {
    id: "primaryConcern",
    question: "What is your primary concern about Shadow AI?",
    description:
      "This helps us tailor your risk report to what matters most to your organization.",
    type: "select" as const,
    options: ["Data leakage", "Compliance", "Productivity", "All of the above"],
  },
];
