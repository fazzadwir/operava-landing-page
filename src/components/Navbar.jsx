import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import operavaLogo from '../assets/operava-logo.svg';

const navLinks = [
  { label: 'Service', href: '#services' },
  { label: 'Operations', href: '#workflow' },
  { label: 'Feature', href: '#features' },
  { label: 'Reliability', href: '#reliability' },
  { label: 'Contact', href: '#cta' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}
      >
        <div className="container navbar__inner">
          {/* Logo */}
          <a href="/" className="navbar__logo">
            <img src={operavaLogo} alt="Operava" className="navbar__logo-img" />
          </a>

          {/* Desktop Nav */}
          <nav className="navbar__links" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="navbar__link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="navbar__actions">
            <a
              href="#cta"
              className="btn btn--primary navbar__cta"
              onClick={(e) => handleNavClick(e, '#cta')}
            >
              Konsultasikan Gratis
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="navbar__toggle"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="mobile-nav__links">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="mobile-nav__link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta"
                className="btn btn--primary"
                style={{ marginTop: 'var(--space-2)', alignSelf: 'flex-start' }}
                onClick={(e) => handleNavClick(e, '#cta')}
              >
                Konsultasikan Gratis
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar {
          background: #ffffff;
          border-bottom: 1px solid rgba(229, 234, 240, 0.72);
          box-shadow: 0 1px 8px rgba(18, 18, 18, 0.03);
          pointer-events: none;
        }
        .navbar__inner {
          display: flex;
          justify-content: stretch;
          align-items: center;
          gap: var(--space-4);
          max-width: 100%;
          min-height: 72px;
          padding: 0 var(--space-3);
          pointer-events: auto;
        }
        .navbar__logo {
          display: flex;
          align-items: center;
          min-width: 172px;
          font-size: clamp(1.5rem, 1.45vw, 1.8rem);
          font-weight: var(--fw-semibold);
          color: var(--color-primary);
          letter-spacing: 0;
          flex-shrink: 0;
        }
        .navbar__logo-img {
          width: 128px;
          height: auto;
        }
        .navbar__links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(var(--space-3), 3.6vw, 64px);
          flex: 1;
        }
        .navbar__link {
          padding: 4px 0;
          font-size: 15px;
          font-weight: var(--fw-medium);
          color: #8d908c;
          transition: color var(--transition-base);
        }
        .navbar__link:first-child {
          color: #008f45;
          font-weight: var(--fw-semibold);
        }
        .navbar__link:hover {
          color: var(--color-primary-dark);
        }
        .navbar__actions {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          min-width: 180px;
          justify-content: flex-end;
        }
        .navbar__cta {
          min-width: 180px;
          min-height: 42px;
          padding: 0 18px;
          font-size: 15px;
          font-weight: var(--fw-medium);
          border-radius: 2px;
          border-bottom: 2px solid rgba(2, 211, 95, 0);
          background: #02D35F;
          justify-content: center;
        }
        .navbar__toggle {
          display: none;
          align-items: center;
          justify-content: center;
          width: var(--space-5);
          height: var(--space-5);
          color: var(--color-text-primary);
          margin-left: auto;
        }
        .mobile-nav {
          position: fixed;
          top: 72px;
          left: 0;
          right: 0;
          background: var(--color-bg);
          border-bottom: 1px solid var(--color-border);
          z-index: 999;
          padding: var(--space-3);
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
        }
        .mobile-nav__links {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
        }
        .mobile-nav__link {
          padding: var(--space-2);
          font-size: var(--font-size-base);
          font-weight: var(--fw-medium);
          color: var(--color-text-secondary);
          border-bottom: 1px solid var(--color-border);
        }
        .mobile-nav__link:hover {
          color: var(--color-text-primary);
        }
        @media (max-width: 768px) {
          .navbar__inner {
            min-height: 64px;
            padding-inline: var(--space-2);
            gap: var(--space-2);
          }
          .navbar__logo {
            font-size: var(--font-size-xl);
            min-width: auto;
          }
          .navbar__logo-img {
            width: 112px;
          }
          .navbar__links,
          .navbar__actions {
            display: none;
          }
          .navbar__toggle {
            display: flex;
          }
          .mobile-nav {
            top: 64px;
          }
        }
      `}</style>
    </>
  );
}
