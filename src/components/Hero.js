"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const imageRef = useRef(null);

  // GSAP animation for image (floating + subtle parallax feel)
  useEffect(() => {
    gsap.to(imageRef.current, {
      y: 15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section
      id="home"
      className="max-w-[1280px] mx-auto px-8 pt-24 md:pt-32 pb-24 grid grid-cols-1 md:grid-cols-12 gap-gutter items-center min-h-[calc(100vh-80px)]"
    >
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:col-span-7 flex flex-col items-start"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-headline-xl text-headline-xl text-black dark:text-white inline-flex items-end mb-4"
        >
          Hello<span className="text-primary-container">.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-12 h-[1px] bg-primary-container"></div>
          <span className="font-label-caps text-label-caps text-gray-700 dark:text-on-surface tracking-widest uppercase">
            I'm Shakhawat
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="font-headline-xl text-headline-xl text-black dark:text-white mb-10 leading-none"
        >
          Web <br /> Developer
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-stack-sm"
        >
          <button className="bg-primary-container text-white px-8 py-4 uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">
            Got a project?
          </button>
          <button className="border border-black dark:border-white px-8 py-4 uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
            My resume
          </button>
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:col-span-5 relative mt-16 md:mt-0 flex justify-center"
      >
        {/* Animated Glow Rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute w-[400px] h-[400px] rounded-full border border-primary-container/20"
        />

        {/* Image Container */}
        <div
          ref={imageRef}
          className="relative w-full max-w-[420px] aspect-[4/5] overflow-hidden rounded-xl border border-gray-200 dark:border-neutral-800 shadow-2xl"
        >
          <Image
            src="/saikat.png" // your image
            alt="Profile"
            fill
            className="object-cover brightness-95 contrast-110"
            priority
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>

        {/* Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute -bottom-6 -right-6 bg-white dark:bg-neutral-900 p-4 border border-gray-200 dark:border-neutral-800 shadow-lg"
        >
          <span className="text-xs text-primary-container uppercase">
            Full Stack
          </span>
          <p className="text-sm font-bold text-black dark:text-white">
            Developer
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}