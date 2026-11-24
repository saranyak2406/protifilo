import React, { useState } from 'react';
import { 
  FileDown, 
  Eye, 
  FileText, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  Download,
  FileCode
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import ResumeModal from './ResumeModal';

export default function ResumeSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-white/50 dark:bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-wide uppercase">
            <FileText size={13} />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Resume &amp; Credentials
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Download my verified technical resume in PDF or Word formats, or explore the full interactive document preview.
          </p>
        </div>

        {/* Apple & Linear Style Glass Card Container */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white dark:bg-zinc-900/60 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-xl p-8 sm:p-12 relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-lavender-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left: Resume Highlights */}
            <div className="md:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lavender-500/10 text-lavender-600 dark:text-lavender-400 text-xs font-mono font-medium border border-lavender-500/20">
                <ShieldCheck size={14} />
                <span>Verified Industry Experience &bull; ATS Optimized</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
                {personalInfo.fullName}
              </h3>

              <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                Full Stack Python Developer &bull; 1 Year @ Lomaa IT Solutions &amp; GrapleSoft
              </p>

              <div className="space-y-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>Full-Stack Web Development &bull; Python, FastAPI &amp; React.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>Databases &bull; PostgreSQL, MySQL &amp; Relational Schema Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>B.Tech in CSE &bull; The Apollo University (CGPA: 8.62 / 10)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>Honors &bull; ISRO SDSC SHAR Quiz Winner &amp; IIT Hyderabad Cybersecurity</span>
                </div>
              </div>

              <div className="pt-2 text-xs text-zinc-400 font-mono">
                Updated for 2026 roles &bull; Ready for technical interviews
              </div>
            </div>

            {/* Right: Action Buttons & File Formats */}
            <div className="md:col-span-5 flex flex-col gap-3.5 bg-zinc-50 dark:bg-zinc-950/70 p-6 sm:p-7 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              
              {/* Primary Download: PDF */}
              <a
                href={personalInfo.resumePdf}
                download="Saranya_Sree_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-zinc-900 dark:bg-zinc-100 hover:bg-lavender-600 dark:hover:bg-lavender-400 text-white dark:text-zinc-950 text-sm font-bold shadow-md hover:shadow-lg transition-all"
              >
                <FileDown size={17} />
                <span>Download Resume (PDF)</span>
              </a>

              {/* Secondary Download: Word DOCX */}
              <a
                href={personalInfo.resumeDocx}
                download="Saranya_Sree_Resume.docx"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:border-lavender-500 text-xs sm:text-sm font-semibold border border-zinc-300 dark:border-zinc-800 transition-colors shadow-sm"
              >
                <FileCode size={16} className="text-lavender-500" />
                <span>Download Resume (DOCX)</span>
              </a>

              {/* View Interactive Modal */}
              <button
                onClick={() => setShowModal(true)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-transparent hover:bg-zinc-200/50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm font-semibold transition-colors"
              >
                <Eye size={16} className="text-emerald-500" />
                <span>View Full Resume Online</span>
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Interactive Modal */}
      {showModal && <ResumeModal onClose={() => setShowModal(false)} />}
    </section>
  );
}
