"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <motion.section
            id="contact"
            animate={{
                boxShadow: [
                    "0px 0px 0px rgba(255,122,89,0)",
                    "0px 0px 40px rgba(255,122,89,0.2)",
                    "0px 0px 0px rgba(255,122,89,0)",
                ],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
            }}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="pt-32 pb-[120px] bg-white dark:bg-surface text-black dark:text-on-surface transition-colors"
        >
            <div className="max-w-[1280px] mx-auto px-8">

                {/* Title */}
                <div className="mb-20">
                    <h1 className="font-headline-xl text-headline-xl text-black dark:text-white mb-4">
                        Get in touch.
                    </h1>
                    <div className="w-24 h-1 bg-primary-container"></div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

                    {/* LEFT: FORM */}
                    <section>
                        <form className="space-y-8">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                                <div className="flex flex-col gap-2">
                                    <label className="font-label-caps text-label-caps text-gray-600 dark:text-on-surface-variant uppercase">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Shakhawat Hossen"
                                        className="bg-gray-100 dark:bg-surface-container-low border border-gray-300 dark:border-outline-variant p-4 text-black dark:text-on-surface focus:outline-none focus:border-primary-container transition-colors placeholder:text-gray-500 dark:placeholder:text-neutral-600"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="font-label-caps text-label-caps text-gray-600 dark:text-on-surface-variant uppercase">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="saikatse@gmail.com"
                                        className="bg-gray-100 dark:bg-surface-container-low border border-gray-300 dark:border-outline-variant p-4 text-black dark:text-on-surface focus:outline-none focus:border-primary-container transition-colors placeholder:text-gray-500 dark:placeholder:text-neutral-600"
                                    />
                                </div>

                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="font-label-caps text-label-caps text-gray-600 dark:text-on-surface-variant uppercase">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    placeholder="+8801717-973719"
                                    className="bg-gray-100 dark:bg-surface-container-low border border-gray-300 dark:border-outline-variant p-4 text-black dark:text-on-surface focus:outline-none focus:border-primary-container transition-colors placeholder:text-gray-500 dark:placeholder:text-neutral-600"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="font-label-caps text-label-caps text-gray-600 dark:text-on-surface-variant uppercase">
                                    Message
                                </label>
                                <textarea
                                    rows="6"
                                    placeholder="Tell us about your project..."
                                    className="bg-gray-100 dark:bg-surface-container-low border border-gray-300 dark:border-outline-variant p-4 text-black dark:text-on-surface focus:outline-none focus:border-primary-container transition-colors resize-none placeholder:text-gray-500 dark:placeholder:text-neutral-600"
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-primary-container text-black dark:text-background py-5 px-12 font-black uppercase tracking-widest hover:bg-[#ff8c70] transition-all active:scale-95 w-full md:w-auto rounded-full"
                            >
                                Send Message
                            </button>
                        </form>
                    </section>

                    {/* RIGHT: INFO */}
                    <section className="space-y-16">

                        <div className="grid grid-cols-1 gap-12">

                            {/* Location */}
                            <div className="flex gap-6 group">
                                <div className="w-12 h-12 flex items-center justify-center border border-gray-300 dark:border-outline-variant group-hover:border-primary-container transition-colors">
                                    <span className="material-symbols-outlined text-primary-container">
                                        location_on
                                    </span>
                                </div>
                                <div>
                                    <h3 className="font-label-caps text-label-caps text-gray-500 dark:text-on-surface-variant uppercase mb-2">
                                        Location
                                    </h3>
                                    <p className="font-body-lg text-black dark:text-white max-w-xs">
                                        Mahigonj, Rangpur Bangladesh
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex gap-6 group">
                                <div className="w-12 h-12 flex items-center justify-center border border-gray-300 dark:border-outline-variant group-hover:border-primary-container transition-colors">
                                    <span className="material-symbols-outlined text-primary-container">
                                        mail
                                    </span>
                                </div>
                                <div>
                                    <h3 className="font-label-caps text-label-caps text-gray-500 dark:text-on-surface-variant uppercase mb-2">
                                        Email Address
                                    </h3>
                                    <p className="font-body-lg text-black dark:text-white">
                                        saikatse@gmail.com
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex gap-6 group">
                                <div className="w-12 h-12 flex items-center justify-center border border-gray-300 dark:border-outline-variant group-hover:border-primary-container transition-colors">
                                    <span className="material-symbols-outlined text-primary-container">
                                        call
                                    </span>
                                </div>
                                <div>
                                    <h3 className="font-label-caps text-label-caps text-gray-500 dark:text-on-surface-variant uppercase mb-2">
                                        Phone
                                    </h3>
                                    <p className="font-body-lg text-black dark:text-white">
                                        +8801717-973719
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social */}
                        <div>
                            <h3 className="font-label-caps text-label-caps text-gray-500 dark:text-on-surface-variant uppercase mb-8">
                                Follow Us
                            </h3>
                            <div className="flex gap-4">
                                {["camera", "social_leaderboard", "close", "smart_display"].map(
                                    (icon, i) => (
                                        <a
                                            key={i}
                                            href="#"
                                            className="w-14 h-14 flex items-center justify-center bg-gray-200 dark:bg-surface-container-high hover:bg-primary-container hover:text-black dark:hover:text-background transition-all"
                                        >
                                            <span className="material-symbols-outlined">
                                                {icon}
                                            </span>
                                        </a>
                                    )
                                )}
                            </div>
                        </div>

                        {/* Quote */}
                        <div className="pt-12 relative overflow-hidden">
                            <div className="absolute inset-0 bg-primary-container opacity-5 blur-3xl rounded-full -right-1/2 -bottom-1/2"></div>
                            <div className="border-l-4 border-primary-container pl-8 py-4">
                                <p className="font-body-lg italic text-gray-500 dark:text-neutral-400">
                                    “Web development starts when you carefully write your first two lines of code. That’s where it begins.”
                                </p>
                                <span className="block mt-4 font-label-caps text-label-caps text-black dark:text-white">
                                    — Shakhawat Hossen Saikat
                                </span>
                            </div>
                        </div>

                    </section>
                </div>
            </div>
        </motion.section>
    );
}