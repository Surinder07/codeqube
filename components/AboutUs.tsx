// components/AboutUs.tsx

import { motion } from "framer-motion";

export default function AboutUs() {
    return (
        <section className="relative py-20 bg-slate-900 text-slate-100">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        About <span className="text-sky-400">CodeQube</span>
                    </h2>
                    <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
                        We’re a product & engineering consultancy helping teams design, build,
                        and scale software faster with modern full-stack development, cloud, and DevOps practices.
                    </p>
                </div>

                {/* Content grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left side text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
                        <p className="text-slate-300 leading-relaxed mb-6">
                            CodeQube is made up of experienced engineers, designers, and cloud architects
                            who have shipped products for startups and enterprises worldwide.
                            We combine strong technical expertise with an agile, outcome-driven approach.
                        </p>

                        <h3 className="text-2xl font-semibold mb-4">What We Do</h3>
                        <ul className="space-y-3 text-slate-300 list-disc list-inside">
                            <li>End-to-end product engineering</li>
                            <li>Cloud & DevOps consulting (AWS, GCP, Azure)</li>
                            <li>API & microservices architecture</li>
                            <li>UI/UX design and full-stack development</li>
                        </ul>
                    </motion.div>

                    {/* Right side image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <img
                            src="/team-collab.svg" // replace with your image in /public
                            alt="CodeQube Team"
                            className="rounded-2xl shadow-lg w-full max-w-md"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
