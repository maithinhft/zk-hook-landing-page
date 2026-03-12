import { HiArrowRight, HiBookOpen } from 'react-icons/hi';
import './Hero.css';

const stats = [
  { value: '~200K', label: 'Gas / Proof', accent: 'cyan' },
  { value: '<3s', label: 'Proof Generation', accent: 'green' },
  { value: 'Unichain', label: 'L2 Network', accent: 'purple' },
];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Animated background */}
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__container">
        <div className="hero__content fade-in-up">
          <div className="section-label">
            <span className="glow-dot" />
            Built on Uniswap v4
          </div>

          <h1 className="hero__title">
            Private DeFi Trading.
            <br />
            <span className="gradient-text">Verified On-Chain.</span>
          </h1>

          <p className="hero__subtitle">
            Fully anonymous decentralized trading powered by Zero-Knowledge Proofs,
            while maintaining full KYC compliance. A smart hook on Uniswap v4
            verifies mathematical proofs before every swap.
          </p>

          <div className="hero__actions">
            <a href="#how-it-works" className="btn btn-primary btn--lg">
              Get Started <HiArrowRight />
            </a>
            <a href="#tech-stack" className="btn btn-secondary btn--lg">
              <HiBookOpen /> Read Docs
            </a>
          </div>
        </div>

        <div className="hero__stats fade-in-up" style={{ animationDelay: '0.2s' }}>
          {stats.map((stat) => (
            <div key={stat.label} className="hero__stat">
              <span className={`hero__stat-value hero__stat-value--${stat.accent}`}>
                {stat.value}
              </span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
