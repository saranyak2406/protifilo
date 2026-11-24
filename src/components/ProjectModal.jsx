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
  Zap
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
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Dialog Box */}
      <div className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto animate-fade-in">
        
        {/* Modal Header */}
        <div className="p-6 sm:p-7 border-b border-zinc-200 dark:border-zinc-800/80 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium border border-emerald-500/20">
                {project.category}
              </span>
              {project.featured && (
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-medium border border-amber-500/20">
                  Featured Project
                </span>
              )}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-100">
              {project.title}
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-400 hover:text-zinc-100 dark:hover:text-zinc-100 light:hover:text-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-colors"
            aria-label="Close Modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content - Scrollable */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-6 text-sm">
          
          {/* Summary */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
              Project Overview
            </h4>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Architecture Card */}
          <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase mb-1.5">
              <Cpu size={14} />
              <span>System &amp; Data Architecture</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-mono">
              {project.architecture}
            </p>
          </div>

          {/* Key Engineering Highlights */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-3">
              Key Capabilities &amp; Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/50">
                  <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-xs text-zinc-700 dark:text-zinc-300 leading-snug">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2.5">
              Technologies Deployed
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Code Architecture Preview */}
          {project.codeSnippet && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold flex items-center gap-1.5">
                  <Code2 size={14} className="text-emerald-400" />
                  <span>Architecture Code Sample</span>
                </h4>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-zinc-900 hover:bg-zinc-800 text-xs font-mono text-zinc-300 border border-zinc-800 transition-colors"
                >
                  {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                  <span>{copied ? "Copied!" : "Copy"}</span>
                </button>
              </div>
              <div className="p-4 rounded-xl bg-black border border-zinc-800 overflow-x-auto text-xs font-mono text-emerald-300/90 leading-relaxed">
                <pre>
                  <code>{project.codeSnippet}</code>
                </pre>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-5 sm:p-6 bg-zinc-50 dark:bg-zinc-900/60 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Production-grade engineering &bull; Clean code principles</span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-semibold transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
}

