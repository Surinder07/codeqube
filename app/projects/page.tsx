import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageHero from '../../components/PageHero';
import CTASection from '../../components/CTASection';
import ProjectsExplorer from '../../components/ProjectsExplorer';
import Counter from '../../components/ui/Counter';
import { projects } from '../../lib/data/projects';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Detailed engineering case studies from CodeQube: architecture, stack, challenges, security, scalability and measured business impact.',
};

export default function ProjectsPage() {
  const totals = [
    { value: projects.length, suffix: '', label: 'Published case studies' },
    { value: 500, suffix: '+', label: 'Projects delivered' },
    { value: 8, suffix: '', label: 'Industries' },
    { value: 100, suffix: '%', label: 'Under NDA — anonymised' },
  ];

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Case studies"
          title={
            <>
              Real systems, <span className="text-yellow-500">documented properly</span>.
            </>
          }
          description="Each case study covers the business problem, architecture, stack, the challenges we hit, how we handled security and scale, and what it delivered. Client names are withheld under NDA; the engineering is not."
          crumbs={[{ href: '/projects', label: 'Case Studies' }]}
          aside={
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-gray-200 bg-gray-200">
              {totals.map((t) => (
                <div key={t.label} className="bg-white p-5">
                  <dt className="text-3xl font-bold tracking-tight text-gray-900">
                    <Counter value={t.value} suffix={t.suffix} />
                  </dt>
                  <dd className="mt-1 text-xs text-gray-500">{t.label}</dd>
                </div>
              ))}
            </dl>
          }
        />

        <section className="section bg-white">
          <div className="container-x">
            <ProjectsExplorer />
          </div>
        </section>

        <CTASection
          variant="dark"
          title="Want to see work in your industry?"
          description="We have delivered many more programmes than we can publish. Ask for a reference conversation with a comparable client."
          primary={{ href: '/#contact', label: 'Request references' }}
          secondary={{ href: '/quote', label: 'Scope a project' }}
        />
      </main>
      <Footer />
    </>
  );
}
