
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in-up">
            <p className="text-blue font-medium mb-2">HELLO, I AM</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gradient">EBENEZER EDEM ZUH</h1>
            <h2 className="text-xl text-blue font-medium mb-4">Junior Web Developer & Data Analyst</h2>
            <p className="text-gray-600 mb-6 max-w-lg">
              Passionate about web development, Python programming, and data analytics. I enjoy building responsive web applications and automating systems to improve user experience and performance.
            </p>
            <Button onClick={scrollToContact} className="btn-primary">
              Contact
            </Button>
          </div>
          <div className="hidden md:flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-blue rounded-full opacity-20 blur-xl"></div>
              <div className="bg-blue-light rounded-full h-80 w-80 flex items-center justify-center">
                <div className="bg-white rounded-full h-72 w-72 flex items-center justify-center relative overflow-hidden">
                  <div className="text-7xl font-bold text-blue">EZ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-md text-center">
            <h3 className="font-bold text-2xl md:text-3xl text-blue">3+</h3>
            <p className="text-gray-600 text-sm md:text-base">Projects</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md text-center">
            <h3 className="font-bold text-2xl md:text-3xl text-blue">8+</h3>
            <p className="text-gray-600 text-sm md:text-base">Technical Skills</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
