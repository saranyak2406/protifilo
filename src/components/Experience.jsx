import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight,
  Code2,
  Terminal,
  Cpu,
  Layers
} from 'lucide-react';
import { experienceData, personalInfo } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
            <Briefcase size={13} />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
            Professional Experience
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Real-world software engineering delivering full-stack web platforms, async APIs, and AI integrations.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, index) => (
            <div 
              key={index}
              className="relative pl-6 sm:pl-10 border-l-2 border-emerald-500/40 pb-12 last:pb-0"
            >
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white dark:border-zinc-950 shadow-md shadow-emerald-500/50"></div>

              {/* Main Card */}
              <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900/50 backdrop-blur-xl border border-zinc-200/90 dark:border-zinc-800/80 shadow-xl hover:border-emerald-500/40 transition-all duration-300">
                
                {/* Header: Role & Company */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium mb-1 border border-emerald-500/20">
                      {exp.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                      {exp.role}
                    </h3>
                    <p className="text-base font-semibold text-emerald-400 mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-emerald-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-emerald-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-bold">
                    Key Engineering Contributions:
                  </h4>
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                      <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies Used */}
                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800/80">
                  <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-2">
                    Technologies &amp; Frameworks Deployed:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-950/60 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-800/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Highlights banner */}
        <div className="max-w-4xl mx-auto mt-8 p-6 rounded-2xl bg-zinc-100/70 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm">
            <Sparkles size={18} className="text-emerald-400 shrink-0" />
            <span>
              Looking for a dependable Full Stack Python Developer who learns fast and communicates clearly?
            </span>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-4 py-2 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold transition-colors"
          >
            Schedule an Interview &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}

