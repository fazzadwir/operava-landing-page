import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ArrowUpRight,
  Check,
  GitMerge,
  ShieldCheck,
  Server,
} from 'lucide-react';
import { services } from '../data/services.js';

const iconMap = {
  GitMerge,
  ShieldCheck,
  Server,
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: i * 0.1 },
  }),
};

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="services section section--soft" id="services" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header section-header--center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <span className="label">Services</span>
          <h2 className="section-title">Layanan Utama Operava</h2>
          <p className="section-subtitle">
            Solusi managed service untuk mendukung operasional teknologi dari sisi reliability,
            security, dan scalability.
          </p>
        </motion.div>

        <div className="services__grid">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                className="service-card"
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="service-card__icon-wrap technical-icon">
                  {Icon && <Icon size={22} strokeWidth={1.75} />}
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.description}</p>
                <ul className="service-card__points">
                  {service.highlights.map((h) => (
                    <li key={h} className="service-card__point">
                      <Check size={16} strokeWidth={2} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className="btn btn--secondary service-card__cta"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {service.cta}
                  <ArrowUpRight size={16} strokeWidth={2.25} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .services__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-3);
        }
        .service-card {
          background: var(--color-card-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-card);
          padding: var(--space-4);
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
          min-height: 100%;
          transition: box-shadow var(--transition-smooth), border-color var(--transition-smooth), transform var(--transition-smooth);
        }
        .service-card:hover {
          box-shadow: var(--shadow-card-hover);
          border-color: rgba(2, 211, 95, 0.25);
        }
        .service-card__icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .service-card__title {
          font-size: var(--font-size-xl);
          font-weight: var(--fw-semibold);
          color: var(--color-text-primary);
          line-height: var(--lh-heading);
        }
        .service-card__desc {
          font-size: var(--font-size-sm);
          line-height: var(--lh-body);
          color: var(--color-text-secondary);
        }
        .service-card__points {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
          padding-top: var(--space-1);
          flex: 1;
        }
        .service-card__point {
          display: grid;
          grid-template-columns: var(--space-2) 1fr;
          gap: var(--space-1);
          align-items: start;
          color: var(--color-text-secondary);
          font-size: var(--font-size-sm);
          font-weight: var(--fw-medium);
          line-height: var(--lh-body);
        }
        .service-card__point svg {
          color: var(--color-primary);
          margin-top: var(--space-1);
        }
        .service-card__cta {
          width: 100%;
          justify-content: space-between;
          margin-top: var(--space-1);
        }
        @media (max-width: 1024px) {
          .services__grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .services__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
