import React, { useState } from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  ArrowUpRight, 
  Code2, 
  Layers, 
  Cpu, 
  HeartHandshake, 
  Plane, 
  Scan, 
  CalendarClock, 
  Trophy, 
  QrCode,
  Eye
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeProject, setActiveProject] = useState(null);

  const getProjectIcon = (id) => {
    switch (id) {
      case 'manchipanulu-seva-app': return <HeartHandshake size={22} className="text-emerald-400" />;
      case 'ai-travel-planner': return <Plane size={22} className="text-blue-400" />;
      case 'ai-skin-disease-detection': return <Scan size={22} className="text-emerald-400" />;
      case 'ai-timetable-generator': return <CalendarClock size={22} className="text-purple-400" />;
      case 'mca-cricket': return <Trophy size={22} className="text-amber-400" />;
      case 'smart-qr-equipment-management': return <QrCode size={22} className="text-teal-400" />;
      default: return <Code2 size={22} className="text-emerald-400" />;
    }
  };

  const filteredProjects = projectsData.filter((p) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'ai') return p.category.includes('AI') || p.category.includes('Computer Vision');
    if (selectedFilter === 'web') return p.category.includes('Full Stack') || p.category.includes('Web');
    if (selectedFilter === 'systems') return p.category.includes('Asset') || p.category.includes('Scheduling');
    return true;
  });

  return (
    <section id="projects" className="py-24 bg-zinc-50 dark:bg-zinc-950/60/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
            <Sparkles size={13} />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
            Selected Projects
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            A showcase of AI platforms, constraint-solving algorithms, asset systems, and high-performance web applications.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap items-center justify-center gap-1.5 bg-zinc-200/90 dark:bg-zinc-900/80 p-1.5 rounded-full border border-zinc-300 dark:border-zinc-800/80">
            {[
              { id: 'all', label: 'All Projects (6)' },
              { id: 'ai', label: 'AI & Computer Vision' },
              { id: 'web', label: 'Full Stack Web' },
              { id: 'systems', label: 'Systems & IoT' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  selectedFilter === tab.id
                    ? 'bg-emerald-500 text-zinc-950 font-bold shadow-md shadow-emerald-500/20'
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
              className="group rounded-3xl bg-white dark:bg-zinc-900/40 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800/70 shadow-lg hover:shadow-2xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
            >
              {/* Subtle Gradient Glow at top of card */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                project.featured ? 'from-emerald-400 via-teal-400 to-emerald-600' : 'from-zinc-700 to-zinc-800'
              }`}></div>

              {/* Card Body */}
              <div className="p-7 space-y-5">
                
                {/* Header: Icon & Category */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800/70 border border-zinc-300 dark:border-zinc-700/50 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                    {getProjectIcon(project.id)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium border border-emerald-500/20">
                    {project.category}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-emerald-400/90 mt-1 line-clamp-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
                  {project.summary}
                </p>

                {/* Key Highlight Bullets */}
                <div className="space-y-1.5 pt-1">
                  {project.highlights.slice(0, 2).map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span className="truncate">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-100 dark:bg-zinc-950/60 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 rounded-md text-[11px] font-mono text-zinc-500">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="p-5 sm:p-6 bg-zinc-50 dark:bg-zinc-950/40 border-t border-zinc-200 dark:border-zinc-800/60 flex items-center justify-between">
                <button
                  onClick={() => setActiveProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 group-hover:underline underline-offset-4"
                >
                  <Eye size={14} />
                  <span>Architecture &amp; Details</span>
                </button>

                <button
                  onClick={() => setActiveProject(project)}
                  className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:text-emerald-400 hover:bg-zinc-700 transition-colors"
                  aria-label="View Project"
                >
                  <ArrowUpRight size={16} />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}

