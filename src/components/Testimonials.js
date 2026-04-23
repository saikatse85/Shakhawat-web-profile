"use client";
import React, { useState } from "react";

const testimonialsData = [
    {
        id: 1,
        name: "Emily Johnson",
        role: "Product Manager at TechFlow",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBMmOv1oVwlhVtiQyRw7ERKM1EC-CUZgrHSUTFWy1-h_ybAUmJoFFTCYESFqF_VGuR5s_UZEiSicX5bfMwR2NpVEXjDzBs62Hrp4I7ymYLlXbsjvQLn7epx4Bxw59HC9YcmACY3XXvVG412_0kTFkXtCxHIF-MyCLWIME1QNKgNQaSxJ1ru6KFk1gK8Rk9IycMQVUvHq0XtGeXxAFtUj3QhC0ikk1zEqH4yjuYO2USYr-XbDUOG3TsnF_sVUljN2_nw3d4zALBFVjU",
        quote:
            "The technical precision and attention to detail were outstanding. Our platform performance improved by 40%.",
        short:
            "Exceeded expectations on every front. Clean and intuitive UI.",
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "CTO at NovaStack",
        image:
            "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=800",
        quote:
            "A highly skilled developer who delivered scalable and secure architecture for our SaaS product.",
        short:
            "Communication was smooth and delivery was always on time.",
    },
    {
        id: 3,
        name: "Sarah Williams",
        role: "Founder at BrightLabs",
        image:
            "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800",
        quote:
            "From UI design to backend optimization, everything was handled with professionalism.",
        short:
            "Highly recommended for any serious development work.",
    },
];

const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const current = testimonialsData[index];

    const prev = () => {
        setIndex((prev) =>
            prev === 0 ? testimonialsData.length - 1 : prev - 1
        );
    };

    const next = () => {
        setIndex((prev) =>
            prev === testimonialsData.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <section
            id="testimonials"
            className="max-w-[1280px] mx-auto px-8 pt-[180px] pb-[120px] bg-white dark:bg-transparent transition-colors"
        >
            {/* Header */}
            <header className="text-center mb-[120px]">
                <p className="font-label-caps text-[#FF7A59] mb-4 uppercase">
                    My Client Says
                </p>
                <h1 className="font-headline-xl text-black dark:text-white">
                    Testimonials
                </h1>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[24px] items-start">

                {/* Left Side */}
                <div className="lg:col-span-7 flex flex-col gap-10">

                    <div className="relative">
                        <span className="text-[#FF7A59] opacity-20 absolute -top-12 -left-8 text-[120px] font-black italic">
                            “
                        </span>

                        <h2 className="text-[48px] font-bold italic text-black dark:text-white leading-tight">
                            "{current.quote}"
                        </h2>
                    </div>

                    <p className="text-[18px] text-gray-600 dark:text-[#A1A1A1] max-w-2xl">
                        A truly world-class developer who understands both business and code.
                    </p>

                    {/* Controls */}
                    <div className="flex gap-4 mt-8">
                        <button
                            onClick={prev}
                            className="w-14 h-14 rounded-full border border-gray-300 dark:border-[#2A2A2A] flex items-center justify-center text-black dark:text-white hover:border-[#FF7A59] hover:text-[#FF7A59] transition-colors"
                        >
                            ←
                        </button>
                        <button
                            onClick={next}
                            className="w-14 h-14 rounded-full border border-gray-300 dark:border-[#2A2A2A] flex items-center justify-center text-black dark:text-white hover:border-[#FF7A59] hover:text-[#FF7A59] transition-colors"
                        >
                            →
                        </button>
                    </div>
                </div>

                {/* Right Side */}
                <div className="lg:col-span-5 flex flex-col items-center lg:items-end mt-12 lg:mt-0">

                    <div className="bg-gray-100 dark:bg-[#1A1A1A] p-8 w-full max-w-[400px] border border-gray-200 dark:border-[#2A2A2A] hover:-translate-y-2 transition-transform duration-500">

                        {/* Image */}
                        <div className="relative w-full aspect-square mb-8 overflow-hidden group">
                            <img
                                src={current.image}
                                alt={current.name}
                                className="w-full h-full object-cover grayscale brightness-90 dark:brightness-75 group-hover:grayscale-0 transition-all duration-700"
                            />

                            <div className="absolute bottom-0 right-0 bg-[#FF7A59] w-12 h-12 flex items-center justify-center text-black font-bold">
                                "
                            </div>
                        </div>

                        {/* Info */}
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-black dark:text-white text-[32px] font-bold leading-none">
                                    {current.name}
                                </h3>
                                <p className="text-[#FF7A59] text-sm mt-2 uppercase tracking-widest">
                                    {current.role}
                                </p>
                            </div>

                            <p className="text-gray-600 dark:text-[#A1A1A1] italic text-[16px] border-l-2 border-gray-300 dark:border-[#2A2A2A] pl-4">
                                {current.short}
                            </p>

                            {/* Rating */}
                            <div className="pt-4 border-t border-gray-200 dark:border-[#2A2A2A]">
                                <span className="text-xs text-gray-500 dark:text-[#666] tracking-widest">
                                    CLIENT RATING
                                </span>
                                <div className="flex gap-1 mt-2 text-[#FF7A59]">
                                    ★★★★★
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Indicators */}
                    <div className="flex gap-3 mt-10">
                        {testimonialsData.map((_, i) => (
                            <div
                                key={i}
                                className={`w-12 h-[2px] ${i === index
                                        ? "bg-[#FF7A59]"
                                        : "bg-gray-300 dark:bg-[#2A2A2A]"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;