"use client";
import { motion } from "framer-motion";

export default function Technologies() {
  const techs = [
    { name: "JavaScript", short: "JS", icon: null },
    { name: "TypeScript", short: "TS", icon: null },
    { name: "React", short: null, icon: "auto_awesome" },
    { name: "Next.js", short: "N", icon: null },
    { name: "MongoDB", short: null, icon: "database" },
    { name: "Docker", short: null, icon: "box" },
    { name: "Kubernetes", short: null, icon: "grid_view" },
    { name: "Tailwind CSS", short: null, icon: "style" },
    { name: "Git", short: null, icon: "commit" },
    { name: "AWS", short: null, icon: "cloud" },
  ];

  return (
    <>
      {/* Technologies Section */}
      <section className="max-w-[1280px] mx-auto px-8 pb-32" id="tech-stack">
        <div className="flex flex-col gap-4 mb-20">
          <h2 className="font-headline-lg text-headline-lg text-black dark:text-white">Technologies</h2>
          <div className="h-1 w-24 bg-primary"></div>
          <p className="font-body-lg text-gray-600 dark:text-neutral-400">My Tech Stack</p>
        </div>

        {/* Bento Grid for Tech Stack */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-12">
          {techs.map((tech, i) => (
            <div key={i} className="flex flex-col items-center gap-6 group cursor-pointer">
              <div className="relative w-24 h-24 rounded-full bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:-translate-y-2 shadow-sm dark:shadow-none">
                {tech.icon ? (
                  <span className="material-symbols-outlined text-4xl text-black dark:text-white group-hover:text-primary transition-colors">
                    {tech.icon}
                  </span>
                ) : (
                  <span className={`${tech.name === 'Next.js' ? 'text-3xl' : 'text-2xl'} font-black text-black dark:text-white group-hover:text-primary transition-colors`}>
                    {tech.short}
                  </span>
                )}
                <div className="absolute inset-0 rounded-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <span className="font-label-caps text-[12px] text-gray-500 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-white transition-colors uppercase tracking-widest text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Ticker */}

      <div className="w-full bg-gray-100/50 dark:bg-neutral-900/50 border-y border-gray-200 dark:border-neutral-800 py-12 overflow-hidden mb-[120px]">
        <motion.div
          className="flex whitespace-nowrap gap-20"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex whitespace-nowrap gap-20">
              <span className="font-headline-md text-headline-md text-gray-400 dark:text-neutral-700 uppercase opacity-50">
                Scalable Systems
              </span>
              <span className="font-headline-md text-headline-md text-primary uppercase">
                Cloud Architecture
              </span>
              <span className="font-headline-md text-headline-md text-gray-400 dark:text-neutral-700 uppercase opacity-50">
                Full-Stack Development
              </span>
              <span className="font-headline-md text-headline-md text-primary uppercase">
                Modern UI/UX
              </span>
              <span className="font-headline-md text-headline-md text-gray-400 dark:text-neutral-700 uppercase opacity-50">
                Clean Code Architecture
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
