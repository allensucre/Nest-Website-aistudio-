/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Chrome, 
  Download, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Zap, 
  Shield, 
  Search, 
  MessageSquare, 
  ChevronDown, 
  Github,
  Twitter,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  Plus,
  Minus
} from 'lucide-react';

// --- Components ---

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'How it works', href: '#how-it-works' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'Join waitlist', href: '#waitlist' },
    { name: 'Install', href: '#install' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-zinc-200 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/assets/logo-nest-mark.svg" alt="Nest logo" className="w-8 h-8 rounded-lg" />
          <span className="text-xl font-semibold tracking-tight text-zinc-900">Nest</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#install" 
            className="bg-zinc-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all shadow-sm"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-zinc-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-zinc-200 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-zinc-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#install" 
              className="bg-zinc-900 text-white px-4 py-3 rounded-xl text-center font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const HERO_VIDEO_URL = (import.meta as any).env?.VITE_HERO_VIDEO_URL || '';
const HERO_IMAGE_URL = (import.meta as any).env?.VITE_HERO_IMAGE_URL || '';
const WAITLIST_ENDPOINT = (import.meta as any).env?.VITE_WAITLIST_ENDPOINT || '';
const BETA_DOWNLOAD_URL = (import.meta as any).env?.VITE_BETA_DOWNLOAD_URL || '';

const smoothScrollTo = (targetId: string) => {
  document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Hero = ({ onComingSoonClick }: { onComingSoonClick: () => void }) => {
  const [videoLoading, setVideoLoading] = useState(true);
  const [videoFailed, setVideoFailed] = useState(false);
  const hasVideo = !!HERO_VIDEO_URL && !videoFailed;

  return (
    <section className="pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 text-xs font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Beta version now available
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-6 max-w-4xl"
        >
          Save tabs as <br />
          <span className="text-zinc-400">reusable context.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-600 mb-10 max-w-2xl leading-relaxed"
        >
          Keep related tabs together, build a clear Snapshot, and Resume work without rebuilding from scratch.
        </motion.p>
        <p className="text-sm text-zinc-500 mb-6">
          Website access is open. Extension access is currently invite-code gated.
        </p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a 
            href="#install" 
            className="group flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-zinc-800 transition-all shadow-lg hover:shadow-xl"
          >
            <Download size={20} />
            Manual Install (Beta)
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="relative group">
            <button
              type="button"
              onClick={onComingSoonClick}
              className="flex items-center gap-2 bg-white border border-zinc-200 text-zinc-500 px-8 py-4 rounded-full text-base font-semibold hover:bg-zinc-50 transition-colors"
            >
              <Chrome size={20} />
              Add to Chrome (Coming soon)
            </button>
            <span className="absolute -top-3 -right-2 bg-zinc-100 text-zinc-500 text-[10px] font-bold px-2 py-0.5 rounded-full border border-zinc-200">
              COMING SOON
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 relative w-full max-w-5xl aspect-video rounded-2xl border border-zinc-200 shadow-2xl overflow-hidden bg-black"
        >
          {hasVideo ? (
            <>
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                controls
                playsInline
                poster={HERO_IMAGE_URL || undefined}
                onCanPlay={() => setVideoLoading(false)}
                onError={() => {
                  setVideoFailed(true);
                  setVideoLoading(false);
                }}
              >
                <source src={HERO_VIDEO_URL} />
              </video>
              {videoLoading ? (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-sm text-white">
                  Product walkthrough loading...
                </div>
              ) : null}
            </>
          ) : HERO_IMAGE_URL ? (
            <img src={HERO_IMAGE_URL} alt="Nest product walkthrough" className="absolute inset-0 h-full w-full object-cover" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-sm text-zinc-300">
              Product walkthrough preview (Save -&gt; Snapshot -&gt; Resume)
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const Waitlist = ({ focusToken, topHint }: { focusToken: number; topHint: string | null }) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const [workEmail, setWorkEmail] = useState('');
  const [useCase, setUseCase] = useState('');
  const [source, setSource] = useState('');
  const [emailError, setEmailError] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    if (!focusToken) return;
    emailRef.current?.focus();
  }, [focusToken]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isLoading || joined) return;
    setEmailError('');
    setSubmitError('');
    const email = workEmail.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setEmailError('Please enter a valid email.');
      emailRef.current?.focus();
      return;
    }
    setIsLoading(true);
    try {
      if (WAITLIST_ENDPOINT) {
        const res = await fetch(WAITLIST_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ workEmail: email, useCase, source }),
        });
        if (!res.ok) {
          throw new Error('submit_failed');
        }
      } else {
        await new Promise((resolve) => window.setTimeout(resolve, 650));
      }
      setJoined(true);
    } catch {
      setSubmitError('Something went wrong. Try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="waitlist" className="py-20 px-6 bg-zinc-50 border-y border-zinc-200">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Join the waitlist</h2>
        <p className="text-zinc-600 mb-1">Get notified when Add to Chrome is live.</p>
        <p className="text-sm text-zinc-500 mb-6">Optional. For launch updates only. Manual Install (Beta) is available now.</p>
        {topHint ? (
          <div className="mb-4 rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700">
            {topHint}
          </div>
        ) : null}
        <form className="space-y-4 rounded-2xl border border-zinc-200 bg-white p-6" onSubmit={onSubmit}>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Work email</label>
            <input
              ref={emailRef}
              type="email"
              value={workEmail}
              onChange={(e) => setWorkEmail(e.target.value)}
              disabled={isLoading || joined}
              className="w-full px-4 py-2 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
              placeholder="you@example.com"
            />
            {emailError ? <p className="mt-2 text-sm text-red-600">{emailError}</p> : null}
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Use case</label>
            <select
              value={useCase}
              onChange={(e) => setUseCase(e.target.value)}
              disabled={isLoading || joined}
              className="w-full px-4 py-2 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
            >
              <option value="">Select one (optional)</option>
              <option value="Research synthesis">Research synthesis</option>
              <option value="Product decision tracking">Product decision tracking</option>
              <option value="Engineering debugging context">Engineering debugging context</option>
              <option value="Content planning and writing">Content planning and writing</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">How did you hear about Nest?</label>
            <input
              type="text"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              disabled={isLoading || joined}
              className="w-full px-4 py-2 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
              placeholder="Optional"
            />
          </div>
          <button
            disabled={isLoading || joined}
            className="w-full bg-zinc-900 text-white py-3 rounded-lg font-semibold hover:bg-zinc-800 transition-all disabled:opacity-60"
          >
            {isLoading ? 'Joining...' : joined ? 'Joined' : 'Join waitlist'}
          </button>
          <p className="text-xs text-zinc-500">We only use your email for launch updates.</p>
          {submitError ? <p className="text-sm text-red-600">{submitError}</p> : null}
          {joined ? (
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-700">
              <p className="font-semibold">You're on the list.</p>
              <p className="mt-1">We’ll email you when Add to Chrome is live.</p>
              <a href="#install" className="mt-2 inline-block underline">Try Manual Install (Beta)</a>
            </div>
          ) : null}
        </form>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: <Zap className="text-amber-500" />,
      title: "Capture Context",
      description: "Nest automatically identifies the context of what you're viewing, from research papers to product comparisons."
    },
    {
      icon: <Layers className="text-indigo-500" />,
      title: "Smart Archiving",
      description: "Information is categorized and stored with metadata that makes it easy to find later, even months after saving."
    },
    {
      icon: <Search className="text-emerald-500" />,
      title: "Instant Retrieval",
      description: "Search through your archive with natural language. Nest understands the 'why' behind what you saved."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">How Nest Works</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">A seamless workflow designed to stay out of your way while capturing everything that matters.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm"
            >
              <div className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">{step.title}</h3>
              <p className="text-zinc-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const UseCases = () => {
  const cases = [
    {
      title: "Research & Academia",
      description: "Keep track of sources, citations, and the specific context of your findings across multiple journals and sites.",
      tags: ["Citations", "PDFs", "Notes"]
    },
    {
      title: "Product Comparison",
      description: "Archive specs, prices, and reviews when shopping. Nest keeps the context of why you liked a specific item.",
      tags: ["Shopping", "Specs", "Reviews"]
    },
    {
      title: "Content Creation",
      description: "Save inspiration, references, and visual assets with their original source context for easy attribution.",
      tags: ["Inspiration", "Assets", "Attribution"]
    },
    {
      title: "Developer Documentation",
      description: "Archive snippets, StackOverflow threads, and documentation pages with the specific problem context.",
      tags: ["Code", "Docs", "Debugging"]
    }
  ];

  return (
    <section id="use-cases" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Built for every workflow</h2>
            <p className="text-zinc-600">Whether you're a researcher, creator, or developer, Nest adapts to how you work.</p>
          </div>
          <a href="#install" className="text-sm font-semibold text-zinc-900 flex items-center gap-1 hover:underline">
            See all features <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((item, idx) => (
            <div key={idx} className="group p-8 rounded-3xl border border-zinc-100 bg-white hover:border-zinc-200 transition-all hover:shadow-lg">
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">{item.title}</h3>
              <p className="text-zinc-600 mb-6 leading-relaxed">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-zinc-50 text-zinc-500 text-xs font-medium rounded-full border border-zinc-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BetaSteps = () => {
  const downloadHref = BETA_DOWNLOAD_URL || 'mailto:sucre2046@gmail.com?subject=Nest%20Beta%20Package%20Request';
  const downloadLabel = BETA_DOWNLOAD_URL ? 'Download Beta v0.8.2' : 'Request Beta Package by Email';
  const steps = [
    {
      title: "Download the Package",
      content: "Download the latest Nest Beta zip file from the repository. It contains all the necessary extension files."
    },
    {
      title: "Enable Developer Mode",
      content: "Open Chrome Extensions (chrome://extensions) and toggle the 'Developer mode' switch in the top right corner."
    },
    {
      title: "Load Unpacked",
      content: "Click the 'Load unpacked' button and select the folder where you extracted the Nest zip file."
    },
    {
      title: "Pin & Start Archiving",
      content: "Pin Nest to your toolbar and start saving context with a single click or shortcut."
    }
  ];

  return (
    <section id="install" className="py-24 px-6 bg-zinc-900 text-white rounded-[3rem] mx-4 my-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-zinc-800 rounded-full blur-[100px] -mr-48 -mt-48 opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-zinc-800 rounded-full blur-[100px] -ml-48 -mb-48 opacity-50" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Join the Beta</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Nest is currently in manual beta. Follow these simple steps to install it and start archiving your context today.
          </p>
          <p className="text-zinc-400/80 max-w-2xl mx-auto text-sm mt-3">
            You can follow install instructions directly. Invite code check happens inside the extension.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-bold text-white">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{step.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-2xl">
              <Download className="text-zinc-900 w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Ready to try?</h3>
            <p className="text-zinc-400 mb-8">Download the beta package (v0.8.2)</p>
            <a
              href={downloadHref}
              target={downloadHref.startsWith('http') ? '_blank' : undefined}
              rel={downloadHref.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="w-full bg-white text-zinc-900 py-4 rounded-xl font-bold hover:bg-zinc-100 transition-all flex items-center justify-center gap-2"
            >
              <Download size={20} />
              {downloadLabel}
            </a>
            <p className="mt-4 text-xs text-zinc-500">Compatible with Chrome, Edge, and Brave</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Feedback = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  const handleFeedbackSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError('');
    setFormSuccess('');

    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);

    if (!emailValid) {
      setFormError('Please enter a valid email.');
      return;
    }
    if (!trimmedMessage) {
      setFormError('Please enter your feedback message.');
      return;
    }

    const subject = encodeURIComponent('Nest Beta Feedback');
    const body = encodeURIComponent(`From: ${trimmedEmail}\n\n${trimmedMessage}`);
    window.location.href = `mailto:sucre2046@gmail.com?subject=${subject}&body=${body}`;
    setFormSuccess('Feedback draft opened in your email client.');
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto bg-zinc-50 rounded-[2.5rem] p-12 md:p-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-6">
            <MessageSquare className="text-white w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">Help me shape the future of Nest</h2>
          <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
            As a beta user, your feedback is invaluable. I'm building Nest for you, and I want to hear about your experience, feature requests, and any bugs you find.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="https://x.com/woshayebuzhidao" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-900 font-semibold hover:underline">
              <Twitter size={20} />
              Twitter / X
            </a>
            <a href="https://www.linkedin.com/in/liyesun/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-900 font-semibold hover:underline">
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a href="https://www.xiaohongshu.com/user/profile/5678b0376a6a69517350fa0b" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-900 font-semibold hover:underline">
              <ExternalLink size={20} />
              Xiaohongshu
            </a>
            <a href="mailto:sucre2046@gmail.com" className="flex items-center gap-2 text-zinc-900 font-semibold hover:underline">
              <Mail size={20} />
              Email
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/3 bg-white p-8 rounded-3xl shadow-xl border border-zinc-200">
          <form className="space-y-4" onSubmit={handleFeedbackSubmit}>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">Message</label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
                placeholder="How can I improve?"
              />
            </div>
            <button className="w-full bg-zinc-900 text-white py-3 rounded-lg font-semibold hover:bg-zinc-800 transition-all">
              Send Feedback
            </button>
            {formError ? <p className="text-sm text-red-600">{formError}</p> : null}
            {formSuccess ? <p className="text-sm text-emerald-700">{formSuccess}</p> : null}
          </form>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is Nest free to use?",
      a: "During the beta period, Nest is completely free. I plan to introduce a premium tier for advanced features in the future, but a robust free version will always be available."
    },
    {
      q: "How does Nest protect my privacy?",
      a: "Nest processes context locally whenever possible. Your archived data is encrypted and I never sell your information to third parties. You have full control over what is saved and can delete your archive at any time."
    },
    {
      q: "Which browsers are supported?",
      a: "Currently, Nest supports Chromium-based browsers including Google Chrome, Microsoft Edge, Brave, and Vivaldi. Safari support is on my roadmap."
    },
    {
      q: "Can I export my data?",
      a: "Yes! You can export your entire archive as a structured JSON file or a readable Markdown document at any time from the settings menu."
    },
    {
      q: "Do I need waitlist to use Nest?",
      a: "No. Waitlist is optional. The only hard gate is extension invite code."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-zinc-200 rounded-2xl overflow-hidden bg-white">
              <button 
                className="w-full p-6 text-left flex items-center justify-between hover:bg-zinc-50 transition-colors"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="font-bold text-zinc-900">{faq.q}</span>
                {openIdx === idx ? <Minus size={20} className="text-zinc-400" /> : <Plus size={20} className="text-zinc-400" />}
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-zinc-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <img src="/assets/logo-nest-mark.svg" alt="Nest logo" className="w-6 h-6 rounded" />
          <span className="text-lg font-semibold tracking-tight text-zinc-900">Nest</span>
        </div>
        
        <div className="flex gap-8 text-sm text-zinc-500">
          <a href="#" className="hover:text-zinc-900 transition-colors">Privacy</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">Terms</a>
          <a href="#waitlist" className="hover:text-zinc-900 transition-colors">Get launch updates</a>
          <a href="mailto:sucre2046@gmail.com" className="hover:text-zinc-900 transition-colors">Contact</a>
        </div>

        <div className="flex gap-4">
          <a href="https://x.com/woshayebuzhidao" target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-zinc-900 transition-colors">
            <Twitter size={20} />
          </a>
          <a href="https://www.linkedin.com/in/liyesun/" target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-zinc-900 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:sucre2046@gmail.com" className="p-2 text-zinc-400 hover:text-zinc-900 transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 text-center text-xs text-zinc-400">
        © {new Date().getFullYear()} Nest Smart Context Archiving. All rights reserved.
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [waitlistFocusToken, setWaitlistFocusToken] = useState(0);
  const [waitlistHint, setWaitlistHint] = useState<string | null>(null);

  const handleComingSoonClick = () => {
    setWaitlistHint('Optional. Join waitlist for launch updates only.');
    smoothScrollTo('waitlist');
    setWaitlistFocusToken((prev) => prev + 1);
    window.setTimeout(() => setWaitlistHint(null), 3200);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-zinc-900 selection:text-white">
      <Nav />
      
      <main>
        <Hero onComingSoonClick={handleComingSoonClick} />
        <Waitlist focusToken={waitlistFocusToken} topHint={waitlistHint} />
        <HowItWorks />
        <UseCases />
        <BetaSteps />
        <Feedback />
        <FAQ />
        
        {/* Final CTA */}
        <section className="py-32 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Ready to reclaim your context?</h2>
            <p className="text-xl text-zinc-600 mb-12">Join hundreds of early adopters building a smarter digital memory with Nest.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#install" 
                className="bg-zinc-900 text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-zinc-800 transition-all shadow-xl hover:shadow-2xl"
              >
                Download Beta Now
              </a>
              <p className="text-sm text-zinc-500">No credit card required. Free during beta.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
