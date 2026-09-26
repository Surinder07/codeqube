import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import ServicesShowcase from '../components/ServicesShowcase';
import Industries from '../components/Industries';
import Projects from '../components/Projects';
import TechExpertise from '../components/TechExpertise';
import Impact from '../components/Impact';
import CareersCTA from '../components/CareersCTA';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <ServicesShowcase />
        <Industries />
        <Projects />
        <TechExpertise />
        <Impact />
        <CareersCTA />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
