/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  BarChart3, 
  Clock, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X,
  Bug,
  LineChart,
  Users
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-cta rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl italic">Q</span>
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">QuestA</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Services</a>
          <a href="#why-us" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Why QuestA</a>
          <a href="#contact" className="btn-primary py-2 px-5 text-sm">Book a Sprint</a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-charcoal border-b border-white/5 px-6 py-8 flex flex-col gap-6"
        >
          <a href="#services" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-300">Services</a>
          <a href="#why-us" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-300">Why QuestA</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="btn-primary text-center">Book a Sprint</a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="pt-40 pb-20 px-6">
    <div className="max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block py-1 px-3 rounded-full bg-indigo-cta/10 text-indigo-cta text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-cta/20">
          On-Demand Expertise for Startups
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
          Ship Without Bugs.<br />
          <span className="text-indigo-cta">Scale with Data.</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          On-demand QA and Data Analysis for fast-moving startups. Get senior-level expertise for your temporary projects without the full-time overhead.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="btn-primary w-full sm:w-auto px-8 py-4 text-lg">
            Start Your Project
          </a>
          <a href="#services" className="btn-secondary w-full sm:w-auto px-8 py-4 text-lg flex items-center justify-center gap-2">
            Explore Services <ArrowRight size={20} />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const PainPoints = () => {
  const points = [
    {
      title: "Release Anxiety",
      description: "Shipping features with your fingers crossed? Our QA sprints eliminate the fear of breaking production.",
      icon: <Bug className="text-red-400" size={32} />,
      label: "Lack of QA"
    },
    {
      title: "Data Blindness",
      description: "Sitting on a mountain of raw data but flying blind? We turn your noise into actionable growth insights.",
      icon: <LineChart className="text-emerald-400" size={32} />,
      label: "Raw Data, No Insights"
    },
    {
      title: "Hiring Lag",
      description: "Need senior help today, not in 3 months? Skip the recruitment cycle with our project-based model.",
      icon: <Users className="text-indigo-400" size={32} />,
      label: "Need Help Now"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 hover:border-indigo-cta/30 transition-colors group"
            >
              <div className="mb-6 p-3 rounded-xl bg-white/5 w-fit group-hover:scale-110 transition-transform">
                {point.icon}
              </div>
              <span className="text-xs font-bold text-indigo-cta uppercase tracking-widest mb-2 block">
                {point.label}
              </span>
              <h3 className="text-2xl font-bold mb-4">{point.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">The Core Offering</h2>
          <p className="text-slate-400">Specialized services designed for the startup lifecycle.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <ShieldCheck size={120} />
            </div>
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <ShieldCheck className="text-indigo-cta" /> QA Sprints
            </h3>
            <ul className="space-y-4 mb-8">
              {[
                "End-to-end functional testing",
                "Regression testing for major releases",
                "Bug reporting & prioritization",
                "Automation setup (Cypress/Playwright)",
                "API testing & documentation"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="text-indigo-cta shrink-0 mt-1" size={18} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-slate-400 italic">Best for: Pre-launch polish or major feature rollouts.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <BarChart3 size={120} />
            </div>
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <BarChart3 className="text-indigo-cta" /> Data Deep-Dives
            </h3>
            <ul className="space-y-4 mb-8">
              {[
                "Performance metrics analysis",
                "User behavior & funnel tracking",
                "Custom dashboarding (Looker/Tableau)",
                "SQL optimization & data modeling",
                "A/B testing strategy & analysis"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="text-indigo-cta shrink-0 mt-1" size={18} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-slate-400 italic">Best for: Post-launch optimization or fundraising prep.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => (
  <section id="why-us" className="py-24 px-6 bg-indigo-cta/5 border-y border-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">Why QuestA?</h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            We aren't a traditional agency. We are a specialized strike team that embeds into your workflow for as long as you need us.
          </p>
          <div className="space-y-6">
            {[
              { title: "Startup DNA", desc: "We move at your speed. No bureaucracy, just results.", icon: <Zap size={24} /> },
              { title: "Zero Overhead", desc: "No full-time benefits, no long-term contracts. Pay for the project.", icon: <Clock size={24} /> },
              { title: "Senior Only", desc: "No juniors learning on your dime. Only battle-tested experts.", icon: <Users size={24} /> }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-indigo-cta/20 flex items-center justify-center text-indigo-cta">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="h-48 glass-card flex flex-col items-center justify-center p-6 text-center">
              <span className="text-4xl font-bold text-indigo-cta mb-2">24h</span>
              <span className="text-sm text-slate-400 uppercase tracking-wider">Onboarding</span>
            </div>
            <div className="h-64 glass-card bg-indigo-cta/20 flex flex-col items-center justify-center p-6 text-center">
              <span className="text-4xl font-bold text-white mb-2">100%</span>
              <span className="text-sm text-slate-200 uppercase tracking-wider">Startup Focused</span>
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="h-64 glass-card flex flex-col items-center justify-center p-6 text-center">
              <span className="text-4xl font-bold text-indigo-cta mb-2">50+</span>
              <span className="text-sm text-slate-400 uppercase tracking-wider">Sprints Completed</span>
            </div>
            <div className="h-48 glass-card flex flex-col items-center justify-center p-6 text-center">
              <span className="text-4xl font-bold text-indigo-cta mb-2">0</span>
              <span className="text-sm text-slate-400 uppercase tracking-wider">Long-term Lock-in</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="glass-card p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4">Start Your Project</h2>
            <p className="text-slate-400">Tell us what you're building and we'll get back to you within 12 hours.</p>
          </div>

          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Message Received!</h3>
              <p className="text-slate-400">Our team is reviewing your request. Talk soon.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 text-indigo-cta font-semibold hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Company Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Acme Inc."
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-cta transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Work Email</label>
                  <input 
                    required
                    type="email" 
                    placeholder="you@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-cta transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Project Type</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-cta transition-colors appearance-none">
                  <option className="bg-charcoal">QA Sprint</option>
                  <option className="bg-charcoal">Data Deep-Dive</option>
                  <option className="bg-charcoal">Both</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Timeline</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-cta transition-colors appearance-none">
                  <option className="bg-charcoal">Immediate (Next 48h)</option>
                  <option className="bg-charcoal">Next 2 weeks</option>
                  <option className="bg-charcoal">Planning phase</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Briefly describe your needs</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about the project..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-cta transition-colors resize-none"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full py-4 text-lg">
                Send Request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-indigo-cta rounded flex items-center justify-center text-xs font-bold italic">Q</div>
        <span className="font-bold text-lg">QuestA</span>
      </div>
      
      <div className="flex gap-8 text-sm text-slate-400">
        <a href="#" className="hover:text-white transition-colors">Twitter</a>
        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-white transition-colors">Privacy</a>
      </div>

      <div className="text-sm text-slate-500 font-medium">
        Built for Builders. © 2026 QuestA Agency.
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-indigo-cta/30">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Services />
        <WhyUs />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
