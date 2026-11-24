import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  Award, 
  BookOpen, 
  Sparkles, 
  ShieldCheck, 
  Trophy,
  CheckCircle2,
  MapPin
} from 'lucide-react';
import { educationData, honorsAndCertifications } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
            <GraduationCap size={13} />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
            Education &amp; Honors
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            A strong foundation in computer science principles, algorithmic problem solving, and technical leadership.
          </p>
        </div>

        {/* 2-Column Grid: Education on Left, Certifications & Honors on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Education Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <BookOpen size={20} className="text-emerald-400" />
              <span>Degrees &amp; Qualifications</span>
            </h3>

            <div className="space-y-4">
              {educationData.map((edu, idx) => (
                <div 
                  key={idx}
                  className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900/40 backdrop-blur-xl border border-zinc-200/90 dark:border-zinc-800/70 shadow-md hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                      {edu.degree}
                    </h4>
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 w-fit">
                      {edu.grade}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-300">
                    {edu.institution}
                  </p>

                  <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-1 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} className="text-emerald-400" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={12} className="text-emerald-400" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed">
                    {edu.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-zinc-200 dark:border-zinc-800/60">
                    {edu.keyPoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                        <CheckCircle2 size={13} className="text-emerald-400 mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Right: Honors & Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <Trophy size={20} className="text-emerald-400" />
              <span>Honors &amp; Certifications</span>
            </h3>

            <div className="space-y-4">
              {honorsAndCertifications.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-zinc-900/40 backdrop-blur-xl border border-zinc-200/90 dark:border-zinc-800/70 shadow-md hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                      {item.title}
                    </h4>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                      {item.type}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-emerald-400 mb-1.5">
                    {item.issuer}
                  </p>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Academic Standout Box */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-950/30 to-zinc-900/60 border border-emerald-500/30 text-center space-y-2">
              <div className="text-2xl font-black text-emerald-400">8.62 CGPA</div>
              <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">Computer Science &amp; Engineering</p>
              <p className="text-[11px] text-zinc-600 dark:text-zinc-400">The Apollo University &bull; Class of 2026</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

