import React from 'react';
import { 
  Globe, 
  Code2, 
  Server, 
  Database, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Zap,
  Layout
} from 'lucide-react';
import { webDevelopmentServices } from '../data/portfolioData';

export default function WebDevelopment() {
  const getServiceIcon = (id) => {
    switch (id) {
      case 'fullstack': return <Globe size={22} className="text-emerald-500" />;
      case 'frontend': return <Layout size={22} className="text-lavender-500" />;
      case 'apis': return <Server size={22} className="text-emerald-500" />;
      case 'database': return <Database size={22} className="text-pastelPink-500" />;
      default: return <Code2 size={22} className="text-lavender-500" />;
    }
  };

  return (
    <section id="web-development" className="py-24 relative overflow-hidden bg-white/40 dark:bg-zinc-950/40">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-lavender-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-wide uppercase">
            <Globe size={13} />
            <span>Web Development Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Full-Stack Web Engineering
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I specialize in architecting complete web solutions—merging dynamic React client applications with robust Python backend microservices and resilient databases.
          </p>
        </div>

        {/* 4-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {webDevelopmentServices.map((service) => (
            <div
              key={service.id}
              className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900/60 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-lavender-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-lavender-500/10 text-lavender-600 dark:text-lavender-400 text-xs font-mono font-medium border border-lavender-500/20">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-lavender-600 dark:group-hover:text-lavender-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mt-0.5 mb-3">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Feature Bullet Points */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                      <CheckCircle2 size={15} className="text-emerald-500 mt-0.5 shrink-0" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Footer */}
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap gap-1.5">
                {service.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-50 dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Web Architecture Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 text-lavender-600 dark:text-lavender-400 text-xs font-mono font-medium">
                <Zap size={14} />
                <span>Modern Web Architecture</span>
              </div>
              <h4 className="text-xl font-bold text-zinc-900 dark:text-white">
                End-to-End Web Application Lifecycle
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-xl">
                Every web project is developed with clean modular architecture: responsive React components on the frontend, asynchronous Python FastAPI services in the middleware, and structured PostgreSQL/MySQL persistence.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-full bg-zinc-900 dark:bg-zinc-100 hover:bg-lavender-600 dark:hover:bg-lavender-400 text-white dark:text-zinc-950 font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
              >
                <span>View Web Projects</span>
                <ArrowRight size={14} />
              </a>

              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-semibold text-xs border border-zinc-300 dark:border-zinc-700 hover:border-lavender-500 transition-colors"
              >
                Discuss a Project
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
