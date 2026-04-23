export default function About() {
  return (
    <section id="about" className="max-w-[1280px] mx-auto px-8 mb-[120px]">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="font-headline-lg text-black dark:text-white mb-2">About</h2>
        <p className="font-label-caps text-gray-500 uppercase tracking-widest">My Introduction</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left: Profile Image */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <div className="relative group">
            <div className="absolute inset-0 bg-[#FF7A59] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
            <img
              alt="Developer Profile"
              className="relative z-10 w-full max-w-[400px] rounded-2xl border border-gray-200 dark:border-[#2A2A2A] grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRfa2cahj6bQNAr4dqJAM5Y2jVk632pGxgTzxJsmtdwnrt1-FdQEoI0ExY4yuolAcQ-yOY7CsCvurMmIkgo4qu72ZWmRNcjOp3kUu_VvRkHOrZ-g2AQDso_T_EI0Qr4BZVOdO9b4I72U-0xxG7vXWD6TuWQiaJNAleiZS5JnewZjiiey1PQORZjXKXSWtlZ-mdvzZNlgu4rP8wDx9jFZIRDs5M2AoHclKRJJ11IgdDgM0JQOBb0LYgvszNGkIKBExveU5AMC9P8Xk"
            />
          </div>
        </div>
        {/* Right: Content */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Experience Card */}
            <div className="bg-gray-50 dark:bg-[#1A1A1A] p-6 rounded-xl border border-gray-200 dark:border-[#2A2A2A] flex flex-col items-center text-center hover:translate-y-[-4px] transition-transform duration-200 cursor-default">
              <span className="material-symbols-outlined text-[#FF7A59] mb-4 text-3xl">workspace_premium</span>
              <h3 className="font-headline-md text-sm text-black dark:text-white mb-1">Experience</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">3 Years Working</p>
            </div>
            {/* Completed Card */}
            <div className="bg-gray-50 dark:bg-[#1A1A1A] p-6 rounded-xl border border-gray-200 dark:border-[#2A2A2A] flex flex-col items-center text-center hover:translate-y-[-4px] transition-transform duration-200 cursor-default">
              <span className="material-symbols-outlined text-[#FF7A59] mb-4 text-3xl">business_center</span>
              <h3 className="font-headline-md text-sm text-black dark:text-white mb-1">Completed</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">150+ Projects</p>
            </div>
            {/* Support Card */}
            <div className="bg-gray-50 dark:bg-[#1A1A1A] p-6 rounded-xl border border-gray-200 dark:border-[#2A2A2A] flex flex-col items-center text-center hover:translate-y-[-4px] transition-transform duration-200 cursor-default">
              <span className="material-symbols-outlined text-[#FF7A59] mb-4 text-3xl">headset_mic</span>
              <h3 className="font-headline-md text-sm text-black dark:text-white mb-1">Support</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Online 24/7</p>
            </div>
          </div>
          {/* Bio Paragraph */}
          <div className="space-y-6">
            <p className="font-body-lg text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed">
              Proficient in React.js, Next.js, Redux, Node.js, and Docker, with a strong emphasis on building scalable, efficient, and user-centric web applications. My approach combines technical precision with creative problem-solving to deliver high-end digital experiences.
            </p>
            <p className="font-body-md text-gray-600 dark:text-gray-400 max-w-2xl">
              I specialize in architecting robust frontend systems and seamless backend integrations. Constantly pushing the boundaries of what's possible on the web while maintaining a clean, minimalist design aesthetic that prioritizes clarity and performance.
            </p>
          </div>
          {/* CTA Button */}
          <div className="pt-4">
            <button className="bg-[#FF7A59] text-white dark:text-[#0D0D0D] px-8 py-4 rounded-xl font-label-caps uppercase flex items-center gap-3 hover:bg-[#ff8e73] active:scale-95 transition-all duration-200 group">
              <span>Download Resume</span>
              <span className="material-symbols-outlined text-xl group-hover:translate-y-1 transition-transform">description</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
