import './Roadmap.css';

const phases = [
  {
    phase: 'Phase 1',
    title: 'Foundation',
    period: 'Week 1-2',
    items: ['Advanced Solidity & EVM internals', 'Foundry testing framework', 'Smart contract patterns'],
    status: 'completed',
  },
  {
    phase: 'Phase 2',
    title: 'Uniswap v4 Hooks',
    period: 'Week 3-4',
    items: ['PoolManager & PoolKey architecture', 'Hook lifecycle (beforeSwap, afterSwap)', 'Build basic hooks (fee, whitelist)'],
    status: 'active',
  },
  {
    phase: 'Phase 3',
    title: 'Zero-Knowledge Proofs',
    period: 'Week 5-8',
    items: ['ZK-SNARKs theory (Groth16)', 'Circom circuit design', 'snarkjs: generate Solidity verifier'],
    status: 'upcoming',
  },
  {
    phase: 'Phase 4',
    title: 'Integration & Deployment',
    period: 'Week 9-12',
    items: ['ZK-Hook integration & testing', 'Deploy to Unichain testnet', 'Fuzz testing & audit'],
    status: 'upcoming',
  },
];

export default function Roadmap() {
  return (
    <section className="section roadmap" id="roadmap">
      <div className="container">
        <div className="section-header">
          <span className="section-label">🗺️ Roadmap</span>
          <h2 className="section-title">
            Development <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="section-subtitle">
            A 12-week plan to build and deploy ZK-Hook on Unichain.
          </p>
        </div>

        <div className="roadmap__timeline">
          {phases.map((phase, i) => (
            <div
              key={phase.phase}
              className={`roadmap__item roadmap__item--${phase.status} fade-in-up`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="roadmap__marker">
                <div className="roadmap__dot" />
                {i < phases.length - 1 && <div className="roadmap__line" />}
              </div>

              <div className="roadmap__card glass-card">
                <div className="roadmap__card-header">
                  <span className="roadmap__phase">{phase.phase}</span>
                  <span className="roadmap__period">{phase.period}</span>
                </div>
                <h3 className="roadmap__title">{phase.title}</h3>
                <ul className="roadmap__list">
                  {phase.items.map((item) => (
                    <li key={item} className="roadmap__list-item">
                      <span className="roadmap__check">
                        {phase.status === 'completed' ? '✓' : '○'}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                {phase.status === 'active' && (
                  <div className="roadmap__active-badge">
                    <span className="glow-dot" /> In Progress
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
