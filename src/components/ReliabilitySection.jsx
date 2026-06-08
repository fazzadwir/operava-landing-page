import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Activity, CheckCircle2, Gauge, Lock, ShieldCheck } from 'lucide-react';
import { statusCards, trustPoints } from '../data/reliability.js';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1], delay },
  }),
};

const statusIconMap = {
  stable: CheckCircle2,
  secure: Lock,
  monitored: Activity,
  optimized: Gauge,
};

export default function ReliabilitySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="reliability section section--gradient" id="reliability" ref={ref}>
      <div className="container reliability__inner">
        <div className="reliability__content">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0}
          >
            <span className="label">Reliability</span>
          </motion.div>

          <motion.h2
            className="section-title reliability__title"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0.1}
          >
            Dibangun untuk Stabilitas, Keamanan, dan Keberlanjutan Operasional
          </motion.h2>

          <motion.p
            className="reliability__body"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0.2}
          >
            Operava tidak hanya membantu ketika terjadi masalah. Kami membantu bisnis membangun
            operasional teknologi yang lebih siap, terukur, dan dapat dipantau secara
            berkelanjutan.
          </motion.p>

          <motion.div
            className="trust-points"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
            }}
          >
            {trustPoints.map((point) => (
              <motion.div className="trust-point" key={point.id} variants={fadeUp}>
                <CheckCircle2 size={18} strokeWidth={1.75} />
                <span>{point.title}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="status-panel dashboard-preview"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
          }}
          aria-label="Operava reliability dashboard"
        >
          <div className="status-panel__bar dashboard-preview__bar">
            <span>Operational Status</span>
            <span className="status-inline">
              <ShieldCheck size={14} strokeWidth={1.75} />
              Enterprise-ready
            </span>
          </div>

          <div className="status-panel__grid">
            {statusCards.map((status) => {
              const Icon = statusIconMap[status.id];
              return (
                <motion.div className="status-card" key={status.id} variants={fadeUp}>
                  <div className="status-card__icon technical-icon">
                    {Icon && <Icon size={20} strokeWidth={1.75} />}
                  </div>
                  <div>
                    <h3>{status.label}</h3>
                    <p>{status.detail}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <style>{`
        .reliability__inner {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(360px, 1.05fr);
          gap: var(--space-10);
          align-items: center;
        }
        .reliability__title {
          margin-top: var(--space-2);
          margin-bottom: var(--space-3);
        }
        .reliability__body {
          color: var(--color-text-secondary);
          font-size: 18px;
          line-height: var(--lh-body);
          margin-bottom: var(--space-4);
        }
        .trust-points {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-2);
        }
        .trust-point {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          background: var(--color-card-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-card);
          color: var(--color-text-primary);
          font-size: var(--font-size-sm);
          font-weight: var(--fw-semibold);
          line-height: var(--lh-body);
          padding: var(--space-2) var(--space-3);
        }
        .trust-point svg {
          color: var(--color-primary);
          flex: 0 0 auto;
        }
        .status-panel {
          background: rgba(255, 255, 255, 0.9);
        }
        .status-panel__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-3);
          padding: var(--space-4);
        }
        .status-card {
          display: grid;
          grid-template-columns: var(--space-5) 1fr;
          gap: var(--space-2);
          align-items: start;
          background: var(--color-card-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-card);
          padding: var(--space-3);
        }
        .status-card h3 {
          color: var(--color-text-primary);
          font-size: var(--font-size-lg);
          font-weight: var(--fw-semibold);
          line-height: var(--lh-heading);
        }
        .status-card p {
          color: var(--color-text-secondary);
          font-size: var(--font-size-sm);
          line-height: var(--lh-body);
          margin-top: var(--space-1);
        }
        @media (max-width: 960px) {
          .reliability__inner {
            grid-template-columns: 1fr;
            gap: var(--space-6);
          }
        }
        @media (max-width: 640px) {
          .status-panel__grid {
            grid-template-columns: 1fr;
            padding: var(--space-3);
          }
        }
      `}</style>
    </section>
  );
}
