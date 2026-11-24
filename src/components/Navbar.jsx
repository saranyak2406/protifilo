import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  FileDown, 
  ArrowUpRight 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-slate-200/80 dark:border-zinc-800/80 shadow-sm' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with Initials KS */}
          <a 
            href="#home" 
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-500 via-pink-400 to-emerald-400 p-[1.5px] shadow-sm group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white dark:bg-zinc-950 rounded-[14px] flex items-center justify-center">
                <span className="font-extrabold text-sm tracking-tight bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  {personalInfo.initials}
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm sm:text-base tracking-tight text-slate-900 dark:text-zinc-100">
                  {personalInfo.name}
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Available for opportunities"></span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-zinc-400 font-mono hidden sm:block">
                {personalInfo.role}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-zinc-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/80 dark:border-zinc-800/80 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-white dark:bg-zinc-800 text-purple-600 dark:text-purple-400 shadow-sm font-semibold'
                      : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 hover:bg-white/60 dark:hover:bg-zinc-800/40'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5">
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 transition-colors"
              aria-label="Toggle Theme"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} className="text-purple-600" />}
            </button>

            {/* Resume Download CTA */}
            <a
              href={personalInfo.resumePdf}
              download="Saranya_Sree_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-slate-100 dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-zinc-800 hover:border-purple-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all"
            >
              <FileDown size={14} className="text-purple-500" />
              <span>Resume</span>
            </a>

            {/* Contact CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full bg-slate-900 dark:bg-white text-white dark:text-zinc-950 hover:bg-slate-800 dark:hover:bg-zinc-100 shadow-sm transition-all"
            >
              <span>Contact</span>
              <ArrowUpRight size={14} />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-700 dark:text-zinc-300 bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800"
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl border-b border-slate-200 dark:border-zinc-800 animate-fade-in">
          <div className="flex flex-col gap-1 max-w-sm mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium rounded-xl text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-900 hover:text-purple-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-200 dark:border-zinc-800">
              <a
                href={personalInfo.resumePdf}
                download="Saranya_Sree_Resume.pdf"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300 text-sm font-semibold border border-purple-200 dark:border-purple-800/40"
              >
                <FileDown size={15} />
                Download Resume (PDF)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
