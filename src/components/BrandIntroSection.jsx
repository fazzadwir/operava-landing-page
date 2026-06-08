import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import devopsImage from '../assets/devops-img.png';
import managedServicesImage from '../assets/managed-services-img.png';
import socImage from '../assets/soc-img.png';

const serviceSlides = [
  {
    title: 'DevOps',
    description: 'Deployment, automation, pipeline reliability, dan operasional delivery.',
    image: devopsImage,
  },
  {
    title: 'Managed IT Service',
    description: 'Maintenance sistem, server, cloud, support operasional, dan incident handling.',
    image: managedServicesImage,
  },
  {
    title: 'SOC',
    description: 'Security monitoring, threat detection, alert management, dan incident response.',
    image: socImage,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1], delay },
  }),
};

export default function BrandIntroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = serviceSlides[activeIndex];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % serviceSlides.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, []);

  const goToPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? serviceSlides.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % serviceSlides.length);
  };

  const scrollToCta = (event) => {
    event.preventDefault();
    document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="about-services" id="services">
      <div className="about-services__media">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeSlide.title}
            src={activeSlide.image}
            alt=""
            className="about-services__image"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          />
        </AnimatePresence>
        <div className="about-services__shade" />

        <div className="about-services__slide-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
            >
              <h3>{activeSlide.title}</h3>
              <p>{activeSlide.description}</p>
            </motion.div>
          </AnimatePresence>

          <a href="#cta" className="btn btn--primary about-services__cta" onClick={scrollToCta}>
            Konsultasikan Gratis
          </a>
        </div>

        <div className="about-services__controls" aria-label="Service slide controls">
          <button type="button" onClick={goToPrevious} aria-label="Previous service">
            <ChevronLeft size={28} strokeWidth={2} />
          </button>
          <button type="button" onClick={goToNext} aria-label="Next service">
            <ChevronRight size={28} strokeWidth={2} />
          </button>
        </div>
      </div>

      <motion.div
        className="about-services__content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.h2 className="about-services__title" variants={fadeUp} custom={0}>
          <span>Operava</span> Hadir sebagai Partner Operasional Teknologi Anda
        </motion.h2>
        <motion.p className="about-services__body" variants={fadeUp} custom={0.1}>
          Operava membantu perusahaan menjalankan operasional DevOps, SOC, cloud, server, dan
          infrastruktur IT secara lebih stabil, aman, dan efisien.
        </motion.p>
      </motion.div>

      <style>{`
        .about-services {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100vh;
          background:
            radial-gradient(circle at 100% 100%, rgba(2, 211, 95, 0.16), transparent 32%),
            var(--color-bg);
        }
        .about-services__media {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background: var(--color-secondary);
        }
        .about-services__image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .about-services__shade {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(18, 18, 18, 0.18) 0%, rgba(18, 18, 18, 0.24) 42%, rgba(18, 18, 18, 0.72) 100%),
            linear-gradient(90deg, rgba(18, 18, 18, 0.3), transparent 48%);
        }
        .about-services__slide-content {
          position: absolute;
          left: var(--space-5);
          right: var(--space-5);
          bottom: var(--space-8);
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: var(--space-3);
          color: #fff;
          max-width: 720px;
        }
        .about-services__slide-content h3 {
          font-size: 42px;
          font-weight: var(--fw-semibold);
          line-height: var(--lh-heading);
        }
        .about-services__slide-content p {
          color: rgba(255, 255, 255, 0.88);
          font-size: 24px;
          line-height: var(--lh-body);
        }
        .about-services__cta {
          margin-top: var(--space-1);
          padding: var(--space-2) var(--space-3);
          font-size: var(--font-size-lg);
        }
        .about-services__controls {
          position: absolute;
          right: var(--space-5);
          bottom: var(--space-15);
          z-index: 2;
          display: flex;
          gap: var(--space-2);
        }
        .about-services__controls button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: var(--space-6);
          height: var(--space-6);
          color: #fff;
          background: rgba(255, 255, 255, 0.28);
          border-radius: 50%;
          transition: background var(--transition-base), transform var(--transition-base);
        }
        .about-services__controls button:hover {
          background: rgba(255, 255, 255, 0.4);
          transform: translateY(-2px);
        }
        .about-services__content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: var(--space-15) var(--space-12);
        }
        .about-services__title {
          color: var(--color-text-primary);
          font-size: 42px;
          font-weight: var(--fw-semibold);
          line-height: var(--lh-heading);
          margin-bottom: var(--space-3);
          max-width: 880px;
        }
        .about-services__title span {
          color: var(--color-primary);
        }
        .about-services__body {
          color: #3d4246;
          font-size: 24px;
          line-height: var(--lh-body);
          max-width: 880px;
        }
        @media (max-width: 1024px) {
          .about-services {
            grid-template-columns: 1fr;
          }
          .about-services__media {
            min-height: 720px;
          }
          .about-services__content {
            padding: var(--space-10) var(--space-4);
          }
        }
        @media (max-width: 640px) {
          .about-services__media {
            min-height: 640px;
          }
          .about-services__slide-content {
            left: var(--space-3);
            right: var(--space-3);
            bottom: var(--space-6);
          }
          .about-services__controls {
            right: var(--space-3);
            bottom: var(--space-12);
          }
          .about-services__content {
            padding: var(--space-8) var(--space-3);
          }
          .about-services__title {
            font-size: var(--font-size-4xl);
          }
          .about-services__slide-content h3 {
            font-size: var(--font-size-4xl);
          }
          .about-services__slide-content p,
          .about-services__body {
            font-size: var(--font-size-lg);
          }
        }
      `}</style>
    </section>
  );
}
