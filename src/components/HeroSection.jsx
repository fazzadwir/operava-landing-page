import { motion } from 'framer-motion';
import heroBackground from '../assets/hero-img.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1], delay },
  }),
};

export default function HeroSection() {
  const scrollTo = (event, targetId) => {
    event.preventDefault();
    document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="hero"
      id="hero"
      style={{ '--hero-bg': `url(${heroBackground})` }}
    >
      <div className="container hero__content">
        <motion.h1
          className="hero__title"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Managed Service untuk DevOps, SOC, dan Infrastruktur IT Modern
        </motion.h1>

        <motion.p
          className="hero__description"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.12}
        >
          Operava membantu perusahaan menjalankan operasional DevOps, SOC, cloud, server, dan
          infrastruktur IT secara lebih stabil, aman, dan efisien.
        </motion.p>

        <motion.div
          className="hero__actions"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.24}
        >
          <a
            href="#cta"
            className="btn btn--primary hero__btn"
            onClick={(event) => scrollTo(event, '#cta')}
          >
            Konsultasikan Gratis
          </a>
          <a
            href="#services"
            className="btn btn--secondary hero__btn"
            onClick={(event) => scrollTo(event, '#services')}
          >
            Layanan Kami
          </a>
        </motion.div>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background-image: var(--hero-bg);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          padding-top: 160px;
        }
        .hero__content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 1760px;
          padding-block: var(--space-15) var(--space-12);
        }
        .hero__title {
          max-width: 1520px;
          color: var(--color-text-primary);
          font-size: 56px;
          font-weight: var(--fw-semibold);
          line-height: 1.3;
          letter-spacing: 0;
          margin-bottom: var(--space-4);
        }
        .hero__description {
          max-width: 1680px;
          color: #3d4246;
          font-size: 24px;
          font-weight: var(--fw-regular);
          line-height: var(--lh-body);
          margin-bottom: var(--space-4);
        }
        .hero__actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-4);
          flex-wrap: wrap;
        }
        .hero__btn {
          min-width: 240px;
          justify-content: center;
          padding: var(--space-2) var(--space-3);
          font-size: var(--font-size-xl);
        }
        @media (max-width: 900px) {
          .hero {
            min-height: auto;
            padding-top: 112px;
          }
          .hero__content {
            padding-block: var(--space-12) var(--space-10);
          }
          .hero__title {
            font-size: 40px;
          }
          .hero__description {
            font-size: 20px;
          }
          .hero__actions {
            gap: var(--space-2);
          }
        }
        @media (max-width: 640px) {
          .hero__content {
            padding-inline: var(--space-2);
          }
          .hero__btn {
            width: 100%;
            min-width: 0;
          }
          .hero__title {
            font-size: 32px;
          }
          .hero__description {
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  );
}
