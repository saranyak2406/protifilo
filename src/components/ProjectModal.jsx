import React, { useState, useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  Code2, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Copy, 
  Check, 
  Terminal,
  Zap,
  Building2,
  AlertCircle,
  Lightbulb,
  UserCheck
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Blurred Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Dialog Box */}
      <div className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto animate-fade-in">
        
        {/* Modal Header */}
        <div className="p-6 sm:p-7 border-b border-zinc-200 dark:border-zinc-800 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-lavender-500/10 text-lavender-600 dark:text-lavender-400 text-xs font-mono font-medium border border-lavender-500/20">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-mono border border-zinc-200 dark:border-zinc-700 flex items-center gap-1">
                <Building2 size={12} />
                <span>{project.company}</span>
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-mono mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-500 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-800 transition-colors"
            aria-label="Close Modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content - Scrollable */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-6 text-sm">
          
          {/* Project Overview */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
              Project Overview
            </h4>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
              {project.overview}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-2 text-rose-500 text-xs font-semibold uppercase mb-1.5">
                <AlertCircle size={14} />
                <span>Problem Statement</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-2 text-emerald-500 text-xs font-semibold uppercase mb-1.5">
                <Lightbulb size={14} />
                <span>Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Features List */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-3">
              Key Features
            </h4>
            <ul className="space-y-2">
              {project.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* My Contribution */}
          <div className="p-4 rounded-2xl bg-lavender-50/50 dark:bg-zinc-900/60 border border-lavender-200/60 dark:border-zinc-800">
            <div className="flex items-center gap-2 text-lavender-600 dark:text-lavender-400 text-xs font-semibold uppercase mb-1.5">
              <UserCheck size={14} />
              <span>My Engineering Contribution</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {project.myContribution}
            </p>
          </div>

          {/* Code Snippet */}
          {project.codeSnippet && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold flex items-center gap-1.5">
                  <Terminal size={14} />
                  <span>Core Architecture Logic</span>
                </h4>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  {copied ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300 overflow-x-auto">
                <pre>
                  <code>{project.codeSnippet}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
              Technologies &amp; Libraries
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span 
                  key={t}
                  className="px-3 py-1 rounded-xl text-xs font-mono bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer with Actions */}
        <div className="p-5 sm:p-6 bg-zinc-50 dark:bg-zinc-900/60 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-4">
          <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
            K. Saranya Sree &bull; {project.company}
          </div>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-xs font-semibold text-zinc-800 dark:text-zinc-100 hover:border-lavender-500 transition-colors shadow-sm"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>
            )}

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 text-zinc-950 text-xs font-semibold hover:bg-emerald-400 transition-colors shadow-sm"
              >
                <ExternalLink size={14} />
                <span>Live Demo</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-zinc-200 dark:bg-zinc-800 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
