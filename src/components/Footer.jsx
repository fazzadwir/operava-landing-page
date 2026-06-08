import { Globe, Mail } from 'lucide-react';
import operavaLogo from '../assets/operava-logo.svg';

const footerMenu = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Operations', href: '#workflow' },
  { label: 'Features', href: '#features' },
  { label: 'Reliability', href: '#reliability' },
  { label: 'Contact', href: '#cta' },
];

const handleNav = (event, href) => {
  if (!href.startsWith('#')) return;
  event.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#hero" className="footer__logo" onClick={(event) => handleNav(event, '#hero')}>
              <img src={operavaLogo} alt="Operava" className="footer__logo-img" />
            </a>
            <p className="footer__description">
              Managed DevOps, SOC & IT Operation Service untuk bisnis yang membutuhkan sistem
              lebih stabil, aman, dan siap berkembang.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            {footerMenu.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="footer__nav-link"
                onClick={(event) => handleNav(event, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer__middle">
          <p className="footer__tagline">Keep your system running. Secure. Reliable. Managed.</p>
          <div className="footer__contact">
            <a href="https://operava.id" className="footer__contact-link">
              <Globe size={16} strokeWidth={1.75} />
              operava.id
            </a>
            <a href="mailto:hello@operava.id" className="footer__contact-link">
              <Mail size={16} strokeWidth={1.75} />
              hello@operava.id
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Operava. All rights reserved.</p>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--color-bg);
          border-top: 1px solid var(--color-border);
          padding-block: var(--space-10) var(--space-5);
        }
        .footer__top {
          display: grid;
          grid-template-columns: minmax(280px, 0.8fr) 1fr;
          gap: var(--space-8);
          align-items: start;
          padding-bottom: var(--space-6);
        }
        .footer__brand {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }
        .footer__logo {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          color: var(--color-text-primary);
          font-size: var(--font-size-xl);
          font-weight: var(--fw-semibold);
          line-height: var(--lh-body);
        }
        .footer__logo-img {
          width: 132px;
          height: auto;
        }
        .footer__description {
          max-width: 384px;
          color: var(--color-text-secondary);
          font-size: var(--font-size-sm);
          line-height: var(--lh-body);
        }
        .footer__nav {
          display: flex;
          justify-content: flex-end;
          flex-wrap: wrap;
          gap: var(--space-2);
        }
        .footer__nav-link {
          color: var(--color-text-secondary);
          font-size: var(--font-size-sm);
          font-weight: var(--fw-medium);
          line-height: var(--lh-body);
          padding: var(--space-1);
          transition: color var(--transition-base);
        }
        .footer__nav-link:hover {
          color: var(--color-text-primary);
        }
        .footer__middle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-4);
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
          padding-block: var(--space-3);
        }
        .footer__tagline {
          color: var(--color-text-primary);
          font-size: var(--font-size-base);
          font-weight: var(--fw-semibold);
          line-height: var(--lh-body);
        }
        .footer__contact {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: var(--space-2);
        }
        .footer__contact-link {
          display: inline-flex;
          align-items: center;
          gap: var(--space-1);
          color: var(--color-text-secondary);
          font-size: var(--font-size-sm);
          font-weight: var(--fw-medium);
          line-height: var(--lh-body);
        }
        .footer__contact-link svg {
          color: var(--color-primary);
        }
        .footer__bottom {
          padding-top: var(--space-3);
          color: var(--color-text-secondary);
          font-size: var(--font-size-xs);
          line-height: var(--lh-body);
        }
        @media (max-width: 900px) {
          .footer__top {
            grid-template-columns: 1fr;
            gap: var(--space-4);
          }
          .footer__nav {
            justify-content: flex-start;
          }
          .footer__middle {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>
    </footer>
  );
}
