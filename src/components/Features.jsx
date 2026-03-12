import { HiLockClosed, HiShieldCheck, HiBolt, HiFingerPrint } from 'react-icons/hi2';
import './Features.css';

const features = [
  {
    icon: <HiLockClosed />,
    title: 'Privacy-First Trading',
    description: 'Execute swaps from any wallet without revealing your identity on the whitelist. Zero-Knowledge Proofs guarantee absolute anonymity for every transaction.',
    color: 'indigo',
  },
  {
    icon: <HiShieldCheck />,
    title: 'KYC Compliance',
    description: 'Meet regulatory requirements through a secure identity verification process. Digital certificates validate user eligibility without storing personal data on-chain.',
    color: 'green',
  },
  {
    icon: <HiBolt />,
    title: 'On-Chain Verification',
    description: 'Mathematical proofs are verified directly on smart contracts via a Groth16 verifier. Every swap is checked before execution for maximum security.',
    color: 'cyan',
  },
  {
    icon: <HiFingerPrint />,
    title: 'Anti-Replay Protection',
    description: 'Nullifier parameters ensure each proof can only be used once. Prevents proof copying and reuse, protecting the integrity of the entire system.',
    color: 'purple',
  },
];

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-header">
          <span className="section-label">✨ Core Features</span>
          <h2 className="section-title">
            Why choose <span className="gradient-text">ZK-Hook</span>?
          </h2>
          <p className="section-subtitle">
            The perfect combination of privacy and regulatory compliance for next-generation DeFi trading.
          </p>
        </div>

        <div className="features__grid">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="features__card glass-card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`features__icon features__icon--${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="features__card-title">{feature.title}</h3>
              <p className="features__card-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
