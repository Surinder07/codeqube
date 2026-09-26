// components/Projects.tsx
'use client';

import Link from 'next/link';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import ProjectCard from './ProjectCard';
import { ArrowRight } from './ui/Icons';
import { featuredProjects, type Project } from '../lib/data/projects';

type Props = { items?: Project[]; heading?: boolean };

export default function Projects({ items = featuredProjects, heading = true }: Props) {
  return (
    <section id="projects" className="section bg-gray-950 text-white">
      <div className="container-x">
        {heading && (
          <SectionHeading
            dark
            eyebrow="Case studies"
            title="Engineering work, documented like engineering work."
            description="Architecture, trade-offs, what went wrong and what it delivered. No glossy summaries."
            actions={
              <Link href="/projects" className="link-arrow !text-white hover:!text-yellow-400">
                All case studies <ArrowRight />
              </Link>
            }
          />
        )}

        <div className="mt-16 space-y-6">
          {items.map((p, i) => (
            <Reveal key={p.slug} delay={0.05 * i}>
              <ProjectCard project={p} index={i} dark />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
