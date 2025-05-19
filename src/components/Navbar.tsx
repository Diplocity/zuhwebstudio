
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container-custom flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-blue">EDEM ZUH</a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue transition-colors">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue transition-colors">About Me</button>
          <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue transition-colors">Projects</button>
          <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-blue transition-colors">Skills</button>
          <Button onClick={() => scrollToSection('contact')} className="bg-blue hover:bg-blue-dark text-white">Contact me</Button>
        </nav>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4 px-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue transition-colors py-2">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue transition-colors py-2">About Me</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue transition-colors py-2">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-blue transition-colors py-2">Skills</button>
              <Button onClick={() => scrollToSection('contact')} className="bg-blue hover:bg-blue-dark text-white w-full">Contact me</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
