import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  Code2, 
  Server, 
  Database, 
  Wrench, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  GitBranch, 
  Terminal, 
  Send, 
  FileCode, 
  Layout, 
  Laptop,
  Network,
  Check,
  CheckCheck
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'frontend': return <Layout size={20} className="text-lavender-500" />;
      case 'backend': return <Terminal size={20} className="text-emerald-500" />;
      case 'database': return <Database size={20} className="text-pastelPink-500" />;
      case 'tools': return <Wrench size={20} className="text-lavender-500" />;
      case 'testing': return <CheckCircle2 size={20} className="text-emerald-500" />;
      default: return <Cpu size={20} className="text-lavender-500" />;
    }
  };

  const getSkillIcon = (name) => {
    switch (name) {
      case 'HTML': return <Layout size={18} className="text-orange-500" />;
      case 'CSS': return <Layout size={18} className="text-blue-500" />;
      case 'JavaScript': return <FileCode size={18} className="text-amber-500" />;
      case 'React.js': return <Code2 size={18} className="text-cyan-500" />;
      case 'Tailwind CSS': return <Layers size={18} className="text-teal-500" />;
      case 'Python': return <Terminal size={18} className="text-emerald-500" />;
      case 'FastAPI': return <Cpu size={18} className="text-emerald-600 dark:text-emerald-400" />;
      case 'Node.js': return <Server size={18} className="text-green-600 dark:text-green-400" />;
      case 'Express.js': return <Server size={18} className="text-zinc-600 dark:text-zinc-300" />;
      case 'REST APIs': return <Network size={18} className="text-lavender-500" />;
      case 'PostgreSQL': return <Database size={18} className="text-indigo-500" />;
      case 'MySQL': return <Database size={18} className="text-blue-600 dark:text-blue-400" />;
      case 'Git': return <GitBranch size={18} className="text-rose-500" />;
      case 'GitHub': return <GitBranch size={18} className="text-zinc-800 dark:text-zinc-200" />;
      case 'VS Code': return <Laptop size={18} className="text-blue-500" />;
      case 'Postman': return <Send size={18} className="text-orange-500" />;
      case 'Playwright': return <CheckCheck size={18} className="text-emerald-500" />;
      default: return <Code2 size={18} className="text-lavender-500" />;
    }
  };

  const filteredCategories = skillCategories.map(cat => {
    if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
      return null;
    }
    const filteredSkills = cat.skills.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tag.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filteredSkills.length === 0 && searchQuery) return null;
    return { ...cat, skills: filteredSkills };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-24 bg-zinc-50/70 dark:bg-zinc-950/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-wide uppercase">
            <Cpu size={13} />
            <span>Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Core Technical Capabilities
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            A comprehensive, verified technology stack spanning modern frontend interfaces, high-throughput Python backends, databases, and testing suites.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-white dark:bg-zinc-900 p-1.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm w-full sm:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 font-semibold shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
              }`}
            >
              All Skills
            </button>
            {skillCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 font-semibold shadow-sm'
                    : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
                }`}
              >
                <span>{cat.title}</span>
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search skill (e.g. Python, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:border-lavender-500 transition-colors shadow-sm"
            />
          </div>

        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900/60 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md hover:border-lavender-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                      {getCategoryIcon(category.id)}
                    </div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    {category.skills.length} Items
                  </span>
                </div>

                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Cards (No fake percentages, clean tags) */}
                <div className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name}
                      className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800 hover:border-lavender-500/30 transition-all flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                          {getSkillIcon(skill.name)}
                        </div>
                        <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                          {skill.name}
                        </span>
                      </div>
                      
                      <span className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-2.5 py-1 rounded-lg shrink-0">
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted Stack Summary Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 shadow-sm text-center">
          <p className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold mb-3">
            Primary Production Tech Stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              "Python",
              "FastAPI",
              "React.js",
              "Tailwind CSS",
              "PostgreSQL",
              "MySQL",
              "Node.js",
              "Express.js",
              "REST APIs",
              "Playwright",
              "Git & GitHub",
              "VS Code",
              "Postman"
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 hover:border-lavender-500/50 hover:text-lavender-600 dark:hover:text-lavender-400 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
