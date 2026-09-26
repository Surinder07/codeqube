'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageHero from '../../components/PageHero';
import Reveal from '../../components/ui/Reveal';
import { ArrowRight, Check } from '../../components/ui/Icons';
import { offices, engagementModels } from '../../lib/data/company';
import { services } from '../../lib/data/services';

const serviceOptions = [
  ...services.map((s) => s.title),
  'UI/UX Design',
  'E-commerce Solutions',
  'API Development',
  'Maintenance & Support',
];

const projectTypes = [
  ['new-website', 'New website'],
  ['website-redesign', 'Website redesign'],
  ['web-app', 'Web application / platform'],
  ['mobile-app', 'Mobile application'],
  ['ecommerce', 'E-commerce platform'],
  ['cloud-migration', 'Cloud migration / modernisation'],
  ['data', 'Data & analytics'],
  ['digital-marketing', 'Digital marketing'],
  ['consulting', 'Technology consulting'],
  ['other', 'Other'],
];

const budgetOptions = ['Under $25,000', '$25,000 – $75,000', '$75,000 – $150,000', '$150,000 – $500,000', 'Over $500,000'];
const timelineOptions = ['1–2 months', '3–4 months', '5–6 months', '7–12 months', 'Over 12 months', 'Not sure yet'];

const nextSteps = [
  { title: 'Requirements review', detail: 'A solution architect reads your brief and prepares clarifying questions.', time: 'Within 1 business day' },
  { title: 'Discovery call', detail: '45 minutes on goals, constraints, existing systems and success metrics.', time: 'Within 3 business days' },
  { title: 'Proposal & estimate', detail: 'Scope, approach, team shape, timeline and a fixed or ranged price.', time: 'Within 5 business days' },
  { title: 'Kickoff', detail: 'If it is a fit, we can typically start a squad within two to four weeks.', time: '2–4 weeks' },
];

type FormState = {
  firstName: string; lastName: string; email: string; phone: string; company: string;
  projectType: string; budget: string; timeline: string; description: string; services: string[];
};

const initial: FormState = {
  firstName: '', lastName: '', email: '', phone: '', company: '',
  projectType: '', budget: '', timeline: '', description: '', services: [],
};

function Field({ label, htmlFor, required, children, hint }: { label: string; htmlFor: string; required?: boolean; children: React.ReactNode; hint?: string }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="label">
        {label} {required && <span className="text-yellow-600">*</span>}
      </label>
      {children}
      {hint && <p className="mt-1.5 text-xs text-gray-500">{hint}</p>}
    </div>
  );
}

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <fieldset className="card p-6 sm:p-8">
      <legend className="sr-only">{title}</legend>
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-900 font-mono text-[10px] font-semibold text-yellow-400">{n}</span>
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      </div>
      {children}
    </fieldset>
  );
}

