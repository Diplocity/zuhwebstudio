import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container-custom relative">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue/5 rounded-full filter blur-3xl -z-10"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue/10 rounded-full filter blur-3xl -z-10"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in-up z-10">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue/20 bg-blue/5 text-blue text-sm font-medium">
              Web Development Expert
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">EBENEZER EDEM ZUH</span>
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-blue to-blue-light mb-6"></div>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-lg">
              Creating responsive, interactive web experiences with clean code and modern design principles. Let's turn your vision into reality.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={scrollToContact} className="btn-primary group">
                Let's Talk 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="border-blue/40 hover:bg-blue/5 text-foreground">
                View Skills
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block relative z-10">
            <div className="relative">
              {/* Code brackets decorative element */}
              <div className="absolute -left-6 -top-6 text-7xl text-blue/10 font-bold">{`{`}</div>
              <div className="absolute -right-6 -bottom-6 text-7xl text-blue/10 font-bold">{`}`}</div>
              
              {/* Main profile element */}
              <div className="bg-gradient-to-br from-blue/80 to-blue-light/80 rounded-2xl p-1">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 backdrop-blur-sm">
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative">
                      <div className="bg-blue/10 rounded-full h-40 w-40 flex items-center justify-center animate-pulse">
                        <Avatar className="h-36 w-36 border-4 border-white shadow-xl">
                          <AvatarImage src="https://i.postimg.cc/sXqLv7Rb/TBU2.jpg" alt="Ebenezer Edem Zuh" className="object-fill" />
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
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <h3 className="font-bold text-2xl md:text-3xl text-blue">3+</h3>
            <p className="text-gray-600 text-sm md:text-base">Years Experience</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <h3 className="font-bold text-2xl md:text-3xl text-blue">25+</h3>
            <p className="text-gray-600 text-sm md:text-base">Projects Completed</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <h3 className="font-bold text-2xl md:text-3xl text-blue">12+</h3>
            <p className="text-gray-600 text-sm md:text-base">Tech Skills</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <h3 className="font-bold text-2xl md:text-3xl text-blue">100%</h3>
            <p className="text-gray-600 text-sm md:text-base">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;