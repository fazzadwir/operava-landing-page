import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
            <span className="navbar__logo-mark">Opera</span>
            <span className="navbar__logo-text">va</span>
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
          padding: var(--space-8) var(--space-8) 0;
          background: transparent;
          pointer-events: none;
        }
        .navbar__inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: var(--space-4);
          max-width: 1776px;
          background: #FFF;
          border-radius: 999px;
          box-shadow: 0 4px 15px 0 rgba(29, 36, 60, 0.08);
          padding: 12px var(--space-4);
          pointer-events: auto;
        }
        .navbar__logo {
          display: flex;
          align-items: center;
          font-size: clamp(2rem, 2.3vw, 2.75rem);
          font-weight: var(--fw-semibold);
          color: var(--color-text-primary);
          letter-spacing: 0;
          flex-shrink: 0;
        }
        .navbar__logo-mark {
          color: var(--color-primary);
        }
        .navbar__links {
          display: flex;
          align-items: center;
          gap: var(--space-8);
          margin-left: auto;
        }
        .navbar__link {
          padding: var(--space-1) 0;
          font-size: var(--font-size-lg);
          font-weight: var(--fw-medium);
          color: var(--color-text-secondary);
          transition: color var(--transition-base);
        }
        .navbar__link:first-child {
          color: var(--color-primary);
          font-weight: var(--fw-semibold);
        }
        .navbar__link:hover {
          color: var(--color-text-primary);
        }
        .navbar__actions {
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }
        .navbar__cta {
          padding: var(--space-1) var(--space-2);
          font-size: var(--font-size-base);
          min-width: 192px;
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
          top: 64px;
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
          .navbar {
            padding: var(--space-3) var(--space-2) 0;
          }
          .navbar__inner {
            min-height: var(--space-8);
            border-radius: var(--radius-md);
            padding-inline: var(--space-2);
          }
          .navbar__logo {
            font-size: var(--font-size-2xl);
          }
          .navbar__links,
          .navbar__actions {
            display: none;
          }
          .navbar__toggle {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}
