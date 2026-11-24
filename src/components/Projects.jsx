import React, { useState } from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  Code2, 
  Layers, 
  Cpu, 
  Plane, 
  Scan, 
  CalendarClock, 
  Trophy, 
  QrCode,
  HeartHandshake,
  Eye,
  Github,
  Building2,
  Terminal,
  ArrowRight
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeProject, setActiveProject] = useState(null);

  const getProjectIcon = (id) => {
    switch (id) {
      case 'ai-travel-planner': return <Plane size={20} className="text-lavender-500" />;
      case 'ai-skin-disease-detection': return <Scan size={20} className="text-pastelPink-500" />;
      case 'ai-timetable-generator': return <CalendarClock size={20} className="text-emerald-500" />;
      case 'mca-cricket': return <Trophy size={20} className="text-amber-500" />;
      case 'smart-qr-equipment-management': return <QrCode size={20} className="text-teal-500" />;
      case 'we-care-for-you': return <HeartHandshake size={20} className="text-lavender-500" />;
      default: return <Code2 size={20} className="text-emerald-500" />;
    }
  };

  const filteredProjects = projectsData.filter((p) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'lomaa') return p.company === 'Lomaa IT Solutions';
    if (selectedFilter === 'graplesoft') return p.company === 'GrapleSoft';
    if (selectedFilter === 'ai') return p.category.includes('AI') || p.category.includes('Computer Vision');
    return true;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-white/50 dark:bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-pastelPink-500/10 border border-pastelPink-500/20 text-pastelPink-600 dark:text-pastelPink-400 text-xs font-semibold tracking-wide uppercase">
            <Sparkles size={13} />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Production &amp; Engineering Projects
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            A showcase of AI platforms, constraint-solving algorithms, QR inventory tracking, and full-stack web applications.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap items-center justify-center gap-1.5 bg-white dark:bg-zinc-900 p-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-sm">
            {[
              { id: 'all', label: 'All Projects (6)' },
              { id: 'lomaa', label: 'Lomaa IT Solutions' },
              { id: 'graplesoft', label: 'GrapleSoft' },
              { id: 'ai', label: 'AI & Systems' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  selectedFilter === tab.id
                    ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 font-bold shadow-sm'
                    : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-white dark:bg-zinc-900/60 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-lavender-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
            >
              {/* Card Body */}
              <div className="p-7 space-y-4">
                
                {/* Company & Category Badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-lavender-600 dark:text-lavender-400">
                    <Building2 size={13} />
                    <span>{project.company}</span>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
                    {project.category}
                  </span>
                </div>

                {/* Title & Icon */}
                <div className="flex items-start gap-3 pt-1">
                  <div className="p-2.5 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shrink-0 mt-0.5">
                    {getProjectIcon(project.id)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-lavender-600 dark:group-hover:text-lavender-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-0.5">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {project.shortDescription}
                </p>

                {/* Code Snippet Thumbnail Preview */}
                <div className="p-3 rounded-2xl bg-zinc-950 border border-zinc-800 text-[11px] font-mono text-zinc-400 overflow-hidden line-clamp-3 select-none">
                  <pre className="text-zinc-400">
                    <code>{project.codeSnippet}</code>
                  </pre>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                  {project.technologies.map((t) => (
                    <span 
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-50 dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>

              {/* Card Footer: View Details, Live Demo, GitHub */}
              <div className="p-5 bg-zinc-50 dark:bg-zinc-950/70 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveProject(project)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 text-xs font-semibold hover:bg-lavender-600 dark:hover:bg-lavender-400 dark:hover:text-zinc-950 transition-colors"
                >
                  <Eye size={13} />
                  <span>View Details</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <Github size={15} />
                    </a>
                  )}

                  {project.liveDemoUrl ? (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink size={15} />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-2 py-1 rounded-lg border border-zinc-200 dark:border-zinc-800" title="Internal Enterprise Software">
                      Enterprise Internal
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
