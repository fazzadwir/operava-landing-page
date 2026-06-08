import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ClipboardList,
  RefreshCw,
  Rocket,
  Settings2,
} from 'lucide-react';
import { workflowSteps } from '../data/workflow.js';

const iconMap = {
  ClipboardList,
  Settings2,
  Rocket,
  RefreshCw,
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1], delay },
  }),
};

export default function OperationalWorkflowSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="workflow section section--gradient" id="workflow" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header section-header--center"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        >
          <span className="label">Operations</span>
          <h2 className="section-title">Dari Tantangan Operasional ke Sistem yang Lebih Terkelola</h2>
          <p className="section-subtitle">
            Operava membantu mengubah operasional IT yang kompleks menjadi proses yang lebih
            terstruktur melalui assessment, implementasi, monitoring, dan continuous improvement.
          </p>
        </motion.div>

        <motion.div
          className="workflow__steps"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.55 } },
            hidden: {},
          }}
        >
          {workflowSteps.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div
                key={step.id}
                className="workflow-step"
                variants={fadeUp}
              >
                {i < workflowSteps.length - 1 && (
                  <div className="workflow-step__line" aria-hidden="true" />
                )}

                <div className="workflow-step__num">{String(step.id).padStart(2, '0')}</div>
                <div className="workflow-step__icon-wrap technical-icon">
                  {Icon && <Icon size={20} strokeWidth={1.75} />}
                </div>
                <div className="workflow-step__content">
                  <span className="workflow-step__phase">{step.phase}</span>
                  <h4 className="workflow-step__title">{step.title}</h4>
                  <p className="workflow-step__desc">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <style>{`
        .workflow__steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-3);
          position: relative;
        }
        .workflow-step {
          position: relative;
          background: var(--color-card-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: var(--space-4);
          box-shadow: var(--shadow-card);
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
          transition: box-shadow var(--transition-smooth), border-color var(--transition-smooth);
        }
        .workflow-step:hover {
          box-shadow: var(--shadow-card-hover);
          border-color: rgba(2, 211, 95, 0.25);
        }
        .workflow-step__line {
          position: absolute;
          top: var(--space-5);
          right: -24px;
          width: 24px;
          height: 1px;
          background: var(--color-border);
          z-index: 1;
          display: none;
        }
        .workflow-step__num {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: var(--space-6);
          height: var(--space-6);
          background: var(--color-primary);
          border-radius: var(--radius-sm);
          font-size: var(--font-size-sm);
          font-weight: var(--fw-semibold);
          color: var(--color-secondary);
          letter-spacing: 0;
        }
        .workflow-step__content {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
        }
        .workflow-step__phase {
          font-size: var(--font-size-xs);
          font-weight: var(--fw-semibold);
          color: var(--color-primary);
          text-transform: uppercase;
          letter-spacing: 0;
        }
        .workflow-step__title {
          font-size: var(--font-size-base);
          font-weight: var(--fw-semibold);
          color: var(--color-text-primary);
          line-height: var(--lh-heading);
        }
        .workflow-step__desc {
          font-size: var(--font-size-sm);
          line-height: var(--lh-body);
          color: var(--color-text-secondary);
        }
        @media (max-width: 1024px) {
          .workflow__steps {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .workflow__steps {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
