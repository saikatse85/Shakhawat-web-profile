export default function Skills() {
  const frontendSkills = [
    { name: "HTML5", level: "Expert" },
    { name: "Next.JS", level: "Expert" },
    { name: "TypeScript", level: "Expert" },
    { name: "Tailwind CSS", level: "Intermediate" },
    { name: "JavaScript", level: "Expert" },
    { name: "React.JS", level: "Expert" },
  ];

  const backendSkills = [
    { name: "NodeJS", level: "Expert" },
    { name: "SQL", level: "Intermediate" },
    { name: "Express.JS", level: "Expert" },
    { name: "Docker", level: "Intermediate" },
    { name: "MongoDB", level: "Expert" },
    { name: "Kubernetes", level: "Intermediate" },
  ];

  return (
    <section id="skills" className="max-w-[1280px] mx-auto px-8 py-20 flex flex-col items-center text-center">
      <div className="mb-16">
        <h1 className="font-headline-lg text-black dark:text-white mb-2">Skills</h1>
        <p className="font-body-md text-gray-500 uppercase tracking-widest">My Technical Level</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
        {/* Frontend Developer Card */}
        <div className="bg-gray-50 dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl p-10 hover:translate-y-[-4px] transition-transform duration-300">
          <h3 className="font-headline-md text-black dark:text-white mb-10">Frontend Developer</h3>
          <div className="grid grid-cols-2 gap-y-8 gap-x-4 text-left">
            {frontendSkills.map((skill, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#FF7A59] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <div>
                  <p className="font-bold text-black dark:text-white leading-none mb-1">{skill.name}</p>
                  <p className="text-xs text-gray-500 font-medium">{skill.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Developer Card */}
        <div className="bg-gray-50 dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl p-10 hover:translate-y-[-4px] transition-transform duration-300">
          <h3 className="font-headline-md text-black dark:text-white mb-10">Backend Developer</h3>
          <div className="grid grid-cols-2 gap-y-8 gap-x-4 text-left">
            {backendSkills.map((skill, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#FF7A59] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <div>
                  <p className="font-bold text-black dark:text-white leading-none mb-1">{skill.name}</p>
                  <p className="text-xs text-gray-500 font-medium">{skill.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
