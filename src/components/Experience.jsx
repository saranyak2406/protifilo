import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Code2,
  Terminal,
  Cpu,
  Layers,
  Building2
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-white/40 dark:bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-lavender-500/10 border border-lavender-500/20 text-lavender-600 dark:text-lavender-400 text-xs font-semibold tracking-wide uppercase">
            <Briefcase size={13} />
            <span>Career &amp; Industry Track</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Professional Experience
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Proven track record delivering production-grade web applications, robust asynchronous APIs, and real-world system integrations.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData.map((exp, index) => (
            <div 
              key={index}
              className="relative pl-6 sm:pl-10 border-l-2 border-lavender-500/40 dark:border-lavender-500/30 pb-4 last:pb-0"
            >
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-lavender-500 border-4 border-white dark:border-zinc-950 shadow-md shadow-lavender-500/40"></div>

              {/* Main Card */}
              <div className="p-7 sm:p-9 rounded-3xl bg-white dark:bg-zinc-900/60 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md hover:border-lavender-500/40 transition-all duration-300">
                
                {/* Header: Role & Company */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5 pb-5 border-b border-zinc-100 dark:border-zinc-800">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <Building2 size={16} className="text-lavender-600 dark:text-lavender-400" />
                      <h4 className="text-lg sm:text-xl font-bold text-lavender-600 dark:text-lavender-400">
                        {exp.company}
                      </h4>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex flex-wrap sm:flex-col sm:items-end gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                    <div className="flex items-center gap-1.5 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-lg">
                      <Calendar size={13} className="text-lavender-500" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-lg">
                      <MapPin size={13} className="text-pastelPink-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
                  {exp.description}
                </p>

                {/* Responsibilities List */}
                <div className="space-y-2.5 mb-6">
                  <p className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-400 font-semibold">
                    Key Contributions &amp; Responsibilities:
                  </p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Badges */}
                <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {exp.tech.map((t) => (
                      <span 
                        key={t}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-50 dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800"
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

      </div>
    </section>
  );
}
