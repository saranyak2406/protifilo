import React from 'react';
import { 
  Code2, 
  Terminal, 
  Sparkles, 
  GraduationCap, 
  Briefcase, 
  Compass, 
  Cpu, 
  CheckCircle2, 
  MapPin, 
  Mail,
  Zap,
  Layers
} from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
            <Sparkles size={13} />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
            Passionate Developer. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Problem Solver &amp; Builder.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I craft high-performance web applications and AI-driven platforms with clean Python backends and refined, human-centric React interfaces.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Narrative Card */}
          <div className="md:col-span-8 p-8 rounded-3xl bg-white dark:bg-zinc-900/50 backdrop-blur-xl border border-zinc-200/90 dark:border-zinc-800/70 shadow-lg relative group hover:border-emerald-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 text-emerald-400 mb-4">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <Code2 size={22} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                My Story &amp; Engineering Philosophy
              </h3>
            </div>
            <div className="space-y-4 text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
              <p>
                I am a passionate <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">Full Stack Python Developer</strong> dedicated to building scalable web applications and solving real-world problems. With 1 year of hands-on professional development experience at <strong className="text-emerald-400 font-medium">Lomaa IT Solutions</strong>, I have designed, engineered, and maintained mission-critical applications that demand both backend reliability and frontend polish.
              </p>
              <p>
                My journey centers around turning complex algorithmic challenges into seamless digital experiences. Whether architecting high-throughput async APIs in <strong className="text-zinc-900 dark:text-zinc-100">FastAPI &amp; Python</strong>, modeling relational databases in <strong className="text-zinc-900 dark:text-zinc-100">PostgreSQL and MySQL</strong>, or sculpting pixel-perfect interactive UIs in <strong className="text-zinc-900 dark:text-zinc-100">React.js &amp; Tailwind CSS</strong>, I treat code as a craft.
              </p>
              <p>
                I actively explore the intersection of modern software engineering and community impact—evident in my work on citizen welfare platforms (Manchi Panulu Seva App), dermatological computer vision models, automated timetable schedulers, and travel planning assistants.
              </p>
            </div>

            {/* Core Values / Strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-zinc-200 dark:border-zinc-800/80">
              <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800/50">
                <div className="text-emerald-400 font-semibold text-sm flex items-center gap-1.5 mb-1">
                  <Zap size={14} />
                  <span>Clean Architecture</span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">Modular, maintainable, and well-tested codebases.</p>
              </div>

              <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800/50">
                <div className="text-teal-400 font-semibold text-sm flex items-center gap-1.5 mb-1">
                  <Layers size={14} />
                  <span>Full Stack Reach</span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">From database queries to interactive client states.</p>
              </div>

              <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800/50">
                <div className="text-emerald-400 font-semibold text-sm flex items-center gap-1.5 mb-1">
                  <Cpu size={14} />
                  <span>AI Integration</span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">Bridging ML pipelines with user-facing web tools.</p>
              </div>
            </div>
          </div>

          {/* Right Column Bento Cards */}
          <div className="md:col-span-4 space-y-6">
            
            {/* Quick Profile Snapshot Card */}
            <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900/50 backdrop-blur-xl border border-zinc-200/90 dark:border-zinc-800/70 shadow-lg space-y-4">
              <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <Compass size={18} className="text-emerald-400" />
                <span>Profile Snapshot</span>
              </h4>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start justify-between pb-2.5 border-b border-zinc-200 dark:border-zinc-800/50">
                  <span className="text-zinc-500 dark:text-zinc-400">Current Role</span>
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200 text-right">{personalInfo.role}</span>
                </div>

                <div className="flex items-start justify-between pb-2.5 border-b border-zinc-200 dark:border-zinc-800/50">
                  <span className="text-zinc-500 dark:text-zinc-400">Industry Exp</span>
                  <span className="font-semibold text-emerald-400 text-right">1 Year @ Lomaa IT</span>
                </div>

                <div className="flex items-start justify-between pb-2.5 border-b border-zinc-200 dark:border-zinc-800/50">
                  <span className="text-zinc-500 dark:text-zinc-400">Education</span>
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200 text-right">B.Tech CSE (2026)</span>
                </div>

                <div className="flex items-start justify-between pb-2.5 border-b border-zinc-200 dark:border-zinc-800/50">
                  <span className="text-zinc-500 dark:text-zinc-400">University</span>
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200 text-right">{personalInfo.college}</span>
                </div>

                <div className="flex items-start justify-between pb-2.5 border-b border-zinc-200 dark:border-zinc-800/50">
                  <span className="text-zinc-500 dark:text-zinc-400">CGPA</span>
                  <span className="font-semibold text-emerald-400 text-right">8.62 / 10</span>
                </div>

                <div className="flex items-start justify-between">
                  <span className="text-zinc-500 dark:text-zinc-400">Location</span>
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200 text-right">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Recruiter Callout Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-950/40 to-zinc-900/70 border border-emerald-500/30 shadow-lg space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Ready for Impact</span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Currently open to full-time developer positions, engineering internships, and high-impact freelance consulting. Fast learner, adaptable, and team-oriented.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
              >
                <span>Let's collaborate</span>
                <span className="text-emerald-400">&rarr;</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

