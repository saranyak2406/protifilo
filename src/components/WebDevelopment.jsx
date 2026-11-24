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
  Smartphone,
  Zap,
  ShieldCheck,
  Layout
} from 'lucide-react';
import { webDevelopmentServices } from '../data/portfolioData';

export default function WebDevelopment() {
  const getServiceIcon = (id) => {
    switch (id) {
      case 'fullstack': return <Globe size={24} className="text-emerald-400" />;
      case 'frontend': return <Layout size={24} className="text-teal-400" />;
      case 'apis': return <Server size={24} className="text-emerald-400" />;
      case 'database': return <Database size={24} className="text-blue-400" />;
      default: return <Code2 size={24} className="text-emerald-400" />;
    }
  };

  return (
    <section id="web-development" className="py-24 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
            <Globe size={13} />
            <span>Web Development</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
            Full-Stack Web Engineering. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">
              Modern. Scalable. Intuitive.
            </span>
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
              className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900/50 backdrop-blur-xl border border-zinc-200/90 dark:border-zinc-800/80 shadow-xl hover:border-emerald-500/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-300 dark:border-zinc-700/60 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium border border-emerald-500/20">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-medium text-emerald-400/90 mt-0.5 mb-3">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Feature Bullet Points */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                      <CheckCircle2 size={15} className="text-emerald-400 mt-0.5 shrink-0" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Footer */}
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800/70 flex flex-wrap gap-1.5">
                {service.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-100 dark:bg-zinc-950/60 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-800"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Web Architecture Workflow Diagram Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-zinc-100/70 dark:bg-zinc-900/40 border border-zinc-200/90 dark:border-zinc-800/80 backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 text-emerald-400 text-xs font-mono font-medium">
                <Zap size={14} />
                <span>Modern Web Architecture</span>
              </div>
              <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                End-to-End Web Application Lifecycle
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-xl">
                Every web project is developed with clean modular architecture: responsive React components on the frontend, asynchronous Python FastAPI services in the middleware, and structured PostgreSQL/MySQL persistence.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs shadow-md shadow-emerald-500/20 transition-all flex items-center gap-1.5"
              >
                <span>View Web Projects</span>
                <ArrowRight size={14} />
              </a>

              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-semibold text-xs border border-zinc-300 dark:border-zinc-700 hover:border-emerald-500/40 transition-colors"
              >
                Discuss a Web Project
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
