# ShadowAI.report — Project Brief

## What
A free, interactive **Shadow AI Risk Score** tool that helps enterprises estimate their exposure to unmanaged AI usage. Built to drive SEO traffic and capture leads for [Aona AI](https://aona.ai).

## Tech Stack
- **Next.js 14** (App Router, static export)
- **Tailwind CSS** for styling
- **TypeScript**
- **Firebase Hosting** for deployment
- Static export (`output: "export"`)

## Brand
- **Powered by Aona AI** — prominent but not overwhelming
- Brand colors: Dark purple `#11021d` / `#1a0533` / `#2d1054`, accent purple `#6412A6`
- Font: Manrope (Google Fonts)
- Professional, enterprise-grade look. Clean, modern, trustworthy.

## Pages & Features

### 1. Landing Page (`/`)
- Hero: "How Exposed Is Your Organization to Shadow AI?" with compelling subtext
- Brief explanation of what Shadow AI is and why it matters
- CTA: "Get Your Free Risk Score" → scrolls to the form
- Social proof section (stats like "73% of employees use AI tools without IT approval")
- Footer with Aona AI branding + link

### 2. Risk Assessment Form (`/assess` or inline on landing)
- Multi-step form (5-7 steps), NOT a wall of inputs
- Questions:
  1. Company size (employee count ranges)
  2. Industry (dropdown: Financial Services, Healthcare, Technology, Government, Education, Manufacturing, Other)
  3. Do you have an AI acceptable use policy? (Yes/No/Unsure)
  4. Do you monitor which AI tools employees use? (Yes/No/Partially)
  5. Have employees been trained on AI data handling? (Yes/No/Some)
  6. Do you use any AI governance/security tools? (Yes/No)
  7. What's your primary concern? (Data leakage / Compliance / Productivity / All)
- Progress bar showing completion
- Smooth transitions between steps

### 3. Results Page (`/results`)
- **Risk Score**: 0-100 scale with color coding (red/amber/green)
- Visual gauge/meter showing the score
- Breakdown by category:
  - Data Exposure Risk
  - Policy Gap Risk
  - Compliance Risk
  - Visibility Gap Risk
- Personalized recommendations based on answers
- **Email gate**: "Enter your email to get the full detailed report" (captures lead)
- After email: show full report + "Book a Demo with Aona AI" CTA
- Option to download as PDF (stretch goal)

### 4. About/Methodology Page (`/methodology`)
- How the scoring works (builds trust)
- Link to Aona AI's full governance platform

## Risk Scoring Algorithm
Based on the answers, calculate scores across 4 dimensions:
- **Data Exposure Risk** (0-25): Higher if no policy, no monitoring, large company
- **Policy Gap Risk** (0-25): Higher if no AI policy, no training
- **Compliance Risk** (0-25): Varies by industry (financial/healthcare = higher base risk)
- **Visibility Gap Risk** (0-25): Higher if no monitoring tools, no governance platform

Total = sum of 4 dimensions. Higher = more at risk.

Industry multipliers:
- Financial Services: 1.3x
- Healthcare: 1.3x  
- Government: 1.2x
- Technology: 1.0x
- Education: 1.1x
- Manufacturing: 1.1x

## SEO
- Meta title: "Shadow AI Risk Score — Free Enterprise AI Risk Assessment"
- Meta description: "Discover your organization's Shadow AI risk in 2 minutes. Free assessment tool by Aona AI."
- Open Graph tags for social sharing
- Schema.org markup (WebApplication)

## Firebase Hosting
- Set up `firebase.json` for static hosting
- `next.config.js` with `output: "export"`, `distDir: "out"`
- 404 page

## Key Files to Create
- `firebase.json`
- `.firebaserc` (project: aona-shadow-ai-report or similar)
- Standard Next.js app structure
- `src/app/` with pages
- `src/components/` for reusable components
- `src/lib/scoring.ts` for the risk algorithm
