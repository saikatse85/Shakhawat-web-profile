"use client";

import React from "react";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-surface text-black dark:text-on-surface transition-colors relative overflow-hidden border-t border-neutral-800 dark:border-[#2A2A2A]">

            {/* background glow */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-[#FF7A59] blur-[120px]" />
                <div className="absolute top-1/2 -right-48 w-[600px] h-[600px] rounded-full bg-[#FF7A59] blur-[150px]" />
                <div className="absolute -bottom-48 left-1/2 w-[400px] h-[400px] rounded-full bg-teal-400 blur-[100px]" />
            </div>

            <div className="max-w-[1280px] mx-auto px-8 py-24 flex flex-col gap-16 relative z-10">

                {/* top section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">

                    {/* left */}
                    <div className="flex flex-col gap-8">
                        <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-on-surface transition-colors leading-tight">
                            Let’s build fast, modern & scalable web experiences together.
                        </h2>

                        <a
                            href="#contact"
                            className="group flex items-center gap-4 text-[#FF7A59] font-bold uppercase tracking-widest text-sm"
                        >
                            Contact Developer
                            <span className="transition-transform group-hover:translate-x-2">
                                ➜
                            </span>
                        </a>
                    </div>

                    {/* right */}
                    <div className="flex flex-col gap-12">

                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-3">
                                <span className="text-white text-2xl">💻</span>
                                <span className="text-2xl font-black text-black dark:text-on-surface transition-colors tracking-tighter">
                                    Web Developer
                                </span>
                            </div>

                            <p className="text-gray-400 max-w-sm">
                                I design and develop responsive, performant, and scalable web applications using modern technologies like Next.js, React, and Tailwind CSS.
                            </p>
                        </div>

                        {/* tags */}
                        <div className="flex flex-wrap gap-4">
                            <a className="bg-[#FF7A59] text-black px-5 py-2 rounded-full font-bold uppercase text-xs">
                                Frontend Development
                            </a>
                            <a className="text-gray-400 hover:text-[#FF7A59] uppercase text-xs font-bold transition">
                                UI/UX Design
                            </a>
                            <a className="text-gray-400 hover:text-[#FF7A59] uppercase text-xs font-bold transition">
                                Backend Integration
                            </a>
                        </div>

                        {/* social */}
                        <div className="flex gap-4">
                            <a className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-800 dark:bg-[#1A1A1A] text-white hover:text-[#FF7A59]">
                                💼
                            </a>
                            <a className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FF7A59] text-black">
                                🔗
                            </a>
                            <a className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-800 dark:bg-[#1A1A1A] text-white hover:text-[#FF7A59]">
                                📸
                            </a>
                        </div>
                    </div>
                </div>

                {/* bottom bar */}
                <div className="pt-10 border-t border-neutral-800 dark:border-[#2A2A2A] flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className="flex gap-6 text-xs uppercase font-bold text-gray-400">
                        <a href="#" className="hover:text-[#FF7A59]">Terms</a>
                        <a href="#" className="hover:text-[#FF7A59]">Privacy</a>
                        <a href="#contact" className="hover:text-[#FF7A59]">Contact</a>
                    </div>

                    <div className="text-xs uppercase font-bold text-gray-500">
                        © {new Date().getFullYear()} Web Developer Portfolio. Built with Next.js & Tailwind CSS.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;