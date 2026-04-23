import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "GameHub: The Ultimate Livestreaming Platform",
      description: "This Twitch clone built with Next.js, Prisma, Tailwind, PostgreSQL, and TypeScript offers RTMP/WHIP streaming, real-time chat, viewer count, streamer dashboard, chat controls, and advanced search with SSR for speed.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBor-N2hG7vVnMjXKHJplOifX9y5u1fWOzbuH1k62ei_n8rPRQhB9cyEoa79YPNPpW7IF07frEeaWYu54Pg7MxHMlQSbn-inaFZ9hQB2XNjRzJX2cB0sttPoAQ7CfIkUjlgFM5HMby-89XKzpXMLHFxAO62VUTfpv4aE1ndzKJJTlWSYBzAkxG0NtrkC4ZqfekK8n1fMtLbVd27PBDowQSkzw47cS-rPNQs4xnbE-LHxEyw-UlAOjZmJBjLzyj2-yRxBgVYCPjIgPA",
      alt: "A dark-themed professional video game streaming platform interface",
      tags: ["TypeScript", "Next.js", "Node.js", "Socket.IO", "PostgreSQL"],
    },
    {
      title: "Google Docs 2.0: Next-Gen Real-Time Collaboration",
      description: "Google Docs Clone is a full-stack app built with Next.js 15, Shadcn UI, and Tailwind CSS, offering real-time editing, collaboration, comments, mentions, notifications, customizable templates, secure auth, and export options.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQ-7oLWMvnuBkmFl2FJjPHjGSA1oXoNjDY11ECNjizBAKCXVAHSB-yNtn6Ds-9rxU-FP7Dn6dgYJbKf9D-SEAcB846L8Roan9JzhhblQpA4JltJbO0cBvyy76YL-wOl5L-Mm4faEBqS2TF7KfYADQWOph76g8Jtx9Exh1nMk7w8rR3k3hgHl3pdL5brbKMhP-DoYIK-yuWTD0nKpxKST20Ho7alxYttR_-rZpmQ3fvlJeJwkX3ZooWUwNwe7zimQHSisDl58yIpiQ",
      alt: "A clean collaborative document editor interface",
      tags: ["TypeScript", "Next.js", "TipTap", "Firebase", "Shadcn"],
    },
    {
      title: "Google Drive Clone: The Ultimate Platform for File Sharing",
      description: "Google Drive Clone is a modern file storage platform built with Next.js, Shadcn UI, and TypeScript. It offers secure uploads, role-based permissions, file organization, real-time updates, and seamless syncing across devices.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVj8qIG3SJPP1Cov_wGp8mNxXyp-OwegqDmoqbJCnNDPiRxbkNALq0FTf_qKCzxX2XX74KF-GgTF6jlnJpImuoV6WEiU8DYdFp3EYB_EwPivD75pZ67Nvgb6yKaKmWH1qAN2glA1Tr9Ug_SH6OQ2kZGfSTgSLR4tgWxlx6rrmob5ymzbUpduRbKp3kCf7YgiCihsdZ8Ubchdgk0mIwINXLsqm7wi3vlGy1c2bWuIl0Hq1S4HHoSdSGXyKKhsgq5FtXnh8OMal_Ylk",
      alt: "A modern file explorer dashboard",
      tags: ["Next.js", "React", "Convex", "Clerk", "Tailwind"],
    },
  ];

  return (
    <section id="projects" className="max-w-[1280px] mx-auto px-8 py-[120px]">
      {/* Projects Header */}
      <header className="text-center mb-[120px]">
        <p className="font-label-caps text-[#FF7A59] mb-4 uppercase">Recent Projects</p>
        <h1 className="font-headline-xl text-black dark:text-white">Projects</h1>
      </header>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <article key={index} className="bg-gray-50 dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-lg overflow-hidden flex flex-col group hover:-translate-y-4 transition-transform duration-300">
            <div className="relative aspect-video overflow-hidden border-b border-gray-200 dark:border-[#2A2A2A]">
              <img 
                src={project.image} 
                alt={project.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-[#FF7A59]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <h2 className="font-headline-md text-black dark:text-white mb-4">{project.title}</h2>
              <p className="font-body-md text-gray-600 dark:text-gray-400 mb-8 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="bg-white dark:bg-[#0D0D0D] text-gray-600 dark:text-gray-400 text-[12px] font-semibold px-3 py-1 rounded border border-gray-200 dark:border-[#2A2A2A]">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <button className="flex-1 bg-[#FF7A59] text-white dark:text-[#0D0D0D] font-label-caps py-4 rounded hover:bg-[#ff8e73] dark:hover:bg-white transition-colors uppercase">
                  GitHub
                </button>
                <button className="flex-1 border border-[#FF7A59] text-[#FF7A59] font-label-caps py-4 rounded hover:bg-[#FF7A59] hover:text-white dark:hover:text-[#0D0D0D] transition-colors uppercase">
                  Live Demo
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
