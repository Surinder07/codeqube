// components/Projects.tsx
"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform Transformation",
      industry: "Retail",
      description: "Modernized legacy e-commerce system with React frontend, Node.js backend, and AWS infrastructure. Resulted in 300% increase in conversion rates.",
      technologies: ["React", "Node.js", "AWS", "MongoDB"],
      image: "🛒",
      results: ["300% conversion increase", "50% faster load times", "99.9% uptime"]
    },
    {
      id: 2,
      title: "Fintech Risk Management System",
      industry: "Financial Services",
      description: "Built comprehensive risk assessment platform with real-time data processing, machine learning algorithms, and compliance reporting.",
      technologies: ["Python", "React", "PostgreSQL", "Docker"],
      image: "🏦",
      results: ["40% risk reduction", "Real-time processing", "Regulatory compliance"]
    },
    {
      id: 3,
      title: "Healthcare Telemedicine Platform",
      industry: "Healthcare",
      description: "HIPAA-compliant telemedicine solution with video conferencing, appointment scheduling, and electronic health records integration.",
      technologies: ["React Native", "Node.js", "WebRTC", "AWS"],
      image: "🏥",
      results: ["HIPAA compliant", "24/7 availability", "10k+ daily users"]
    },
    {
      id: 4,
      title: "Logistics Optimization Platform",
      industry: "Transportation",
      description: "AI-powered route optimization and fleet management system reducing delivery times and operational costs.",
      technologies: ["Python", "React", "PostgreSQL", "Machine Learning"],
      image: "🚚",
      results: ["25% cost reduction", "30% faster delivery", "Real-time tracking"]
    },
    {
      id: 5,
      title: "Manufacturing IoT Dashboard",
      industry: "Manufacturing",
      description: "Real-time monitoring and analytics platform for manufacturing processes with predictive maintenance capabilities.",
      technologies: ["React", "Python", "IoT", "Azure"],
      image: "🏭",
      results: ["20% efficiency gain", "Predictive maintenance", "Real-time analytics"]
    },
    {
      id: 6,
      title: "Educational Learning Management System",
      industry: "Education",
      description: "Comprehensive LMS with course management, student tracking, and analytics for educational institutions.",
      technologies: ["React", "Django", "PostgreSQL", "Redis"],
      image: "🎓",
      results: ["50k+ active users", "95% satisfaction rate", "Mobile-first design"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how we've helped businesses across industries achieve digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="text-4xl mb-4">{project.image}</div>
                <div className="mb-2">
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {project.industry}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Results:</h4>
                  <ul className="space-y-1">
                    {project.results.map((result, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industries We Serve */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h3>
            <p className="text-gray-600">
              From startups to Fortune 500 companies, we've delivered solutions across diverse sectors
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Financial Services", icon: "🏦", count: "50+" },
              { name: "Healthcare", icon: "🏥", count: "30+" },
              { name: "Retail & E-commerce", icon: "🛒", count: "40+" },
              { name: "Manufacturing", icon: "🏭", count: "25+" },
              { name: "Transportation", icon: "🚚", count: "20+" },
              { name: "Education", icon: "🎓", count: "35+" },
              { name: "Technology", icon: "💻", count: "60+" },
              { name: "Real Estate", icon: "🏢", count: "15+" }
            ].map((industry, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-colors border border-transparent hover:border-yellow-200">
                <div className="text-3xl mb-2">{industry.icon}</div>
                <div className="font-semibold text-gray-900 mb-1">{industry.name}</div>
                <div className="text-sm text-yellow-600">{industry.count} projects</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
