'use client';

import { useState } from 'react';
import Reveal from './ui/Reveal';
import { ArrowRight, Check, Mail, MapPin, Phone } from './ui/Icons';
import { company, offices } from '../lib/data/company';

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulated submission — wire to your form endpoint (see README).
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSent(true);
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow mb-4">Contact</p>
          <h2 className="heading-lg text-gray-900">Talk to an engineer, not a sales funnel.</h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Tell us what you are trying to build or fix. A principal engineer will reply within one business day with
            questions, not a pitch deck.
          </p>

          <ul className="mt-10 space-y-5">
            <li className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-yellow-400/15 text-yellow-700">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <div className="text-sm font-semibold text-gray-900">Email</div>
                <a href={`mailto:${company.email}`} className="text-gray-600 hover:text-yellow-700">
                  {company.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-yellow-400/15 text-yellow-700">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="text-sm font-semibold text-gray-900">Phone</div>
                <a href={`tel:${company.phone.replace(/[^+\d]/g, '')}`} className="text-gray-600 hover:text-yellow-700">
                  {company.phone}
                </a>
              </div>
            </li>
            {offices.map((o) => (
              <li key={o.city} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-yellow-400/15 text-yellow-700">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    {o.city} <span className="ml-1 font-mono text-[10px] uppercase tracking-wider text-gray-400">{o.label}</span>
                  </div>
                  <div className="text-sm text-gray-600">{o.address}</div>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
            {sent ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-black">
                  <Check className="h-7 w-7" />
                </span>
                <h3 className="mt-6 text-2xl font-bold text-gray-900">Message received</h3>
                <p className="mt-2 max-w-sm text-gray-600">
                  Thanks — an engineer will be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="label">First name</label>
                    <input type="text" id="firstName" name="firstName" required className="input" placeholder="Jordan" autoComplete="given-name" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="label">Last name</label>
                    <input type="text" id="lastName" name="lastName" required className="input" placeholder="Lee" autoComplete="family-name" />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="label">Work email</label>
                    <input type="email" id="email" name="email" required className="input" placeholder="jordan@company.com" autoComplete="email" />
                  </div>
                  <div>
                    <label htmlFor="company" className="label">Company</label>
                    <input type="text" id="company" name="company" className="input" placeholder="Company Inc." autoComplete="organization" />
                  </div>
                </div>
                <div>
                  <label htmlFor="topic" className="label">What is this about?</label>
                  <select id="topic" name="topic" className="input" defaultValue="">
                    <option value="" disabled>Select a topic</option>
                    <option>New platform or product build</option>
                    <option>Modernising a legacy system</option>
                    <option>Cloud migration or DevOps</option>
                    <option>Data platform or analytics</option>
                    <option>Architecture review / due diligence</option>
                    <option>Something else</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="label">Project details</label>
                  <textarea id="message" name="message" rows={5} required className="input" placeholder="What are you building, what's the current state, and what does success look like?" />
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-gray-500">We&apos;ll never share your details. NDA available on request.</p>
                  <button type="submit" disabled={submitting} className="btn-primary disabled:cursor-not-allowed disabled:opacity-60">
                    {submitting ? 'Sending…' : 'Send message'} <ArrowRight />
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
