import './styles/global.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BrandIntroSection from './components/BrandIntroSection';
import OperationalWorkflowSection from './components/OperationalWorkflowSection';
import FeatureHighlightSection from './components/FeatureHighlightSection';
import ReliabilitySection from './components/ReliabilitySection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <BrandIntroSection />
        <OperationalWorkflowSection />
        <FeatureHighlightSection />
        <ReliabilitySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
