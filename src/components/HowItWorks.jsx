import { useState } from 'react';
import { HiUserPlus, HiArrowsRightLeft } from 'react-icons/hi2';
import './HowItWorks.css';

const registrationSteps = [
  {
    step: '01',
    title: 'Generate Secret Key',
    desc: 'The application on the user\'s device automatically generates a Secret Key and creates a Hash Commitment through a mathematical function.',
    highlight: 'Device-side',
  },
  {
    step: '02',
    title: 'Identity Verification (KYC)',
    desc: 'The user completes identity verification along with their Hash Commitment through the KYC provider to obtain a digital certificate.',
    highlight: 'KYC Provider',
  },
  {
    step: '03',
    title: 'Submit to Server',
    desc: 'The device sends the Hash Commitment along with the digital certificate to the central server for validation.',
    highlight: 'Backend',
  },
  {
    step: '04',
    title: 'Update Merkle Tree',
    desc: 'The server verifies the certificate, adds the hash to the Merkle Tree structure, and computes a new Merkle Root.',
    highlight: 'Server',
  },
  {
    step: '05',
    title: 'Record On-Chain',
    desc: 'The new Merkle Root is updated on the Smart Contract. The user is now officially authorized to participate in trading.',
    highlight: 'Blockchain',
  },
];

const transactionSteps = [
  {
    step: '01',
    title: 'Request Merkle Proof',
    desc: 'The device connects to the server to obtain the Merkle Proof corresponding to the user\'s position in the data tree.',
    highlight: 'Server',
  },
  {
    step: '02',
    title: 'Load Circuit Inputs',
    desc: 'Feed the Secret Key and Merkle Path (private inputs) along with the Merkle Root, Wallet Address, and Nullifier (public inputs) into the ZK circuit.',
    highlight: 'Circom',
  },
  {
    step: '03',
    title: 'Generate ZK Proof',
    desc: 'The Circom circuit runs the Groth16 algorithm via WebAssembly, creating a unique ZK Proof bound to the current wallet address.',
    highlight: 'WASM',
  },
  {
    step: '04',
    title: 'Execute Swap',
    desc: 'The user submits a swap transaction with the ZK Proof attached in the hookData field of the transaction.',
    highlight: 'Ethers.js',
  },
  {
    step: '05',
    title: 'Hook Verification',
    desc: 'The ZK-Hook intercepts the transaction and passes the proof to the Verifier Contract for mathematical validation.',
    highlight: 'Solidity',
  },
  {
    step: '06',
    title: 'Approve / Reject',
    desc: 'If the proof is valid → swap executes. If any mismatch is detected (copied proof, wrong wallet, wrong root) → transaction is immediately reverted.',
    highlight: 'Smart Contract',
  },
];

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState('register');

  const steps = activeTab === 'register' ? registrationSteps : transactionSteps;

  return (
    <section className="section how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <span className="section-label">⚙️ Architecture</span>
          <h2 className="section-title">
            How <span className="gradient-text">ZK-Hook</span> Works
          </h2>
          <p className="section-subtitle">
            Two main flows: whitelist registration and transaction verification — all with absolute security.
          </p>
        </div>

        <div className="how__tabs">
          <button
            className={`how__tab ${activeTab === 'register' ? 'how__tab--active' : ''}`}
            onClick={() => setActiveTab('register')}
          >
            <HiUserPlus /> Whitelist Registration
          </button>
          <button
            className={`how__tab ${activeTab === 'transaction' ? 'how__tab--active' : ''}`}
            onClick={() => setActiveTab('transaction')}
          >
            <HiArrowsRightLeft /> Transaction Verification
          </button>
        </div>

        <div className="how__timeline">
          {steps.map((item, i) => (
            <div key={`${activeTab}-${i}`} className="how__step fade-in-up" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="how__step-indicator">
                <div className="how__step-number">{item.step}</div>
                {i < steps.length - 1 && <div className="how__step-line" />}
              </div>
              <div className="how__step-content glass-card">
                <span className="how__step-badge">{item.highlight}</span>
                <h3 className="how__step-title">{item.title}</h3>
                <p className="how__step-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
