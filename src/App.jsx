import React, { useEffect, useState } from 'react';
import Navigation from './components/molecules/Navigation';
import Hero from './components/organisms/Hero';
import Solutions from './components/organisms/Solutions';
import ROI from './components/organisms/ROI';
import TechStack from './components/organisms/TechStack';
import Engine from './components/organisms/Engine';
import Contact from './components/organisms/Contact';
import Footer from './components/organisms/Footer';
import { injectTokens } from './main';
import { colors } from './tokens/colors';
import { lightTheme } from './tokens/light';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  // Mouse tracking for glow effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Theme effect
  useEffect(() => {
    const currentTheme = theme === 'light' ? lightTheme : colors;
    injectTokens(currentTheme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <Navigation onThemeToggle={toggleTheme} currentTheme={theme} />
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
