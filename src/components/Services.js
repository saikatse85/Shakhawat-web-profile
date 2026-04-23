"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Services() {
  const [selected, setSelected] = useState(null);

  const services = [
    {
      icon: "dashboard",
      title: "Frontend Development",
      description:
        "Crafting immersive user interfaces with precision using modern frameworks like React and Vue, focusing on performance and responsiveness.",
      details:
        "I build pixel-perfect, responsive UIs using React, Next.js, and Tailwind. Focused on performance, accessibility, and modern UX.",
    },
    {
      icon: "code",
      title: "Backend Development",
      description:
        "Building robust server-side architectures and scalable database schemas that power high-traffic applications with zero downtime.",
      details:
        "Experience with Node.js, Express, NestJS, MongoDB, PostgreSQL. I design secure and scalable backend systems.",
    },
    {
      icon: "edit",
      title: "Full Stack Development",
      description:
        "End-to-end engineering from concept to deployment. Seamless integration of UI/UX with complex backend logic and cloud infrastructure.",
      details:
        "From frontend to backend to deployment (Vercel, AWS, Docker), I handle the full development lifecycle.",
    },
    {
      icon: "grid_view",
      title: "Mobile Hybrid App Development",
      description:
        "Developing cross-platform mobile solutions that offer native-like performance using React Native or Flutter for iOS and Android.",
      details:
        "Building cross-platform apps using React Native and Flutter with optimized performance and clean UI.",
    },
    {
      icon: "present_to_all",
      title: "Prototype Development",
      description:
        "Rapidly turning ideas into interactive prototypes to validate user flows, test concepts, and secure stakeholder alignment.",
      details:
        "Quick prototyping using Figma and code to validate product ideas and user experience efficiently.",
    },
    {
      icon: "database",
      title: "API Development",
      description:
        "Designing secure, RESTful and GraphQL APIs that serve as the backbone for complex ecosystems and third-party integrations.",
      details:
        "Designing scalable REST & GraphQL APIs with authentication, rate limiting, and best practices.",
    },
  ];

  return (
    <>
      <section id="services" className="max-w-[1280px] mx-auto px-8 py-[120px]">
        <div className="text-center mb-20">
          <span className="font-label-caps text-label-caps text-[#FF7A59] block mb-4 uppercase tracking-[0.2em]">
            What I offer
          </span>
          <h2 className="font-headline-xl text-headline-xl text-black dark:text-white">
            Services
          </h2>
          <div className="w-12 h-1 bg-[#FF7A59] mx-auto mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] p-10 hover:translate-y-[-4px] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF7A59]/5 blur-[60px] group-hover:bg-[#FF7A59]/10 transition-colors"></div>

              <div className="mb-8">
                <span className="material-symbols-outlined text-[#FF7A59] text-4xl">
                  {service.icon}
                </span>
              </div>

              <h3 className="font-headline-md text-headline-md text-black dark:text-white mb-6 leading-tight">
                {service.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 font-body-md mb-8 opacity-80">
                {service.description}
              </p>

              {/* ONLY changed to button for modal */}
              <button
                onClick={() => setSelected(service)}
                className="inline-flex items-center gap-2 text-black dark:text-white font-label-caps text-label-caps group-hover:text-[#FF7A59] transition-colors"
              >
                VIEW MORE
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Glassmorphism Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.85, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-xl w-full mx-4 p-8 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#FF7A59]">
                {selected.title}
              </h3>

              <p className="text-gray-200 mb-6">
                {selected.details || selected.description}
              </p>

              <button
                onClick={() => setSelected(null)}
                className="px-6 py-2 bg-[#FF7A59] text-black rounded-lg"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}