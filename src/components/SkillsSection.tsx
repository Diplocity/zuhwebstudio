
const skillCategories = [
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "Vue.js", "Python", "REST APIs", "Responsive Design", "Bubble.io"]
  },
  {
    title: "Frontend",
    skills: ["UI/UX", "Flexbox", "Grid", "Animations", "Web Accessibility"]
  },
  {
    title: "Tools & Workflow",
    skills: ["GitHub", "Streamlit", "CI/CD", "MySQL", "Version Control"]
  },
  {
    title: "Data Integration",
    skills: ["API Integration", "Database Design", "Data Fetching", "State Management"]
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
            {title === "Frontend" && (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            )}
            {title === "Tools & Workflow" && (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            )}
            {title === "Data Integration" && (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
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
    <section id="skills" className="bg-background py-20">
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
