import React, { useState } from 'react';
import { 
  FileDown, 
  Eye, 
  FileText, 
  CheckCircle2, 
  Download, 
  Printer, 
  ExternalLink,
  ShieldCheck,
  Award,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import ResumeModal from './ResumeModal';

export default function ResumeSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="resume" className="py-24 bg-zinc-50 dark:bg-zinc-950/40/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
            <FileText size={13} />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
            Resume &amp; Credentials
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Download my comprehensive resume or preview my career timeline, technical proficiencies, and educational background.
          </p>
        </div>

        {/* Apple-Style Glass Card Container */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white dark:bg-zinc-900/50 backdrop-blur-xl border border-zinc-200/90 dark:border-zinc-800/80 shadow-2xl p-8 sm:p-12 relative overflow-hidden">
          
          {/* Subtle Emerald Background Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left: Resume Highlights */}
            <div className="md:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium border border-emerald-500/20">
                <ShieldCheck size={14} />
                <span>ATS-Optimized &bull; Verified Credentials</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                {personalInfo.fullName}
              </h3>

              <p className="text-sm font-semibold text-emerald-400">
                Full Stack Python &amp; Web Developer &bull; 1 Year @ Lomaa IT Solutions
              </p>

              <div className="space-y-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>Full-Stack Web Development &bull; React.js &amp; Python FastAPI</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>PostgreSQL, MySQL, Supabase &amp; RESTful APIs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>B.Tech in CSE &bull; The Apollo University (CGPA: 8.62/10)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>ISRO SDSC SHAR Quiz Winner &bull; IIT Hyderabad Cybersecurity</span>
                </div>
              </div>

              <div className="pt-2 text-xs text-zinc-500 font-mono">
                Updated for 2026 &bull; Formatted for rapid technical screening
              </div>
            </div>

            {/* Right: Download Actions Box */}
            <div className="md:col-span-5 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800/80 space-y-3.5 text-center">
              
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto shadow-inner">
                <FileDown size={28} />
              </div>

              <div>
                <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                  Ready to Review?
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  Choose your preferred format or view directly in browser.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={personalInfo.resumePdf}
                  download="Saranya_Sree_Resume.pdf"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs sm:text-sm font-bold shadow-md shadow-emerald-500/20 active:scale-95 transition-all"
                >
                  <FileDown size={16} />
                  <span>Download Resume (PDF)</span>
                </a>

                <button
                  onClick={() => setShowModal(true)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs sm:text-sm font-semibold transition-colors"
                >
                  <Eye size={15} />
                  <span>Preview Full Resume</span>
                </button>

                <a
                  href={personalInfo.resumeDocx}
                  download="Saranya_Sree_Resume.docx"
                  className="w-full inline-flex items-center justify-center gap-1.5 text-xs text-zinc-400 hover:text-emerald-400 pt-1 transition-colors"
                >
                  <FileText size={13} />
                  <span>Download Word Document (.docx)</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Interactive Resume Modal */}
      {showModal && <ResumeModal onClose={() => setShowModal(false)} />}
    </section>
  );
}

