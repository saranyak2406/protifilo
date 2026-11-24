import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import WebDevelopment from './components/WebDevelopment';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return true; // Default dark Apple style
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen selection:bg-emerald-500/30 selection:text-emerald-300 ${
      darkMode ? 'bg-zinc-950 text-zinc-100' : 'bg-[#fafafa] text-zinc-900'
    } transition-colors duration-300 font-sans`}>
      
      {/* Sticky Navigation Bar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Me */}
        <About />

        {/* 3. Skills */}
        <Skills />

        {/* 3.5. Web Development Specialties */}
        <WebDevelopment />

        {/* 4. Experience */}
        <Experience />

        {/* 5. Projects */}
        <Projects />

        {/* 6. Education */}
        <Education />

        {/* 7. Resume Download */}
        <ResumeSection />

        {/* 8. Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

