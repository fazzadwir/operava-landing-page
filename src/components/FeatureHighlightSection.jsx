import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Activity,
  Zap,
  AlertTriangle,
  Eye,
  TrendingUp,
  BarChart3,
} from 'lucide-react';
import { features } from '../data/features.js';

const iconMap = {
  Activity,
  Zap,
  AlertTriangle,
  Eye,
  TrendingUp,
  BarChart3,
};

export default function FeatureHighlightSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="features section section--soft" id="features" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header section-header--center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <span className="label">Features</span>
          <h2 className="section-title">Satu Partner untuk Operasional IT yang Lebih Terkelola</h2>
          <p className="section-subtitle">
            Dukung operasional teknologi bisnis Anda dengan monitoring, automation, incident
            response, security visibility, performance optimization, dan reporting yang lebih
            terstruktur.
          </p>
        </motion.div>

        <motion.div
          className="features__grid"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
            hidden: {},
          }}
        >
          {features.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.id}
                className="feature-card"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
                }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <div className="feature-card__icon technical-icon">
                  {Icon && <Icon size={20} strokeWidth={1.75} />}
                </div>
                <h3 className="feature-card__title">{feature.title}</h3>
                <p className="feature-card__desc">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <style>{`
        .features__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-3);
        }
        .feature-card {
          background: var(--color-card-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: var(--space-4);
          box-shadow: var(--shadow-card);
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
          transition: box-shadow var(--transition-smooth), border-color var(--transition-smooth), transform var(--transition-smooth);
        }
        .feature-card__title {
          font-size: var(--font-size-base);
          font-weight: var(--fw-semibold);
          color: var(--color-text-primary);
          line-height: var(--lh-heading);
        }
        .feature-card__desc {
          font-size: var(--font-size-sm);
          line-height: var(--lh-body);
          color: var(--color-text-secondary);
          flex: 1;
        }
        @media (max-width: 1024px) {
          .features__grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (hover: hover) and (pointer: fine) {
          .feature-card:hover {
            box-shadow: var(--shadow-card-hover);
            border-color: rgba(2, 211, 95, 0.2);
          }
        }
        @media (max-width: 640px) {
          .features__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
