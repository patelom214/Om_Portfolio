import { useEffect, useState } from 'react';
import AuroraBackground from './components/AuroraBackground';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import ServicesAchievements from './components/ServicesAchievements';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('light', theme === 'light');
  }, [theme]);

  function toggleTheme() {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  }

  return (
    <>
      <LoadingScreen visible={loading} />
      <AuroraBackground />
      <CustomCursor />
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="relative font-body text-ink-100">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <ServicesAchievements />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
