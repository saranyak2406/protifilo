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
  Code2
} from 'lucide-react';
import { personalInfo, experienceData, projectsData, educationData, honorsAndCertifications } from '../data/portfolioData';

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
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      ></div>

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-2xl z-10 max-h-[92vh] flex flex-col my-auto overflow-hidden animate-fade-in">
        
        {/* Top Control Bar */}
        <div className="p-4 sm:p-5 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-4 bg-zinc-50 dark:bg-zinc-900/60">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            <span className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100">
              Interactive Resume Preview &bull; {personalInfo.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition-colors"
              title="Print Resume or Save as PDF via Browser"
            >
              <Printer size={13} />
              <span className="hidden sm:inline">Print / Save</span>
            </button>

            <a
              href={personalInfo.resumePdf}
              download="Saranya_Sree_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-bold shadow-sm transition-colors"
            >
              <FileDown size={13} />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-zinc-800 text-zinc-400 hover:text-zinc-100 transition-colors ml-1"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Container */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white dark:bg-zinc-900/90 text-zinc-900 dark:text-zinc-100 text-xs sm:text-sm space-y-6 font-sans">
          
          {/* Header */}
          <div className="border-b border-zinc-300 dark:border-zinc-700/80 pb-5 text-center">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {personalInfo.fullName}
            </h1>
            <p className="text-sm font-semibold text-emerald-400 mt-1">
              {personalInfo.role} &bull; Web &amp; AI Applications
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-600 dark:text-zinc-400 mt-2 font-mono">
              <span className="flex items-center gap-1"><MapPin size={12} /> {personalInfo.location}</span>
              <span>&bull;</span>
              <span className="flex items-center gap-1"><Phone size={12} /> {personalInfo.phone}</span>
              <span>&bull;</span>
              <span className="flex items-center gap-1"><Mail size={12} /> {personalInfo.email}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 border-b border-emerald-500/20 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Computer Science graduate (CGPA: 8.62/10) with 1 year professional software engineering experience at Lomaa IT Solutions. Skilled in developing full-stack web applications, RESTful APIs, and AI-driven platforms using Python, FastAPI, React.js, Tailwind CSS, MySQL, and PostgreSQL. Proven ability to build scalable software, solve complex scheduling and computer-vision challenges, and craft clean Apple-grade user interfaces.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 border-b border-emerald-500/20 pb-1 mb-2">
              Technical &amp; Web Development Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div><strong className="text-zinc-800 dark:text-zinc-200">Web Development:</strong> Full-Stack Web Architecture, Responsive Design, Single Page Apps (SPA)</div>
              <div><strong className="text-zinc-800 dark:text-zinc-200">Frontend:</strong> HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS</div>
              <div><strong className="text-zinc-800 dark:text-zinc-200">Backend &amp; APIs:</strong> Python, FastAPI, Node.js, RESTful Web APIs, Microservices</div>
              <div><strong className="text-zinc-800 dark:text-zinc-200">Databases:</strong> PostgreSQL, MySQL, Supabase, Relational Modeling</div>
              <div><strong className="text-zinc-800 dark:text-zinc-200">Tools:</strong> Git, GitHub, VS Code, Postman, Playwright, Linux</div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 border-b border-emerald-500/20 pb-1 mb-3">
              Professional Experience
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold">
                  <span className="text-zinc-900 dark:text-zinc-100">
                    Full Stack Python Developer &amp; Web Developer &bull; Lomaa IT Solutions
                  </span>
                  <span className="text-xs font-mono text-emerald-400">2024 – Present (1 Year)</span>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 italic mb-1.5">Andhra Pradesh, India</p>
                <ul className="list-disc list-inside space-y-1 text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  <li>Engineered full-stack web applications and scalable REST APIs utilizing Python, FastAPI, React.js, and MySQL.</li>
                  <li>Designed modular frontend components with React.js and Tailwind CSS, adhering to modern UI/UX principles.</li>
                  <li>Collaborated on AI-assisted application concepts (AI Travel Planner, AI Skin Disease Detection, AI Timetable Generator).</li>
                  <li>Optimized relational database schemas in MySQL and PostgreSQL for reduced latency and high concurrency.</li>
                  <li>Executed end-to-end testing with Postman and Playwright to maintain high software reliability.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Selected Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 border-b border-emerald-500/20 pb-1 mb-3">
              Selected Projects
            </h2>
            <div className="space-y-2.5 text-xs">
              {projectsData.map((p, idx) => (
                <div key={idx}>
                  <div className="font-semibold text-zinc-900 dark:text-zinc-100">
                    {idx + 1}. {p.title} &mdash; <span className="font-normal text-emerald-400">{p.tagline}</span>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {p.summary} <span className="text-zinc-500 font-mono">({p.technologies.join(', ')})</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 border-b border-emerald-500/20 pb-1 mb-2">
              Education
            </h2>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <div>
                  <strong className="text-zinc-900 dark:text-zinc-100">B.Tech in Computer Science and Engineering</strong> &bull; The Apollo University
                </div>
                <div className="font-mono text-emerald-400">Nov 2022 – Mar 2026 | CGPA: 8.62/10</div>
              </div>
              <div className="flex justify-between">
                <div>
                  <strong>Intermediate (MPC)</strong> &bull; Narayana Junior College, Vijayawada
                </div>
                <div className="font-mono text-zinc-400">2018 – 2020 | Score: 647</div>
              </div>
              <div className="flex justify-between">
                <div>
                  <strong>Class X (Secondary School)</strong> &bull; Bhashyam English Medium High School
                </div>
                <div className="font-mono text-zinc-400">2017 – 2018 | CGPA: 9.2/10</div>
              </div>
            </div>
          </div>

          {/* Honors & Certifications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 border-b border-emerald-500/20 pb-1 mb-2">
              Honors, Certifications &amp; Achievements
            </h2>
            <ul className="list-disc list-inside space-y-1 text-xs text-zinc-700 dark:text-zinc-300">
              <li>Award and certificate winner in quiz event organized by SDSC SHAR, ISRO.</li>
              <li>Ethical Hacking and Cybersecurity Workshop — IIT Hyderabad.</li>
              <li>Inter-College Hackathon — Madanapalle Institute of Technology &amp; Science (MITS).</li>
              <li>Web and Mobile Development Training — NAVACHIS IT Solutions (HTML, CSS, JS, Angular, Laravel, Flutter).</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}