export default function QuotePage() {
  const [formData, setFormData] = useState<FormState>(initial);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service) ? prev.services.filter((s) => s !== service) : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulated submission — wire to Formspree or an API route in production.
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Request a quote"
          title={
            <>
              Tell us what you&apos;re building. <span className="text-yellow-500">We&apos;ll tell you how</span> — and what it costs.
            </>
          }
          description="Share as much or as little as you have. A solution architect reviews every request and comes back with questions, an approach and an estimate — no sales script."
          crumbs={[{ href: '/quote', label: 'Request a quote' }]}
          aside={
            <div className="rounded-xl border border-gray-200 bg-gray-950 p-6 text-white">
              <p className="font-mono text-[11px] uppercase tracking-wider text-gray-400">Typical response</p>
              <div className="mt-2 text-4xl font-bold text-yellow-400">24–48h</div>
              <p className="text-sm text-gray-300">to a first architect conversation</p>
              <ul className="mt-5 space-y-2 border-t border-white/10 pt-4 text-sm text-gray-300">
                {['No obligation, no retainer', 'Fixed-price or ranged estimates', 'NDA available on request'].map((t) => (
                  <li key={t} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400" />{t}</li>
                ))}
              </ul>
            </div>
          }
        />

        <div className="container-x grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-7">
            {isSubmitted ? (
              <Reveal className="card p-8 sm:p-12">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-black">
                  <Check className="h-7 w-7" />
                </span>
                <h2 className="mt-6 text-2xl font-bold text-gray-900">Request received.</h2>
                <p className="mt-3 leading-relaxed text-gray-600">
                  Thanks, {formData.firstName}. A solution architect will review your brief and reply to <span className="font-medium text-gray-900">{formData.email}</span> within one business day to arrange a discovery call.
                </p>
                <ol className="mt-8 divide-y divide-gray-200 border-y border-gray-200">
                  {nextSteps.map((s, i) => (
                    <li key={s.title} className="grid gap-2 py-4 sm:grid-cols-12">
                      <span className="font-mono text-xs text-gray-400 sm:col-span-1">0{i + 1}</span>
                      <span className="font-semibold text-gray-900 sm:col-span-4">{s.title}</span>
                      <span className="text-sm text-gray-600 sm:col-span-7">{s.detail}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/" className="btn-primary">Back to home <ArrowRight /></Link>
                  <Link href="/projects" className="btn-outline">Read our case studies</Link>
                </div>
              </Reveal>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Step n={1} title="About you">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="First name" htmlFor="firstName" required>
                      <input id="firstName" name="firstName" type="text" required autoComplete="given-name" className="input" value={formData.firstName} onChange={handleInputChange} />
                    </Field>
                    <Field label="Last name" htmlFor="lastName" required>
                      <input id="lastName" name="lastName" type="text" required autoComplete="family-name" className="input" value={formData.lastName} onChange={handleInputChange} />
                    </Field>
                    <Field label="Work email" htmlFor="email" required>
                      <input id="email" name="email" type="email" required autoComplete="email" className="input" placeholder="you@company.com" value={formData.email} onChange={handleInputChange} />
                    </Field>
                    <Field label="Phone" htmlFor="phone">
                      <input id="phone" name="phone" type="tel" autoComplete="tel" className="input" placeholder="+1 (905) 000-0000" value={formData.phone} onChange={handleInputChange} />
                    </Field>
                    <div className="sm:col-span-2">
                      <Field label="Company" htmlFor="company">
                        <input id="company" name="company" type="text" autoComplete="organization" className="input" value={formData.company} onChange={handleInputChange} />
                      </Field>
                    </div>
                  </div>
                </Step>

                <Step n={2} title="The project">
                  <div className="grid gap-5 sm:grid-cols-3">
                    <Field label="Project type" htmlFor="projectType" required>
                      <select id="projectType" name="projectType" required className="input" value={formData.projectType} onChange={handleInputChange}>
                        <option value="">Select…</option>
                        {projectTypes.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                      </select>
                    </Field>
                    <Field label="Budget" htmlFor="budget" required>
                      <select id="budget" name="budget" required className="input" value={formData.budget} onChange={handleInputChange}>
                        <option value="">Select…</option>
                        {budgetOptions.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </Field>
                    <Field label="Timeline" htmlFor="timeline" required>
                      <select id="timeline" name="timeline" required className="input" value={formData.timeline} onChange={handleInputChange}>
                        <option value="">Select…</option>
                        {timelineOptions.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </Field>
                  </div>
                </Step>

                <Step n={3} title="Services you need">
                  <p className="-mt-3 mb-4 text-sm text-gray-500">Select everything that applies. We will confirm scope on the discovery call.</p>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((service) => {
                      const on = formData.services.includes(service);
                      return (
                        <button
                          key={service}
                          type="button"
                          aria-pressed={on}
                          onClick={() => handleServiceChange(service)}
                          className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${on ? 'border-gray-900 bg-gray-900 text-yellow-400' : 'border-gray-300 bg-white text-gray-700 hover:border-gray-900'}`}
                        >
                          {on && <Check className="h-3.5 w-3.5" />}
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </Step>

                <Step n={4} title="Describe it">
                  <Field label="Project description" htmlFor="description" required hint="Goals, users, existing systems, integrations, compliance requirements, anything that is already decided.">
                    <textarea id="description" name="description" required rows={7} className="input resize-y" placeholder="We need to replace a legacy order-management system that…" value={formData.description} onChange={handleInputChange} />
                  </Field>
                </Step>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-gray-500">By submitting you agree to be contacted about this request. We never share your details.</p>
                  <button type="submit" disabled={isSubmitting} className="btn-primary sm:min-w-[200px]">
                    {isSubmitting ? 'Sending…' : <>Request a quote <ArrowRight /></>}
                  </button>
                </div>
              </form>
            )}
          </div>

          <aside className="space-y-8 lg:col-span-5">
            <Reveal className="rounded-2xl border border-gray-200 bg-gray-50 p-7">
              <p className="eyebrow mb-4">What happens next</p>
              <ol className="relative ml-3 space-y-6 border-l border-gray-300 pl-6">
                {nextSteps.map((s, i) => (
                  <li key={s.title} className="relative">
                    <span className="absolute -left-[31px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-gray-50 bg-gray-900 font-mono text-[9px] text-yellow-400">{i + 1}</span>
                    <h3 className="font-semibold text-gray-900">{s.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{s.detail}</p>
                    <p className="mt-1 font-mono text-[11px] text-gray-400">{s.time}</p>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={0.1} className="rounded-2xl border border-gray-200 p-7">
              <p className="eyebrow mb-4">Engagement models</p>
              <ul className="divide-y divide-gray-200">
                {engagementModels.map((m) => (
                  <li key={m.name} className="py-3 first:pt-0 last:pb-0">
                    <p className="font-semibold text-gray-900">{m.name}</p>
                    <p className="text-sm text-gray-600">{m.summary}</p>
                    <p className="mt-1 font-mono text-[11px] text-gray-400">Best for: {m.bestFor}</p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15} className="rounded-2xl bg-gray-950 p-7 text-white">
              <p className="eyebrow eyebrow-dark mb-4">Prefer to talk?</p>
              <ul className="space-y-3 text-sm">
                {offices.map((o) => (
                  <li key={o.city} className="flex justify-between gap-4">
                    <span className="text-gray-300">{o.city}</span>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-gray-500">{o.label}</span>
                  </li>
                ))}
              </ul>
              <Link href="/#contact" className="link-arrow mt-5 text-yellow-400">
                Contact details <ArrowRight />
              </Link>
            </Reveal>
          </aside>
        </div>
      </main>
      <Footer hideCta />
    </>
  );
}
