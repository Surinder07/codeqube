// components/Projects.tsx
"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Streaming App",
    description:
      "We built a scalable OTT platform with real-time video streaming, subscription management, and multi-device support.",
    image: "/projects/streaming.svg", // place in /public/projects/
    tech: ["React Native", "Node.js", "AWS Media Services"],
  },
  {
    title: "Banking Platform",
    description:
      "Delivered a secure digital banking solution with payments, KYC, fraud detection, and real-time dashboards.",
    image: "/projects/banking.svg",
    tech: ["Java Spring Boot", "PostgreSQL", "GCP"],
  },
  {
    title: "Logistics Management",
    description:
      "Optimized supply chain operations with live shipment tracking, driver apps, and analytics dashboards.",
    image: "/projects/logistics.svg",
    tech: ["Next.js", "NestJS", "Kafka", "AWS"],
  },
  {
    title: "Food Delivery App",
    description:
      "Created a complete food ordering platform with customer apps, restaurant dashboards, and delivery tracking.",
    image: "/projects/food.svg",
    tech: ["Flutter", "Node.js", "MongoDB", "Firebase"],
  },
];

export default function Projects() {
  return (
    <section className="relative py-20 bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Our <span className="text-sky-600">Projects</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            From startups to enterprises, we’ve helped companies launch
            world-class products across industries.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-6 w-full h-48 object-contain"
              />
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-slate-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-sm bg-sky-100 text-sky-700 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
