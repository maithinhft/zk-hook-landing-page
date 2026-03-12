import { SiSolidity, SiReact, SiWebassembly } from 'react-icons/si';
import { HiCpuChip, HiBeaker, HiCommandLine, HiCube, HiGlobeAlt, HiCalculator } from 'react-icons/hi2';
import './TechStack.css';

const stacks = [
  {
    title: 'ZK Circuits',
    icon: <HiCpuChip />,
    color: 'cyan',
    techs: [
      { name: 'Circom', desc: 'ZK circuit design language', icon: <HiCalculator /> },
      { name: 'snarkjs', desc: 'Generate & verify ZK Proofs', icon: <HiBeaker /> },
      { name: 'Groth16', desc: 'Fast proving system', icon: <HiCommandLine /> },
    ],
  },
  {
    title: 'Smart Contracts',
    icon: <HiCube />,
    color: 'indigo',
    techs: [
      { name: 'Solidity', desc: 'Smart contract language', icon: <SiSolidity /> },
      { name: 'Foundry', desc: 'Testing framework', icon: <HiBeaker /> },
      { name: 'Uniswap v4', desc: 'Hook lifecycle & PoolManager', icon: <HiGlobeAlt /> },
    ],
  },
  {
    title: 'Frontend & Client',
    icon: <HiGlobeAlt />,
    color: 'green',
    techs: [
      { name: 'React', desc: 'User interface', icon: <SiReact /> },
      { name: 'Ethers.js', desc: 'Blockchain connectivity', icon: <HiCube /> },
      { name: 'WebAssembly', desc: 'Run circuits in browser', icon: <SiWebassembly /> },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="section" id="tech-stack">
      <div className="container">
        <div className="section-header">
          <span className="section-label">🛠️ Technology</span>
          <h2 className="section-title">
            Core <span className="gradient-text">Technology</span>
          </h2>
          <p className="section-subtitle">
            Combining the most advanced technologies in ZK, DeFi, and Web3 to build an optimal security system.
          </p>
        </div>

        <div className="tech__grid">
          {stacks.map((stack, i) => (
            <div key={stack.title} className="tech__column glass-card fade-in-up" style={{ animationDelay: `${i * 0.12}s` }}>
              <div className="tech__column-header">
                <div className={`tech__column-icon tech__column-icon--${stack.color}`}>
                  {stack.icon}
                </div>
                <h3 className="tech__column-title">{stack.title}</h3>
              </div>

              <div className="tech__items">
                {stack.techs.map((tech) => (
                  <div key={tech.name} className="tech__item">
                    <div className={`tech__item-icon tech__item-icon--${stack.color}`}>
                      {tech.icon}
                    </div>
                    <div>
                      <div className="tech__item-name">{tech.name}</div>
                      <div className="tech__item-desc">{tech.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
