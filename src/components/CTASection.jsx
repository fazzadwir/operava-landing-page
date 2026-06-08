import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, MessageSquare } from 'lucide-react';

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="cta-section section" id="cta" ref={ref}>
      <div className="container">
        <motion.div
          className="cta-inner"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Background pattern */}
          <div className="cta-inner__bg" aria-hidden="true">
            <div className="cta-bg-grid" />
          </div>

          <div className="cta-inner__content">
            <motion.h2
              className="cta__title"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.55, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
            >
              Siap Membuat Operasional IT Lebih Terkelola?
            </motion.h2>

            <motion.p
              className="cta__subtitle"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.55, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
            >
              Diskusikan kebutuhan DevOps, SOC, cloud, server, atau managed service Anda bersama
              Operava. Kami bantu evaluasi kebutuhan dan rekomendasikan pendekatan terbaik untuk
              bisnis Anda.
            </motion.p>

            <motion.div
              className="cta__actions"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.55, delay: 0.45, ease: [0.4, 0, 0.2, 1] }}
            >
              <a
                href="mailto:hello@operava.id"
                className="btn btn--primary cta__btn-primary"
              >
                Konsultasi Gratis <ArrowUpRight size={16} strokeWidth={2.5} />
              </a>
              <a
                href="mailto:hello@operava.id"
                className="btn btn--secondary cta__btn-secondary"
              >
                <MessageSquare size={16} />
                Hubungi Tim Operava
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .cta-section {
          background: var(--color-bg);
        }
        .cta-inner {
          position: relative;
          background: linear-gradient(180deg, var(--color-bg-gradient-start) 0%, var(--color-bg-gradient-end) 100%);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-dashboard);
          overflow: hidden;
          padding: var(--space-12) var(--space-8);
          text-align: center;
        }
        .cta-inner__bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .cta-bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(var(--color-border) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-border) 1px, transparent 1px);
          background-size: var(--space-6) var(--space-6);
          opacity: 0.36;
        }
        .cta-inner__content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-3);
          max-width: 680px;
          margin-inline: auto;
        }
        .cta__title {
          font-size: 42px;
          font-weight: var(--fw-semibold);
          line-height: var(--lh-heading);
          color: var(--color-text-primary);
          letter-spacing: 0;
        }
        .cta__subtitle {
          font-size: 18px;
          line-height: var(--lh-body);
          color: var(--color-text-secondary);
          max-width: 640px;
        }
        .cta__actions {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          flex-wrap: wrap;
          justify-content: center;
          margin-top: var(--space-1);
        }
        .cta__btn-primary {
          padding: var(--space-2) var(--space-3);
          font-size: var(--font-size-base);
        }
        .cta__btn-secondary {
          padding: var(--space-2) var(--space-3);
        }
        @media (max-width: 640px) {
          .cta-inner {
            padding: var(--space-8) var(--space-3);
          }
          .cta__actions {
            flex-direction: column;
            width: 100%;
          }
          .cta__actions .btn {
            width: 100%;
            justify-content: center;
          }
          .cta__title {
            font-size: var(--font-size-4xl);
          }
        }
      `}</style>
    </section>
  );
}
