# Tradeo - Investment Learning Platform

Tradeo is a gamified financial literacy and investment learning platform designed for Southeast Asian youth aged 18-25. The app combines educational content, real-time stock market simulation, AI-powered guidance, and social features to help young adults develop strong money management habits and investment knowledge.

## Features

- **Gamified Learning**: Interactive lessons with XP, badges, and streaks
- **Stock Market Simulation**: Practice trading with $100,000 virtual capital
- **AI-Powered Guidance**: 24/7 chatbot for investment questions
- **Investment Tracking**: Monitor spending and set savings goals
- **Social Features**: Leaderboards and compete with friends
- **Localized Content**: Tailored for Southeast Asian markets

## Tech Stack

- **Framework**: Next.js 16 with TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Clerk (to be integrated)
- **AI Chat**: OpenAI API (to be integrated)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd aarav-tradeo
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles with Tailwind
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Landing page
├── components/
│   ├── Hero.tsx         # Hero section
│   ├── Features.tsx     # Features section
│   ├── HowItWorks.tsx   # How it works section
│   ├── Testimonials.tsx # User testimonials
│   ├── Pricing.tsx      # Pricing plans
│   ├── CTA.tsx          # Call to action
│   └── Footer.tsx       # Footer
├── public/              # Static assets
└── tailwind.config.ts   # Tailwind configuration
```

## Design System

### Colors
- Primary Green: #00C853
- Dark Green: #00A043
- Light Green: #B9F6CA
- Background: #F5F5F5
- Text Primary: #212121
- Text Secondary: #757575

### Typography
- Font Family: Inter
- Font Sizes: 12px - 60px
- Font Weights: 400, 500, 600, 700

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## Environment Variables

Create a `.env.local` file for local development:

```env
# Add your environment variables here
# NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
# CLERK_SECRET_KEY=
# OPENAI_API_KEY=
```

## Roadmap

- [x] Landing page design
- [ ] User authentication with Clerk
- [ ] Learning modules and lessons
- [ ] Stock market simulation
- [ ] AI chatbot integration
- [ ] Investment tracking
- [ ] Social features and leaderboards
- [ ] Mobile app (React Native)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License.

## Contact

For questions or support, please contact the development team.

---

Built with ❤️ for Southeast Asian youth investors
