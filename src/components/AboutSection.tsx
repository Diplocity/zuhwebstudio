
const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="container-custom">
        <h3 className="section-subtitle">ABOUT ME</h3>
        <h2 className="section-title mb-12">Who I Am</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue mb-2">Background</h3>
              <p className="text-gray-700">
                Based in Düsseldorf, Germany, I'm a junior web developer and data analyst focusing on creating responsive web applications and analyzing data to drive decision-making processes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue mb-2">Technical Expertise</h3>
              <p className="text-gray-700">
                Proficient in Python, REST APIs, Vue.js, HTML, CSS Flexbox, and Bubble.io. I'm also experienced with Linux (Ubuntu, Kali), CI/CD, and web scraping techniques.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue mb-2">Passion & Interests</h3>
              <p className="text-gray-700">
                I have a strong interest in data analytics, cybersecurity, and automation. I enjoy finding solutions that improve user experiences and system performance.
              </p>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="bg-blue h-64 w-64 rounded-full absolute -top-6 -left-6 opacity-10"></div>
            <div className="bg-blue-light h-48 w-48 rounded-full absolute -bottom-4 -right-4 opacity-10"></div>
            <div className="bg-white p-8 rounded-xl shadow-lg relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-center">My Development Journey</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue rounded-full p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Web Development</h4>
                    <p className="text-gray-600 text-sm">Building responsive and user-friendly web applications</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue rounded-full p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Data Analytics</h4>
                    <p className="text-gray-600 text-sm">Analyzing data to provide meaningful insights</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue rounded-full p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Cybersecurity</h4>
                    <p className="text-gray-600 text-sm">Implementing secure practices in development</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue rounded-full p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Automation</h4>
                    <p className="text-gray-600 text-sm">Creating systems that improve efficiency</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
