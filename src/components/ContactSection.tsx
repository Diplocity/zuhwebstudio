
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container-custom">
        <h3 className="section-subtitle">GET IN TOUCH</h3>
        <h2 className="section-title mb-4">CONTACT</h2>
        <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
          Are you looking for a web developer with data analytics skills? I'd be happy to connect!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="text-center hover:shadow-lg transition-all">
            <CardContent className="pt-6">
              <div className="mb-4 mx-auto bg-blue/10 h-16 w-16 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-gray-600 mb-4">ebenezuh@gmail.com</p>
              <Button asChild variant="outline" className="border-blue text-blue hover:bg-blue hover:text-white">
                <a href="mailto:ebenezuh@gmail.com">Send Email</a>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-all">
            <CardContent className="pt-6">
              <div className="mb-4 mx-auto bg-blue/10 h-16 w-16 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Phone</h3>
              <p className="text-gray-600 mb-4">+49 1573 3302744</p>
              <Button asChild variant="outline" className="border-blue text-blue hover:bg-blue hover:text-white">
                <a href="tel:+4915733302744">Call Me</a>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-all">
            <CardContent className="pt-6">
              <div className="mb-4 mx-auto bg-blue/10 h-16 w-16 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Location</h3>
              <p className="text-gray-600 mb-4">Düsseldorf, Germany</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-4 text-xl text-center">Connect With Me</h3>
              <div className="flex flex-col space-y-4">
                <Button asChild variant="outline" className="w-full border-blue text-blue hover:bg-blue hover:text-white">
                  <a 
                    href="https://github.com/Diplocity" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full border-blue text-blue hover:bg-blue hover:text-white">
                  <a 
                    href="https://www.linkedin.com/in/edem360/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full border-blue text-blue hover:bg-blue hover:text-white">
                  <a 
                    href="https://ebenezer-portfolio.streamlit.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Portfolio
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="bg-gradient-to-br from-blue to-blue-light rounded-lg text-white p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Let's Work Together!</h3>
            <p className="mb-6">I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to connect.</p>
            <div className="flex justify-center">
              <Button asChild className="bg-white text-blue hover:bg-opacity-90">
                <a href="mailto:ebenezuh@gmail.com" className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send me an email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
