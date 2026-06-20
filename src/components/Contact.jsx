import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend, FiCheck } from 'react-icons/fi';
import { profile } from '../data';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const initialForm = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  function validate(values) {
    const e = {};
    if (!values.name.trim()) e.name = 'Please enter your name.';
    if (!values.email.trim()) e.email = 'Please enter your email.';
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) e.email = 'Enter a valid email address.';
    if (!values.message.trim()) e.message = 'Please add a short message.';
    else if (values.message.trim().length < 10) e.message = 'Message should be at least 10 characters.';
    return e;
  }

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    setSubmitError('');

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      setIsSubmitting(true);

      const formData = new FormData();
      formData.append('name', form.name.trim());
      formData.append('email', form.email.trim());
      formData.append('message', form.message.trim());
      formData.append('_subject', `New portfolio message from ${form.name.trim()}`);
      formData.append('_captcha', 'false');
      formData.append('_template', 'table');

      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Unable to send message');
      }

      setSent(true);
      setForm(initialForm);
      setErrors({});
      setTimeout(() => setSent(false), 4000);
    } catch (error) {
      setSubmitError('Something went wrong while sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="contact.send()"
          title="Let's build something together"
          subtitle="Open to full-time roles, freelance work, and good problems."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal delay={0.1}>
            <div className="glass shadow-glass h-full rounded-2xl p-7">
              <h3 className="font-display text-lg font-semibold text-ink-100">Direct contact</h3>
              <div className="mt-6 space-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  data-cursor="hover"
                  className="flex items-center gap-3 text-sm text-ink-300 transition-colors hover:text-cyan-300"
                >
                  <span className="glass flex h-10 w-10 items-center justify-center rounded-full">
                    <FiMail size={16} />
                  </span>
                  {profile.email}
                </a>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, '')}`}
                  data-cursor="hover"
                  className="flex items-center gap-3 text-sm text-ink-300 transition-colors hover:text-cyan-300"
                >
                  <span className="glass flex h-10 w-10 items-center justify-center rounded-full">
                    <FiPhone size={16} />
                  </span>
                  {profile.phone}
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="hover"
                  className="flex items-center gap-3 text-sm text-ink-300 transition-colors hover:text-cyan-300"
                >
                  <span className="glass flex h-10 w-10 items-center justify-center rounded-full">
                    <FiLinkedin size={16} />
                  </span>
                  LinkedIn Profile
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="hover"
                  className="flex items-center gap-3 text-sm text-ink-300 transition-colors hover:text-cyan-300"
                >
                  <span className="glass flex h-10 w-10 items-center justify-center rounded-full">
                    <FiGithub size={16} />
                  </span>
                  GitHub Profile
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <form onSubmit={handleSubmit} className="glass shadow-glass rounded-2xl p-7" noValidate>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-ink-300">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-ink-100 outline-none transition-colors placeholder:text-ink-500 focus:border-cyan-400/50"
                    placeholder="Jane Doe"
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-rose-400">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-ink-300">
                    Your email
                  </label>
                  <input
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-ink-100 outline-none transition-colors placeholder:text-ink-500 focus:border-cyan-400/50"
                    placeholder="jane@company.com"
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-rose-400">{errors.email}</p>}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-ink-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-ink-100 outline-none transition-colors placeholder:text-ink-500 focus:border-cyan-400/50"
                  placeholder="Tell me about the role or project..."
                />
                {errors.message && <p className="mt-1.5 text-xs text-rose-400">{errors.message}</p>}
              </div>

              <button
                type="submit"
                data-cursor="hover"
                disabled={isSubmitting}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 py-3 text-sm font-semibold text-white shadow-glow-violet transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-8"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : sent ? (
                  <motion.span initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="flex items-center gap-2">
                    <FiCheck size={15} /> Message sent
                  </motion.span>
                ) : (
                  <>
                    <FiSend size={15} /> Send Message
                  </>
                )}
              </button>
              {submitError && <p className="mt-3 text-sm text-rose-400">{submitError}</p>}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
