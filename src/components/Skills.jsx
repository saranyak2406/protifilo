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
  Cloud,
  Globe
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Map category icons
  const getCategoryIcon = (id) => {
    switch (id) {
      case 'frontend': return <Layout size={18} className="text-emerald-400" />;
      case 'backend': return <Server size={18} className="text-teal-400" />;
      case 'database': return <Database size={18} className="text-emerald-400" />;
      case 'tools': return <Wrench size={18} className="text-teal-400" />;
      default: return <Cpu size={18} className="text-emerald-400" />;
    }
  };

  const getSkillIcon = (name) => {
    switch (name) {
      case 'Web Development': return <Globe size={18} className="text-emerald-400" />;
      case 'Responsive Design': return <Layout size={18} className="text-teal-400" />;
      case 'Python': return <Terminal size={18} className="text-emerald-400" />;
      case 'FastAPI': return <Cpu size={18} className="text-teal-400" />;
      case 'React.js': return <Code2 size={18} className="text-blue-400" />;
      case 'Tailwind CSS': return <Layers size={18} className="text-cyan-400" />;
      case 'JavaScript (ES6+)': return <FileCode size={18} className="text-amber-400" />;
      case 'HTML5': return <Layout size={18} className="text-orange-400" />;
      case 'CSS3': return <Layout size={18} className="text-blue-400" />;
      case 'Node.js': return <Server size={18} className="text-green-500" />;
      case 'REST APIs': return <Network size={18} className="text-emerald-400" />;
      case 'PostgreSQL': return <Database size={18} className="text-indigo-400" />;
      case 'MySQL': return <Database size={18} className="text-blue-400" />;
      case 'Supabase': return <Cloud size={18} className="text-emerald-400" />;
      case 'Git': return <GitBranch size={18} className="text-rose-400" />;
      case 'GitHub': return <GitBranch size={18} className="text-zinc-200" />;
      case 'Postman': return <Send size={18} className="text-orange-400" />;
      case 'Playwright': return <CheckCircle2 size={18} className="text-green-400" />;
      case 'VS Code': return <Laptop size={18} className="text-blue-400" />;
      default: return <Code2 size={18} className="text-emerald-400" />;
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
    <section id="skills" className="py-24 bg-zinc-50 dark:bg-zinc-950/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
            <Cpu size={13} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
            Skills &amp; Technologies
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Organized across the modern web stack—from high-concurrency Python backends to reactive React frontends and databases.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-zinc-200/80 dark:bg-zinc-900/80 p-1.5 rounded-2xl border border-zinc-300 dark:border-zinc-800/80 w-full sm:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-emerald-500 text-zinc-950 font-semibold shadow-sm'
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
                    ? 'bg-white dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400 font-semibold shadow-sm'
                    : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
                }`}
              >
                <span>{cat.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full sm:w-64">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search skill (e.g. Python, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white dark:bg-zinc-900/70 border border-zinc-300 dark:border-zinc-800 text-xs sm:text-sm text-zinc-900 dark:text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500/60 transition-colors"
            />
          </div>

        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900/40 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800/70 shadow-md hover:border-emerald-500/30 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-300 dark:border-zinc-700/50">
                    {getCategoryIcon(category.id)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                      {category.title}
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {category.skills.length} Skills
                </span>
              </div>

              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6">
                {category.description}
              </p>

              {/* Skills List inside this category */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800/50 hover:border-emerald-500/30 transition-all"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        {getSkillIcon(skill.name)}
                        <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-200/70 dark:bg-zinc-800/60 px-2 py-0.5 rounded-md">
                        {skill.tag}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-zinc-200 dark:bg-zinc-800/60 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted Tech Stack Chips Footer */}
        <div className="mt-12 p-6 rounded-3xl bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/60 text-center">
          <p className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold mb-3">
            Core Production Stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              "Python 3.13",
              "FastAPI",
              "React.js 18",
              "Tailwind CSS",
              "PostgreSQL",
              "MySQL",
              "Supabase",
              "REST APIs",
              "Playwright",
              "Git & GitHub",
              "Linux Workflows",
              "Microservices"
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-800 hover:border-emerald-500/40 hover:text-emerald-400 transition-colors"
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

