"use client";

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setMounted(true);

    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinkClass = (sectionId) => {
    const base = "font-inter tracking-tight font-bold uppercase transition-all duration-200 hover:-translate-y-1";
    if (activeSection === sectionId) {
      return `${base} text-orange-500 border-b-2 border-orange-500 pb-1`;
    }
    return `${base} text-black dark:text-white hover:text-orange-500`;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white dark:bg-neutral-950 border-b border-gray-200 dark:border-neutral-800">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center px-8 h-20">
        <div className="text-2xl font-black text-black dark:text-white tracking-tighter uppercase font-inter">
          <img src="/logo.png" alt="Logo" height={100} width={100} />
        </div>
        <div className="hidden md:flex items-center space-x-10">
          <Link
            className={navLinkClass('home')}
            href="#home"
          >
            Home
          </Link>
          <Link
            className={navLinkClass('about')}
            href="#about"
          >
            About
          </Link>
          <Link
            className={navLinkClass('tech-stack')}
            href="#tech-stack"
          >
            Technologies
          </Link>
          <Link
            className={navLinkClass('skills')}
            href="#skills"
          >
            Skills
          </Link>
          <Link
            className={navLinkClass('services')}
            href="#services"
          >
            Services
          </Link>
          <Link
            className={navLinkClass('projects')}
            href="#projects"
          >
            Projects
          </Link>
          <Link
            className={navLinkClass('testimonials')}
            href="#testimonials"
          >
            Testimonials
          </Link>
          <Link
            className={navLinkClass('contact')}
            href="#contact"
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-black dark:text-white hover:text-orange-500 transition-colors duration-200 focus:scale-95"
            aria-label="Toggle Dark Mode"
          >
            <span className={`material-symbols-outlined ${!mounted ? 'invisible' : ''}`} suppressHydrationWarning>
              {mounted && theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
