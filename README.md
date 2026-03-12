# ZK-Hook Landing Page

Landing page for **ZK-Hook** — a privacy-preserving DeFi trading hook on Uniswap v4 using Zero-Knowledge Proofs, deployed on Unichain.

## Tech Stack

- **React** + **Vite**
- **Vanilla CSS** (dark-mode, glassmorphism)
- **react-icons**

## Sections

| Section | Description |
|---------|-------------|
| **Navbar** | Sticky glass header with logo, nav links, CTA button, mobile menu |
| **Hero** | Headline, description, CTA buttons, animated gradient orbs, stats bar |
| **Features** | 4 cards: Privacy, KYC Compliance, On-Chain Verification, Anti-Replay |
| **How It Works** | 2 tabs (Whitelist Registration / Transaction Verification) with step-by-step timeline |
| **Tech Stack** | 3 columns: ZK Circuits, Smart Contracts, Frontend & Client |
| **Footer** | Documentation links, resources, community |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

The app will be available at **http://localhost:5173/**

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx / .css
│   ├── Hero.jsx / .css
│   ├── Features.jsx / .css
│   ├── HowItWorks.jsx / .css
│   ├── TechStack.jsx / .css
│   └── Footer.jsx / .css
├── App.jsx
├── main.jsx
└── index.css          # Design system & global styles
```
