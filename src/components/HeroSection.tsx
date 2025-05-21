
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const scrollToSkills = () => {
    document.getElementById('skills')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container-custom relative">
        {/* Enhanced background elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue/5 rounded-full filter blur-3xl -z-10"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue/10 rounded-full filter blur-3xl -z-10"></div>
        <div className="absolute top-40 left-20 w-20 h-20 bg-blue-light/20 rounded-full -z-10 animate-bounce"></div>
        <div className="absolute bottom-40 right-20 w-16 h-16 bg-blue/15 rounded-full -z-10 animate-ping"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in-up z-10">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue/20 bg-blue/5 text-blue text-sm font-medium backdrop-blur-sm">
              <span className="mr-2">✨</span>Web Development Expert<span className="ml-2">✨</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">EBENEZER EDEM ZUH</span>
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-blue to-blue-light mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed max-w-lg">
              Creating responsive, interactive web experiences with clean code and modern design principles. Let's turn your vision into reality.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={scrollToContact} className="btn-primary group relative overflow-hidden">
                <span className="relative z-10">Let's Talk</span>
                <span className="absolute inset-0 bg-blue-dark transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                <ArrowRight className="ml-2 h-4 w-4 relative z-10 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button onClick={scrollToSkills} variant="outline" className="border-blue/40 hover:bg-blue/5 text-foreground relative overflow-hidden group">
                <span className="relative z-10">View Skills</span>
                <span className="absolute inset-0 bg-blue/10 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block relative z-10">
            <div className="relative">
              {/* Code brackets decorative element */}
              <div className="absolute -left-6 -top-6 text-7xl text-blue/10 font-bold">{`{`}</div>
              <div className="absolute -right-6 -bottom-6 text-7xl text-blue/10 font-bold">{`}`}</div>
              
              {/* Main profile element with improved animations - original size before changes */}
              <div className="bg-gradient-to-br from-blue/80 to-blue-light/80 rounded-2xl p-1 shadow-lg hover:shadow-blue/20 hover:shadow-xl transition-shadow">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 backdrop-blur-sm">
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative">
                      {/* Keeping extended visibility when clear (22s total animation: 20s clear, 2s blurred) */}
                      <div className="bg-blue/10 rounded-full h-48 w-48 flex items-center justify-center animate-[pulse_22s_cubic-bezier(0.4,0,0.6,1)_infinite]">
                        <Avatar className="h-44 w-44 border-4 border-white shadow-xl">
                          <AvatarImage src="https://i.postimg.cc/sXqLv7Rb/TBU2.jpg" alt="Ebenezer Edem Zuh" className="object-cover" />
                          <AvatarFallback className="text-6xl font-bold text-blue">EZ</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-blue text-white rounded-full h-10 w-10 flex items-center justify-center shadow-lg">
                        <span className="text-xl">✓</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-blue mr-3"></div>
                      <span className="font-medium">React Developer</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-blue-light mr-3"></div>
                      <span className="font-medium">UI/UX Designer</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-blue-dark mr-3"></div>
                      <span className="font-medium">Full Stack Dev</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* New floating tech icons */}
            <div className="absolute -right-8 top-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-2 rounded-full shadow-md animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue"><path d="M12 2H2v10h10V2z"></path><path d="M17 17v5"></path><path d="M9 12h5a3 3 0 0 1 3 3v5"></path><path d="M9 20h5"></path><path d="M9 16h5"></path><path d="M22 2 12 12"></path></svg>
            </div>
            <div className="absolute -left-8 bottom-20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-2 rounded-full shadow-md animate-ping animation-delay-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-light"><path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"></path><path d="M10 16H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v4"></path><path d="M21 11v8a2 2 0 0 1-2 2h-8"></path><path d="m23 11-3-3-3 3"></path><path d="m12 17 3 3 3-3"></path></svg>
            </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700 backdrop-blur-sm">
            <h3 className="font-bold text-2xl md:text-3xl text-blue">3+</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">Years Experience</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700 backdrop-blur-sm">
            <h3 className="font-bold text-2xl md:text-3xl text-blue">25+</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">Projects Completed</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700 backdrop-blur-sm">
            <h3 className="font-bold text-2xl md:text-3xl text-blue">12+</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">Tech Skills</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700 backdrop-blur-sm">
            <h3 className="font-bold text-2xl md:text-3xl text-blue">100%</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
