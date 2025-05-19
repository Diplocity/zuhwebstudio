
const skillCategories = [
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "Vue.js", "Python", "REST APIs", "Bubble.io"]
  },
  {
    title: "Tools",
    skills: ["GitHub", "Streamlit", "CI/CD", "MySQL"]
  },
  {
    title: "Data Analytics",
    skills: ["Tableau", "MySQL", "Pandas"]
  },
  {
    title: "Cybersecurity",
    skills: ["Penetration Testing", "Kali Linux", "Metasploit"]
  }
];

const SkillCard = ({ title, skills }: { title: string, skills: string[] }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg">
      <div className="mb-4 flex justify-center">
        <div className="h-12 w-12 rounded-full bg-blue/10 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {title === "Web Development" && (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            )}
            {title === "Tools" && (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            )}
            {title === "Data Analytics" && (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            )}
            {title === "Cybersecurity" && (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            )}
          </svg>
        </div>
      </div>
      <h3 className="text-lg font-bold text-center mb-4">{title}</h3>
      <div className="flex flex-wrap justify-center gap-2">
        {skills.map((skill, i) => (
          <span key={i} className="bg-blue-light/10 text-blue text-sm px-3 py-1 rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-gray-50 py-20">
      <div className="container-custom">
        <h3 className="section-subtitle">MY EXPERTISE</h3>
        <h2 className="section-title mb-12">SKILLS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={index} 
              title={category.title} 
              skills={category.skills} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
