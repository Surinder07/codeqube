'use client';

import { useState } from 'react';
import { ArrowRight, Check } from './ui/Icons';

type Props = { jobTitle?: string; compact?: boolean };

export default function ApplyForm({ jobTitle, compact = false }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulated submission — connect to your ATS / form endpoint.
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setDone(true);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-black">
          <Check className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-2xl font-bold text-gray-900">Application received</h3>
        <p className="mt-2 max-w-sm text-gray-600">
          Thanks for applying{jobTitle ? ` for ${jobTitle}` : ''}. A member of our engineering team reviews every application
          and we reply to everyone within five business days.
        </p>
      </div>
    );
  }

  return (
    <form id="apply" onSubmit={onSubmit} className="scroll-mt-24 space-y-5 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
      {!compact && (
        <div className="mb-2">
          <p className="eyebrow mb-2">Apply now</p>
          <h3 className="text-2xl font-bold text-gray-900">{jobTitle ? `Apply for ${jobTitle}` : 'General application'}</h3>
          <p className="mt-2 text-sm text-gray-600">
            No cover letter required. Tell us what you have built and link to it if you can.
          </p>
        </div>
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="ap-name" className="label">Full name</label>
          <input id="ap-name" name="name" required className="input" placeholder="Priya Sharma" autoComplete="name" />
        </div>
        <div>
          <label htmlFor="ap-email" className="label">Email</label>
          <input id="ap-email" name="email" type="email" required className="input" placeholder="priya@example.com" autoComplete="email" />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="ap-location" className="label">Location</label>
          <input id="ap-location" name="location" className="input" placeholder="Toronto, ON" autoComplete="address-level2" />
        </div>
        <div>
          <label htmlFor="ap-link" className="label">GitHub / portfolio / LinkedIn</label>
          <input id="ap-link" name="link" type="url" className="input" placeholder="https://" />
        </div>
      </div>
      {!jobTitle && (
        <div>
          <label htmlFor="ap-role" className="label">Role of interest</label>
          <input id="ap-role" name="role" className="input" placeholder="e.g. Backend engineering, data platform, SRE" />
        </div>
      )}
      <div>
        <label htmlFor="ap-resume" className="label">Résumé / CV</label>
        <label
          htmlFor="ap-resume"
          className="flex cursor-pointer items-center justify-between rounded-md border border-dashed border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-600 transition-colors hover:border-yellow-400 hover:bg-yellow-50"
        >
          <span>{fileName ?? 'PDF or DOCX, up to 5 MB'}</span>
          <span className="font-semibold text-gray-900">Browse</span>
        </label>
        <input
          id="ap-resume"
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          className="sr-only"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
        />
      </div>
      <div>
        <label htmlFor="ap-message" className="label">Anything you want us to know</label>
        <textarea id="ap-message" name="message" rows={4} className="input" placeholder="A project you're proud of, a system you'd redesign, or why this role." />
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-gray-500">By applying you agree to our handling of your data for recruitment purposes only.</p>
        <button type="submit" disabled={submitting} className="btn-primary disabled:cursor-not-allowed disabled:opacity-60">
          {submitting ? 'Submitting…' : 'Submit application'} <ArrowRight />
        </button>
      </div>
    </form>
  );
}
