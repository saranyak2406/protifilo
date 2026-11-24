import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Github, 
  Linkedin, 
  Sparkles, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle,
  Clock,
  ArrowRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in your name, email, and message.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 700);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white/40 dark:bg-zinc-950/40">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-lavender-500/10 via-pastelPink-500/5 to-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-lavender-500/10 border border-lavender-500/20 text-lavender-600 dark:text-lavender-400 text-xs font-semibold tracking-wide uppercase">
            <Send size={13} />
            <span>Direct Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Let's Connect &amp; Collaborate
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Open for full-time Full Stack Python / React developer opportunities, high-impact freelance projects, and technical discussions.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Status Card */}
            <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900/60 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>Active Availability Status</span>
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                Available for Immediate Joining
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Currently looking for Full Stack Python, React.js, and Software Engineering roles where I can contribute to mission-critical platforms.
              </p>
            </div>

            {/* Email Card with 1-Click Copy */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-zinc-900/60 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-lavender-500/10 text-lavender-600 dark:text-lavender-400 border border-lavender-500/20">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                    Email Address
                  </span>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="block text-sm sm:text-base font-semibold text-zinc-900 dark:text-white hover:text-lavender-600 dark:hover:text-lavender-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Phone Card with 1-Click Copy */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-zinc-900/60 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-pastelPink-500/10 text-pastelPink-600 dark:text-pastelPink-400 border border-pastelPink-500/20">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                    Phone / WhatsApp
                  </span>
                  <a 
                    href={`tel:${personalInfo.phone}`}
                    className="block text-sm sm:text-base font-semibold text-zinc-900 dark:text-white hover:text-pastelPink-600 dark:hover:text-pastelPink-400 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyPhone}
                className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
                title="Copy Phone"
              >
                {copiedPhone ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-zinc-900/60 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <MapPin size={20} />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                  Location
                </span>
                <p className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-white">
                  {personalInfo.location}
                </p>
              </div>
            </div>

            {/* Social Network Profiles */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 flex items-center gap-3 hover:border-lavender-500/50 transition-all shadow-sm group"
              >
                <div className="p-2 rounded-xl bg-lavender-500/10 text-lavender-600 dark:text-lavender-400">
                  <Linkedin size={18} />
                </div>
                <div>
                  <span className="text-xs font-bold text-zinc-900 dark:text-white group-hover:text-lavender-600 dark:group-hover:text-lavender-400">
                    LinkedIn
                  </span>
                  <p className="text-[10px] text-zinc-400 font-mono">Connect Profile</p>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 flex items-center gap-3 hover:border-emerald-500/50 transition-all shadow-sm group"
              >
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Github size={18} />
                </div>
                <div>
                  <span className="text-xs font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                    GitHub
                  </span>
                  <p className="text-[10px] text-zinc-400 font-mono">@saranyak2406</p>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-zinc-900/60 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-xl relative">
              
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-6">
                Fill in your details below and I'll get back to you promptly.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-zinc-900 dark:text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 max-w-sm mx-auto">
                    Thank you for reaching out. I will respond to your email as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 px-4 py-2 rounded-xl bg-emerald-500 text-zinc-950 text-xs font-bold hover:bg-emerald-400 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs flex items-center gap-2">
                      <AlertCircle size={14} />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:border-lavender-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:border-lavender-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Opportunity / Project Discussion"
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:border-lavender-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Saranya, I came across your portfolio and would like to discuss..."
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:border-lavender-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-zinc-900 dark:bg-zinc-100 hover:bg-lavender-600 dark:hover:bg-lavender-400 text-white dark:text-zinc-950 text-sm font-bold shadow-md hover:shadow-lg transition-all disabled:opacity-50"
                  >
                    <Send size={15} />
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
