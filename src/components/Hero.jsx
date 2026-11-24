import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  Play, 
  Check, 
  Terminal, 
  Code2, 
  Sparkles, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  ExternalLink,
  Globe,
  Github,
  Linkedin,
  MapPin,
  Calendar,
  Briefcase
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('fastapi');
  const [isRunning, setIsRunning] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Rotating title typewriter effect
  useEffect(() => {
    const fullText = personalInfo.rotatingTitles[currentTitleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < fullText.length) {
          setDisplayedText(fullText.substring(0, displayedText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(fullText.substring(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % personalInfo.rotatingTitles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex]);

  const [outputLogs, setOutputLogs] = useState([
    "INFO:     Uvicorn running on http://127.0.0.1:8000 (FastAPI)",
    "INFO:     Database connections established (PostgreSQL & MySQL)",
    "INFO:     Application startup complete. Ready for requests.",
  ]);

  const handleRunCode = () => {
    setIsRunning(true);
    setTimeout(() => {
      setOutputLogs(prev => [
        ...prev,
        `GET /api/v1/developer/saranya HTTP/1.1 200 OK (${new Date().toLocaleTimeString()})`,
        `STATUS: Full Stack Python Developer loaded. 1 Year verified experience.`,
        `STACK: FastAPI, React.js, PostgreSQL, MySQL, Tailwind CSS, Playwright.`,
        `RESPONSE: Ready to engineer intelligent, scalable digital solutions.`
      ]);
      setIsRunning(false);
    }, 600);
  };

  const codeSnippets = {
    fastapi: `# FastAPI Microservice - Saranya Sree
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="SaranyaCore", version="2.0")

class Profile(BaseModel):
    name: str = "K. Saranya Sree"
    role: str = "Full Stack Python Developer"
    experience: str = "1 Year @ Lomaa IT Solutions & GrapleSoft"
    stack: list[str] = ["Python", "FastAPI", "React.js", "PostgreSQL"]

@app.get("/api/v1/developer/saranya", response_model=Profile)
async def get_developer_profile():
    return Profile()`,

    react: `// React UI Architecture - Linear Aesthetic
import React from 'react';

export function ModernInterface({ engineer }) {
  return (
    <div className="backdrop-blur-xl bg-white/80 dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        Hi, I'm {engineer.name}
      </h1>
      <p className="text-lavender-500 dark:text-lavender-400 font-mono text-sm mt-1">
        Building intelligent digital solutions with clean code.
      </p>
    </div>
  );
}`,

    terminal: `$ python -m uvicorn main:app --reload --port 8000
[✓] Framework: FastAPI + Uvicorn Async
[✓] Databases: PostgreSQL & MySQL Connected
[✓] Frontend: React.js + Tailwind CSS
[✓] Testing: Playwright Automated E2E Suite
[✓] Status: Ready for full-time opportunities`
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient Glows - Stripe / Linear Soft Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[420px] bg-gradient-to-tr from-lavender-500/10 via-pastelPink-500/10 to-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-24 right-10 w-[380px] h-[380px] bg-lavender-400/10 rounded-full blur-[130px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-emerald-400/10 rounded-full blur-[110px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-zinc-900/80 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-medium backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Full-Time Roles &bull; Lomaa IT Solutions Alum</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-lavender-500">{personalInfo.name}</span>.
              </h1>
              
              {/* Animated Rotating Subtitle */}
              <div className="h-9 flex items-center justify-center lg:justify-start">
                <span className="text-xl sm:text-2xl font-bold text-lavender-600 dark:text-lavender-400 font-mono">
                  {displayedText}
                </span>
                <span className="w-0.5 h-6 bg-lavender-500 dark:bg-lavender-400 ml-1 animate-pulse"></span>
              </div>

              {/* Tagline */}
              <p className="text-base sm:text-lg font-medium text-zinc-800 dark:text-zinc-200">
                {personalInfo.tagline}
              </p>

              {/* Exact Prompt Intro */}
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                {personalInfo.intro}
              </p>
            </div>

            {/* Quick Badges: Education, Experience & Stack */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <Briefcase size={13} className="text-emerald-500" />
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">1 Year Experience</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <Calendar size={13} className="text-lavender-500" />
                <span>B.Tech CSE &bull; 2026</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <MapPin size={13} className="text-pastelPink-500" />
                <span>The Apollo University</span>
              </div>
            </div>

            {/* Action Buttons: View My Projects, Download Resume, Contact Me */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-sm shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>View My Projects</span>
                <ArrowRight size={16} />
              </a>

              <a
                href={personalInfo.resumePdf}
                download="Saranya_Sree_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-semibold text-sm border border-zinc-300 dark:border-zinc-800 hover:border-lavender-500 hover:bg-lavender-50/50 dark:hover:bg-zinc-800/80 hover:-translate-y-0.5 active:translate-y-0 shadow-sm transition-all duration-200"
              >
                <FileDown size={16} className="text-lavender-500 dark:text-lavender-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-transparent text-zinc-700 dark:text-zinc-300 hover:text-emerald-500 dark:hover:text-emerald-400 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors duration-200"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Verified Social Links Row */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-3 border-t border-zinc-200 dark:border-zinc-800/60">
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Connect:</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-zinc-600 hover:text-lavender-600 dark:text-zinc-400 dark:hover:text-lavender-400 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin size={15} />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                title="GitHub Profile"
              >
                <Github size={15} />
                <span>GitHub</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 text-xs text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
                title="Send Direct Email"
              >
                <Mail size={15} />
                <span>Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: Apple & Stripe Inspired Interactive Terminal */}
          <div className="lg:col-span-6 relative">
            
            {/* Window Container */}
            <div className="relative rounded-3xl bg-zinc-900 dark:bg-zinc-950/95 backdrop-blur-2xl border border-zinc-700/80 dark:border-zinc-800 shadow-2xl overflow-hidden group">
              
              {/* Traffic Lights / Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/90 dark:bg-zinc-900/90 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                  <span className="text-xs font-mono text-zinc-400 ml-2 hidden sm:inline">saranya-core-engine</span>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1 bg-zinc-950/70 p-1 rounded-xl border border-zinc-800 text-xs">
                  <button
                    onClick={() => setActiveTab('fastapi')}
                    className={`px-2.5 py-1 rounded-lg font-mono transition-colors ${
                      activeTab === 'fastapi'
                        ? 'bg-zinc-800 text-emerald-400 shadow-sm font-semibold'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    server.py
                  </button>
                  <button
                    onClick={() => setActiveTab('react')}
                    className={`px-2.5 py-1 rounded-lg font-mono transition-colors ${
                      activeTab === 'react'
                        ? 'bg-zinc-800 text-lavender-400 shadow-sm font-semibold'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    App.jsx
                  </button>
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`px-2.5 py-1 rounded-lg font-mono transition-colors ${
                      activeTab === 'terminal'
                        ? 'bg-zinc-800 text-pastelPink-400 shadow-sm font-semibold'
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

              {/* Interactive Execution Bar */}
              <div className="px-4 py-3 bg-zinc-900/70 border-t border-zinc-800 flex items-center justify-between gap-3">
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
              <div className="px-4 py-2.5 bg-black/90 border-t border-zinc-800 font-mono text-[11px] text-zinc-400 max-h-24 overflow-y-auto space-y-1">
                {outputLogs.map((log, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <span className="text-emerald-500">&gt;</span>
                    <span className={log.includes('200 OK') ? 'text-emerald-400 font-medium' : ''}>{log}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Floating Linear / Apple Glassmorphic Badges */}
            <div className="absolute -bottom-5 -left-3 sm:left-4 p-3 rounded-2xl bg-white/95 dark:bg-zinc-900/90 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-xl flex items-center gap-3 hidden sm:flex">
              <div className="w-9 h-9 rounded-xl bg-lavender-500/20 text-lavender-600 dark:text-lavender-400 flex items-center justify-center font-bold">
                <Cpu size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">Full-Stack Python &amp; React</p>
                <p className="text-[10px] text-zinc-500 dark:text-zinc-400">FastAPI, Microservices &amp; Modern UI</p>
              </div>
            </div>

            <div className="absolute -top-5 -right-2 sm:right-4 p-3 rounded-2xl bg-white/95 dark:bg-zinc-900/90 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-xl flex items-center gap-3 hidden sm:flex">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                <ShieldCheck size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">1 Year Verified Experience</p>
                <p className="text-[10px] text-zinc-500 dark:text-zinc-400">Lomaa IT Solutions &amp; GrapleSoft</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
