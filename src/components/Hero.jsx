import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileDown, 
  Send, 
  Play, 
  Check, 
  Terminal, 
  Code2, 
  Sparkles, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  ExternalLink,
  Globe
} from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';

export default function Hero({ onOpenResumeModal }) {
  const [activeTab, setActiveTab] = useState('fastapi');
  const [isRunning, setIsRunning] = useState(false);
  const [outputLogs, setOutputLogs] = useState([
    "INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)",
    "INFO:     Application startup complete. Ready for requests.",
  ]);

  const handleRunCode = () => {
    setIsRunning(true);
    setTimeout(() => {
      setOutputLogs(prev => [
        ...prev,
        `GET /api/v1/developer/saranya HTTP/1.1 200 OK (${new Date().toLocaleTimeString()})`,
        `STATUS: Full Stack Python Developer loaded. Experience: 1 Year @ Lomaa IT Solutions.`,
        `READY: High-performance microservices and React UI initialized flawlessly.`
      ]);
      setIsRunning(false);
    }, 600);
  };

  const codeSnippets = {
    fastapi: `# FastAPI Microservice - Saranya Sree
from fastapi import FastAPI, Depends
from pydantic import BaseModel

app = FastAPI(title="DeveloperCore", version="2.0")

class Profile(BaseModel):
    name: str = "K. Saranya Sree"
    role: str = "Full Stack Python Developer"
    experience: str = "1 Year @ Lomaa IT Solutions"
    passion: str = "Scalable APIs & Modern React UIs"

@app.get("/api/v1/developer/saranya", response_model=Profile)
async def get_developer_profile():
    return Profile()`,

    react: `// React UI Architecture - Apple Aesthetic
import React from 'react';

export function ModernInterface({ engineer }) {
  return (
    <div className="backdrop-blur-xl bg-zinc-950/70 border border-zinc-800 rounded-3xl p-6">
      <h1 className="text-2xl font-bold text-zinc-100">
        Hi, I'm {engineer.name}
      </h1>
      <p className="text-emerald-400 font-mono text-sm mt-1">
        Building meaningful digital experiences.
      </p>
    </div>
  );
}`,

    terminal: `$ python -m uvicorn main:app --reload --port 8000
[✓] Database: PostgreSQL & MySQL Connected
[✓] Framework: FastAPI + Uvicorn Async
[✓] Frontend: React 18 + Tailwind CSS
[✓] Status: 100% Ready to build next-gen solutions`
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900/80 border border-emerald-500/30 text-emerald-400 text-xs font-medium backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-4"></span>
              <span>Open to Opportunities &bull; Lomaa IT Solutions Alum</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.1]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">{personalInfo.name}</span>.
              </h1>
              <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                {personalInfo.subheadline}
              </p>
            </div>

            {/* Quick Experience & Education Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-300 dark:border-zinc-800/80">
                <Globe size={13} className="text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Web Development</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-300 dark:border-zinc-800/80">
                <span className="text-emerald-400 font-semibold">1 Year</span>
                <span>Experience</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-300 dark:border-zinc-800/80">
                <span className="text-emerald-400 font-semibold">B.Tech</span>
                <span>The Apollo University (2026)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-300 dark:border-zinc-800/80">
                <span className="text-emerald-400 font-semibold">CGPA</span>
                <span>8.62 / 10</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-sm shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>View My Work</span>
                <ArrowRight size={16} />
              </a>

              <a
                href={personalInfo.resumePdf}
                download="Saranya_Sree_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 font-semibold text-sm border border-zinc-300 dark:border-zinc-800 hover:border-emerald-500/50 hover:bg-zinc-800/80 dark:hover:bg-zinc-800/80 light:hover:bg-zinc-50 hover:-translate-y-0.5 active:translate-y-0 shadow-sm transition-all duration-200"
              >
                <FileDown size={16} className="text-emerald-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-transparent text-zinc-700 dark:text-zinc-300 hover:text-emerald-400 text-sm font-medium hover:bg-zinc-900/40 dark:hover:bg-zinc-900/40 light:hover:bg-zinc-100 transition-colors duration-200"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Live Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800/60/80">
              {stats.map((s, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-zinc-100/60 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/40">
                  <div className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                    {s.value}
                  </div>
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Apple-Inspired Developer Visual Terminal */}
          <div className="lg:col-span-6 relative">
            
            {/* Window Container */}
            <div className="relative rounded-2xl bg-zinc-900 dark:bg-zinc-950/90 backdrop-blur-2xl border border-zinc-700/80 dark:border-zinc-800/90 shadow-2xl overflow-hidden group">
              
              {/* Traffic Lights / Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/80 dark:bg-zinc-900/80 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block hover:opacity-100 cursor-pointer"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block hover:opacity-100 cursor-pointer"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block hover:opacity-100 cursor-pointer"></span>
                  <span className="text-xs font-mono text-zinc-400 ml-2">saranya-core-engine</span>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1 bg-zinc-950/60 p-1 rounded-lg border border-zinc-800/60 text-xs">
                  <button
                    onClick={() => setActiveTab('fastapi')}
                    className={`px-2.5 py-1 rounded-md font-mono transition-colors ${
                      activeTab === 'fastapi'
                        ? 'bg-zinc-800 text-emerald-400 shadow-sm'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    server.py
                  </button>
                  <button
                    onClick={() => setActiveTab('react')}
                    className={`px-2.5 py-1 rounded-md font-mono transition-colors ${
                      activeTab === 'react'
                        ? 'bg-zinc-800 text-emerald-400 shadow-sm'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    App.jsx
                  </button>
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`px-2.5 py-1 rounded-md font-mono transition-colors ${
                      activeTab === 'terminal'
                        ? 'bg-zinc-800 text-emerald-400 shadow-sm'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    terminal
                  </button>
                </div>
              </div>

              {/* Code Area */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm text-zinc-300 overflow-x-auto min-h-[220px]">
                <pre className="text-zinc-300 leading-relaxed">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Interactive Execution Footer */}
              <div className="px-4 py-3 bg-zinc-900/60 border-t border-zinc-800/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-zinc-400 truncate">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-mono truncate">Python 3.13 &bull; FastAPI &bull; React.js</span>
                </div>

                <button
                  onClick={handleRunCode}
                  disabled={isRunning}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-mono font-medium border border-emerald-500/40 active:scale-95 transition-all"
                  title="Execute live endpoint"
                >
                  <Play size={12} className={isRunning ? "animate-spin" : ""} />
                  <span>{isRunning ? "Executing..." : "Run Test"}</span>
                </button>
              </div>

              {/* Live Output Drawer */}
              <div className="px-4 py-2.5 bg-black/80 border-t border-zinc-800/80 font-mono text-[11px] text-zinc-400 max-h-24 overflow-y-auto space-y-1">
                {outputLogs.map((log, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <span className="text-emerald-500">&gt;</span>
                    <span className={log.includes('200 OK') ? 'text-emerald-400 font-medium' : ''}>{log}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Floating Glassmorphic Badges */}
            <div className="absolute -bottom-6 -left-4 sm:left-4 p-3 rounded-2xl bg-white/95 dark:bg-zinc-900/90 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800/80 shadow-xl flex items-center gap-3 animate-float hidden sm:flex">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <Cpu size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">Full-Stack Web &amp; Python</p>
                <p className="text-[10px] text-zinc-500 dark:text-zinc-400">React.js, FastAPI &amp; UI Engineering</p>
              </div>
            </div>

            <div className="absolute -top-6 -right-2 sm:right-4 p-3 rounded-2xl bg-white/95 dark:bg-zinc-900/90 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800/80 shadow-xl flex items-center gap-3 hidden sm:flex">
              <div className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">
                <ShieldCheck size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">1 Year Industry Proven</p>
                <p className="text-[10px] text-zinc-500 dark:text-zinc-400">Lomaa IT Solutions</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

