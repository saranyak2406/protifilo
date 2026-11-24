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
  MapPin,
  ExternalLink
} from 'lucide-react';
import { educationData, certificationsData } from '../data/portfolioData';

export default function Education() {
  const getCertIcon = (category) => {
    switch (category) {
      case 'Technical Achievement': return <Trophy size={18} className="text-amber-500" />;
      case 'Workshop': return <ShieldCheck size={18} className="text-lavender-500" />;
      case 'Hackathon': return <Sparkles size={18} className="text-pastelPink-500" />;
      default: return <Award size={18} className="text-emerald-500" />;
    }
  };

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-white/40 dark:bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-lavender-500/10 border border-lavender-500/20 text-lavender-600 dark:text-lavender-400 text-xs font-semibold tracking-wide uppercase">
            <GraduationCap size={13} />
            <span>Academic &amp; Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Education &amp; Certifications
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Strong academic foundations in computer science paired with verified technical workshops, hackathons, and awards.
          </p>
        </div>

        {/* 2-Column Grid: Education on Left, Certifications on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Education Degrees */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen size={20} className="text-lavender-600 dark:text-lavender-400" />
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                Academic Degrees
              </h3>
            </div>

            <div className="space-y-4">
              {educationData.map((edu, idx) => (
                <div 
                  key={idx}
                  className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900/60 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md hover:border-lavender-500/40 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h4 className="text-lg font-bold text-zinc-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 w-fit">
                      {edu.grade}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-lavender-600 dark:text-lavender-400">
                    {edu.institution}
                  </p>

                  <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-1 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} className="text-lavender-500" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={12} className="text-pastelPink-500" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 mb-3 leading-relaxed">
                    {edu.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                    {edu.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                        <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Certifications & Technical Achievements */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <Trophy size={20} className="text-amber-500" />
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                Certifications &amp; Achievements
              </h3>
            </div>

            <div className="space-y-4">
              {certificationsData.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-zinc-900/60 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md hover:border-pastelPink-500/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shrink-0">
                      {getCertIcon(item.category)}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                          {item.category}
                        </span>
                        <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                          {item.date}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-zinc-900 dark:text-white mt-1">
                        {item.title}
                      </h4>

                      <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5 mb-1.5">
                        {item.issuer}
                      </p>

                      <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
