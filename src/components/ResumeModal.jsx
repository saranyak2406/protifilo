import React, { useEffect } from 'react';
import { 
  X, 
  Printer, 
  FileDown, 
  Check, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Award,
  Globe,
  Github,
  Linkedin
} from 'lucide-react';
import { 
  personalInfo, 
  experienceData, 
  projectsData, 
  educationData, 
  certificationsData,
  skillCategories 
} from '../data/portfolioData';

export default function ResumeModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-md"
        onClick={onClose}
      ></div>

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-2xl z-10 max-h-[92vh] flex flex-col my-auto overflow-hidden animate-fade-in">
        
        {/* Top Control Bar */}
        <div className="p-4 sm:p-5 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-4 bg-zinc-50 dark:bg-zinc-900/60">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white">
              Resume Preview &bull; {personalInfo.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-semibold transition-colors"
              title="Print Resume or Save as PDF"
            >
              <Printer size={13} />
              <span className="hidden sm:inline">Print</span>
            </button>

            <a
              href={personalInfo.resumePdf}
              download="Saranya_Sree_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 text-xs font-bold shadow-sm transition-colors"
            >
              <FileDown size={13} />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors ml-1"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Container */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white dark:bg-zinc-900/90 text-zinc-900 dark:text-zinc-100 text-xs sm:text-sm space-y-6 font-sans">
          
          {/* Header */}
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-5 text-center">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              {personalInfo.fullName}
            </h1>
            <p className="text-sm font-semibold text-lavender-600 dark:text-lavender-400 mt-1">
              {personalInfo.role} &bull; Full Stack Web &amp; Python Applications
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-600 dark:text-zinc-400 mt-2 font-mono">
              <span className="flex items-center gap-1"><MapPin size={12} /> {personalInfo.location}</span>
              <span>&bull;</span>
              <span className="flex items-center gap-1"><Phone size={12} /> {personalInfo.phone}</span>
              <span>&bull;</span>
              <span className="flex items-center gap-1"><Mail size={12} /> {personalInfo.email}</span>
            </div>
            <div className="flex items-center justify-center gap-4 text-xs font-mono mt-2 text-emerald-600 dark:text-emerald-400">
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <Linkedin size={12} /> LinkedIn
              </a>
              <span>&bull;</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <Github size={12} /> GitHub
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-lavender-600 dark:text-lavender-400 border-b border-zinc-200 dark:border-zinc-800 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {personalInfo.aboutText}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-lavender-600 dark:text-lavender-400 border-b border-zinc-200 dark:border-zinc-800 pb-1 mb-2">
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800">
                  <span className="font-bold text-zinc-900 dark:text-zinc-100">{cat.title}: </span>
                  <span className="text-zinc-600 dark:text-zinc-400">{cat.skills.map(s => s.name).join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-lavender-600 dark:text-lavender-400 border-b border-zinc-200 dark:border-zinc-800 pb-1 mb-3">
              Work Experience
            </h2>
            <div className="space-y-4">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <span className="font-bold text-zinc-900 dark:text-white text-sm">{exp.role}</span>
                      <span className="text-lavender-600 dark:text-lavender-400 font-semibold"> &bull; {exp.company}</span>
                    </div>
                    <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-zinc-700 dark:text-zinc-300 space-y-1">
                    {exp.responsibilities.map((r, rIdx) => (
                      <li key={rIdx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-lavender-600 dark:text-lavender-400 border-b border-zinc-200 dark:border-zinc-800 pb-1 mb-3">
              Key Engineering Projects
            </h2>
            <div className="space-y-3">
              {projectsData.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-zinc-900 dark:text-zinc-100">{proj.title} ({proj.company})</span>
                    <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400">{proj.technologies.slice(0, 3).join(', ')}</span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300">{proj.shortDescription}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-lavender-600 dark:text-lavender-400 border-b border-zinc-200 dark:border-zinc-800 pb-1 mb-2">
              Education
            </h2>
            <div className="space-y-2">
              {educationData.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-zinc-900 dark:text-white">{edu.degree}</span>
                    <span className="text-zinc-600 dark:text-zinc-400"> &bull; {edu.institution}</span>
                  </div>
                  <div className="text-zinc-500 font-mono">
                    <span>{edu.period} ({edu.grade})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-lavender-600 dark:text-lavender-400 border-b border-zinc-200 dark:border-zinc-800 pb-1 mb-2">
              Certifications &amp; Awards
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certificationsData.map((cert, idx) => (
                <div key={idx} className="text-zinc-700 dark:text-zinc-300">
                  <span className="font-semibold text-zinc-900 dark:text-white">&bull; {cert.title}</span> – <span className="text-zinc-500">{cert.issuer}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-zinc-50 dark:bg-zinc-900/60 border-t border-zinc-200 dark:border-zinc-800 text-center text-xs text-zinc-500 font-mono">
          Available for Full-Stack Python, React, and Software Engineering positions.
        </div>

      </div>
    </div>
  );
}
