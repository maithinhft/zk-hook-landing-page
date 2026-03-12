import { SiEthereum, SiGithub } from 'react-icons/si';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import './Footer.css';

const docLinks = [
  { label: 'Uniswap v4', href: 'https://docs.uniswap.org/contracts/v4/overview' },
  { label: 'Unichain', href: 'https://docs.unichain.org' },
  { label: 'Circom', href: 'https://docs.circom.io' },
  { label: 'snarkjs', href: 'https://github.com/iden3/snarkjs' },
];

const resourceLinks = [
  { label: 'ZK Learning', href: 'https://zk-learning.org' },
  { label: 'circomlib', href: 'https://github.com/iden3/circomlib' },
  { label: 'Noir', href: 'https://noir-lang.org' },
  { label: 'Awesome ZK', href: 'https://github.com/matter-labs/awesome-zero-knowledge-proofs' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="navbar__logo-icon">
                <SiEthereum />
              </div>
              <span className="navbar__logo-text" style={{ fontSize: '1.2rem' }}>ZK-Hook</span>
            </div>
            <p className="footer__desc">
              Privacy-preserving DeFi trading hook with Zero-Knowledge Proofs on Uniswap v4, deployed on Unichain.
            </p>
          </div>

          {/* Docs */}
          <div className="footer__col">
            <h4 className="footer__col-title">Documentation</h4>
            <ul className="footer__links">
              {docLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="footer__link">
                    {link.label} <HiArrowTopRightOnSquare />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="footer__col">
            <h4 className="footer__col-title">Resources</h4>
            <ul className="footer__links">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="footer__link">
                    {link.label} <HiArrowTopRightOnSquare />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="footer__col">
            <h4 className="footer__col-title">Community</h4>
            <div className="footer__socials">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                <SiGithub /> GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; 2026 ZK-Hook. Built with ❤️ for decentralized privacy.</p>
        </div>
      </div>
    </footer>
  );
}
