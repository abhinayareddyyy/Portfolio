'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/data';
import { Mail, Linkedin, Github } from 'lucide-react';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setFormState({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    alert('Message sent successfully!');
  };

  const iconMap = {
    '✉️': <Mail size={24} className="text-accent-pink" />,
    'in': <Linkedin size={24} className="text-accent-pink" />,
    'github': <Github size={24} className="text-accent-pink" />,
  };

  return (
    <section id="contact" className="py-24 bg-dark-secondary relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background elements */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative z-10"
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="section-title">{portfolioData.contact.title}</h2>
            <p className="text-lg text-text-light/80">
              {portfolioData.contact.description}
            </p>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-12"
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
            className="card space-y-6 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                required
                className="w-full px-4 py-3 bg-dark-primary border border-white/10 rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:border-accent-pink transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                required
                className="w-full px-4 py-3 bg-dark-primary border border-white/10 rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:border-accent-pink transition-colors"
              />
            </div>

            <textarea
              placeholder="Your Message"
              rows={5}
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              required
              className="w-full px-4 py-3 bg-dark-primary border border-white/10 rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:border-accent-pink transition-colors resize-none"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn btn-primary disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
