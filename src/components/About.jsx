import React from 'react';
import { 
  Code2, 
  Sparkles, 
  GraduationCap, 
  Briefcase, 
  Calendar, 
  Cpu, 
  Zap,
  Layers,
  CheckCircle2,
  Terminal,
  Database
} from 'lucide-react';
import { personalInfo, aboutCards } from '../data/portfolioData';

export default function About() {
  const getCardIcon = (iconName) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap size={22} className="text-lavender-500" />;
      case 'Calendar': return <Calendar size={22} className="text-pastelPink-500" />;
      case 'Code2': return <Code2 size={22} className="text-emerald-500" />;
      case 'Briefcase': return <Briefcase size={22} className="text-lavender-500" />;
      default: return <Cpu size={22} className="text-emerald-500" />;
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white/50 dark:bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-lavender-500/10 border border-lavender-500/20 text-lavender-600 dark:text-lavender-400 text-xs font-semibold tracking-wide uppercase">
            <Sparkles size={13} />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Engineering Thoughtful Digital Solutions.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Bridging technical excellence in Python and modern frontend design to build reliable software products.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Narrative Card (Left 7 Cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white dark:bg-zinc-900/60 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-lavender-500/10 border border-lavender-500/20 text-lavender-600 dark:text-lavender-400">
                  <Code2 size={24} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                    Full Stack Python Developer
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                    Clean Code &bull; Asynchronous APIs &bull; Reactive Interfaces
                  </p>
                </div>
              </div>

              {/* Exact Prompt Paragraph */}
              <div className="prose dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300 leading-relaxed space-y-4 text-base">
                <p className="text-lg font-medium text-zinc-900 dark:text-zinc-100 border-l-2 border-lavender-500 pl-4 py-1 italic bg-lavender-50/40 dark:bg-zinc-950/40 rounded-r-xl">
                  "{personalInfo.aboutText}"
                </p>
                <p>
                  With verified development experience at <strong>Lomaa IT Solutions</strong> and <strong>GrapleSoft</strong>, I build scalable end-to-end applications that merge high-concurrency <strong>FastAPI / Python</strong> backends with fluid, accessible <strong>React.js</strong> interfaces.
                </p>
                <p>
                  My work spans real-world challenges: from AI-driven itinerary engines and dermatological computer vision models to asset QR matrix management and academic timetable constraint solvers.
                </p>
              </div>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-zinc-200 dark:border-zinc-800">
              <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800">
                <div className="text-lavender-600 dark:text-lavender-400 font-semibold text-xs flex items-center gap-1.5 mb-1">
                  <Zap size={14} />
                  <span>Clean Backend</span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">FastAPI &amp; Python async services with clean architecture.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800">
                <div className="text-pastelPink-600 dark:text-pastelPink-400 font-semibold text-xs flex items-center gap-1.5 mb-1">
                  <Layers size={14} />
                  <span>Modern Frontend</span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">Responsive, accessible React.js &amp; Tailwind CSS apps.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800">
                <div className="text-emerald-600 dark:text-emerald-400 font-semibold text-xs flex items-center gap-1.5 mb-1">
                  <Database size={14} />
                  <span>Data Integrity</span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">Optimized PostgreSQL &amp; MySQL relational schemas.</p>
              </div>
            </div>
          </div>

          {/* 4 Information Cards (Right 5 Cols - 2x2 Grid) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutCards.map((card, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-white dark:bg-zinc-900/60 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md hover:border-lavender-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="p-3 w-fit rounded-2xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 mb-4">
                  {getCardIcon(card.icon)}
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-400">
                    {card.title}
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mt-1 mb-1">
                    {card.value}
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-snug">
                    {card.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
