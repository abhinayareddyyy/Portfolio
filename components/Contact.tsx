'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '@/lib/data';
import { Mail, Linkedin, Github, CheckCircle, AlertCircle } from 'lucide-react';

// Google Forms configuration
const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSf1jB6mzXUEmGv7EFjs_ygD9soIA3RUx-9bGdnrYF52eK510Q/formResponse';
const ENTRY_NAME    = 'entry.283007280';
const ENTRY_EMAIL   = 'entry.1185754734';
const ENTRY_MESSAGE = 'entry.1067915766';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const body = new FormData();
      body.append(ENTRY_NAME,    formState.name);
      body.append(ENTRY_EMAIL,   formState.email);
      body.append(ENTRY_MESSAGE, formState.message);

      // Google Forms requires no-cors mode; we treat any network response as success
      await fetch(GOOGLE_FORM_ACTION, {
        method: 'POST',
        mode: 'no-cors',
        body,
      });

      setSubmitStatus('success');
      setFormState({ name: '', email: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const iconMap = {
    '✉️': <Mail size={24} className="text-accent-pink" />,
    'in': <Linkedin size={24} className="text-accent-pink" />,
    'github': <Github size={24} className="text-accent-pink" />,
  };

  return (
    <section id="contact" className="py-10 bg-dark-secondary relative overflow-hidden">
      <div className="w-full px-5 sm:px-8 md:px-10 lg:px-[66px]">
        {/* Background elements */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative z-10"
        >
          <motion.div className="text-center mb-8" variants={itemVariants}>
            <h2 className="section-title">{portfolioData.contact.title}</h2>
            <p className="text-xl text-text-light/80 max-w-3xl mx-auto">
              {portfolioData.contact.description}
            </p>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            className="grid md:grid-cols-3 gap-4 xl:gap-5 mb-8 max-w-[1600px] mx-auto items-stretch"
            variants={containerVariants}
          >
            {portfolioData.contact.links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="card text-center group"
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 flex justify-center">
                  {iconMap[link.icon as keyof typeof iconMap] || link.icon}
                </div>
                <h3 className="font-semibold text-text-light mb-2">{link.label}</h3>
                <p className="text-text-muted text-sm group-hover:text-accent-pink transition-colors">
                  {link.value}
                </p>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="card space-y-4 lg:space-y-5 max-w-3xl mx-auto w-full"
            variants={itemVariants}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                required
                className="w-full px-4 py-4 bg-dark-primary border border-white/10 rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:border-accent-pink transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                required
                className="w-full px-4 py-4 bg-dark-primary border border-white/10 rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:border-accent-pink transition-colors"
              />
            </div>

            <textarea
              placeholder="Your Message"
              rows={5}
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              required
              className="w-full px-4 py-4 bg-dark-primary border border-white/10 rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:border-accent-pink transition-colors resize-none"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn btn-primary disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmitting && (
                <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              )}
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm"
                >
                  <CheckCircle size={16} />
                  <span>Message sent! I&apos;ll get back to you soon</span>
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
                >
                  <AlertCircle size={16} />
                  <span>Something went wrong. Please try again or email directly</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
