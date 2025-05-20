
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const projects = [
  {
    title: "CraftDigits Demo",
    description: "Responsive business website demo showcasing modern web design principles and UX practices.",
    link: "http://demo.craftdigits.com/",
    tags: ["HTML", "CSS", "Responsive Design"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Movie Explorer",
    description: "Streamlit app with movie search and recommendation features. Find movies based on preferences and get personalized suggestions.",
    link: "https://movieexplorer.streamlit.app/",
    tags: ["Python", "Streamlit", "Data Analysis"],
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Hotel Booking App",
    description: "A user-friendly hotel booking demo with intuitive interface and booking management system.",
    link: "https://hotelproject1.iceiy.com/?i=1",
    tags: ["Bubble.io", "UI/UX", "Web App"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container-custom">
        <h3 className="section-subtitle">MY WORK</h3>
        <h2 className="section-title mb-12">PORTFOLIO</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden animate-fade-in-up group hover:shadow-xl transition-all" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="h-2 bg-blue"></div>
              <div className="relative">
                <AspectRatio ratio={16/9}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-full transition-transform group-hover:scale-105"
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-medium">{project.title}</p>
                  </div>
                </div>
              </div>
              <CardContent className="pt-6">
                <CardTitle className="text-xl font-bold mb-2">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-blue-light/20 text-blue px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <CardDescription className="text-gray-600">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="pt-0">
                <Button asChild variant="outline" className="border-blue text-blue hover:bg-blue hover:text-white transition-colors w-full">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
