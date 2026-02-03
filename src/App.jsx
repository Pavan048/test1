import React, { useEffect } from 'react';
import Navigation from './components/molecules/Navigation';
import Hero from './components/organisms/Hero';
import Solutions from './components/organisms/Solutions';
import ROI from './components/organisms/ROI';
import TechStack from './components/organisms/TechStack';
import Engine from './components/organisms/Engine';
import Contact from './components/organisms/Contact';
import Footer from './components/organisms/Footer';

function App() {
  // Mouse tracking for glow effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Solutions />
        <Engine />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
