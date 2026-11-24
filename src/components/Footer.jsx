import React from 'react';
import { 
  ArrowUp, 
  Github, 
  Linkedin, 
  Mail, 
  Heart,
  Code2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 text-zinc-500 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-200 dark:border-zinc-800/60">
          
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-lavender-500 flex items-center justify-center text-zinc-950 font-extrabold text-sm shadow-md">
              {personalInfo.initials}
            </div>
            <div>
              <span className="font-bold text-zinc-900 dark:text-white text-sm">
                {personalInfo.name}
              </span>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                {personalInfo.role}
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-600 hover:text-lavender-600 dark:text-zinc-400 dark:hover:text-lavender-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-lavender-600 dark:hover:text-lavender-400 transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={15} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
              title="GitHub"
            >
              <Github size={15} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              title="Email"
            >
              <Mail size={15} />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300 hover:text-lavender-600 dark:hover:text-lavender-400 transition-all ml-2"
              aria-label="Scroll to top"
            >
              <span>Top</span>
              <ArrowUp size={13} />
            </button>
          </div>

        </div>

        {/* Bottom Details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>

          <p className="flex items-center gap-1">
            Built with <span className="text-lavender-600 dark:text-lavender-400 font-medium">React.js &bull; Tailwind CSS &bull; Python Backend</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
