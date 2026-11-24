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
  ArrowUpRight,
  CheckCircle2,
  AlertCircle
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
    // Simulate real network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
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
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
            <Send size={13} />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
            Let's Build Something Great.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Whether you have an open developer role, freelance project, or simply want to connect—my inbox is always open.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900/50 backdrop-blur-xl border border-zinc-200/90 dark:border-zinc-800/80 shadow-xl space-y-6">
              
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  Direct Contact Channels
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  Click to copy or connect instantly via LinkedIn &amp; GitHub.
                </p>
              </div>

              {/* Email Card with 1-click copy */}
              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="truncate">
                    <p className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Email</p>
                    <a href={`mailto:${personalInfo.email}`} className="text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 hover:text-emerald-400 truncate block">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 border border-zinc-800 transition-colors shrink-0"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
                </button>
              </div>

              {/* Phone Card with 1-click copy */}
              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div className="truncate">
                    <p className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Phone</p>
                    <a href={`tel:${personalInfo.phone}`} className="text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 hover:text-emerald-400 truncate block">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 border border-zinc-800 transition-colors shrink-0"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Location</p>
                  <p className="text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-2">
                <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-3 uppercase tracking-wider">
                  Professional Profiles
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-800 hover:border-emerald-500/40 hover:text-emerald-400 flex items-center justify-between text-xs font-semibold text-zinc-800 dark:text-zinc-200 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Linkedin size={16} className="text-blue-400" />
                      <span>LinkedIn</span>
                    </div>
                    <ArrowUpRight size={14} />
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-800 hover:border-emerald-500/40 hover:text-emerald-400 flex items-center justify-between text-xs font-semibold text-zinc-800 dark:text-zinc-200 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Github size={16} />
                      <span>GitHub</span>
                    </div>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-zinc-900/50 backdrop-blur-xl border border-zinc-200/90 dark:border-zinc-800/80 shadow-xl">
              
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  Send Me a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  Fill out the form below and I'll respond within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 max-w-sm mx-auto">
                    Thank you for reaching out. I have received your message and will get back to you promptly at your email address.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 px-5 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-bold transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                      <AlertCircle size={15} />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Johnson"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-300 dark:border-zinc-800 text-xs sm:text-sm text-zinc-900 dark:text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-300 dark:border-zinc-800 text-xs sm:text-sm text-zinc-900 dark:text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Opportunity / Collaboration / Freelance Project"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-300 dark:border-zinc-800 text-xs sm:text-sm text-zinc-900 dark:text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Saranya, I came across your portfolio and would like to discuss..."
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-300 dark:border-zinc-800 text-xs sm:text-sm text-zinc-900 dark:text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm shadow-lg shadow-emerald-500/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin"></span>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Message</span>
                      </>
                    )}
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

