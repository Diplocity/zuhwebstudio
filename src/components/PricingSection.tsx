
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const PricingSection = () => {
  const handleDownload = () => {
    // Create an anchor element and set attributes for direct download
    const link = document.createElement('a');
    link.href = "https://i.postimg.cc/CKvJgPff/zuh-pricing-recreated-page-0001.jpg";
    link.download = "pricing-packages.jpg"; // Suggested filename for download
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="pricing" className="py-20 bg-blue/5">
      <div className="container-custom">
        <h3 className="section-subtitle">PRICING</h3>
        <h2 className="section-title mb-4">WEB DEVELOPMENT SERVICES</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Professional web development services tailored to your needs. Choose from my range of packages or contact me for custom solutions.
        </p>

        <Card className="max-w-3xl mx-auto border-blue/20 animate-fade-in-up bg-white/80 backdrop-blur-sm">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-blue text-white rounded-full h-16 w-16 flex items-center justify-center transform rotate-12 shadow-lg">
            <span className="font-bold text-sm">JPG</span>
          </div>

          <CardHeader className="text-center">
            <CardTitle className="text-2xl md:text-3xl font-bold text-gradient">Web Development Pricing Packages</CardTitle>
            <CardDescription className="text-base">Comprehensive solutions for businesses of all sizes</CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-blue/10 rounded-full p-3 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M7 7h10" />
                    <path d="M7 12h10" />
                    <path d="M7 17h10" />
                  </svg>
                </div>
                <h3 className="font-medium">Detailed Pricing</h3>
                <p className="text-sm text-muted-foreground">Clear breakdown of all service costs</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-blue/10 rounded-full p-3 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                  </svg>
                </div>
                <h3 className="font-medium">Service Packages</h3>
                <p className="text-sm text-muted-foreground">Options for different project needs</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-blue/10 rounded-full p-3 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="font-medium">Maintenance Plans</h3>
                <p className="text-sm text-muted-foreground">Keep your website up-to-date</p>
              </div>
            </div>

            <div className="bg-blue/5 p-6 rounded-lg border border-blue/10">
              <h4 className="font-medium mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue mr-2">
                  <path d="m9 12 2 2 4-4" />
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z" />
                </svg>
                What's included in the pricing image:
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <li className="flex items-center">
                  <span className="bg-green-500/20 text-green-600 rounded-full p-1 mr-2">✓</span>
                  Website design packages
                </li>
                <li className="flex items-center">
                  <span className="bg-green-500/20 text-green-600 rounded-full p-1 mr-2">✓</span>
                  E-commerce solutions
                </li>
                <li className="flex items-center">
                  <span className="bg-green-500/20 text-green-600 rounded-full p-1 mr-2">✓</span>
                  Custom development rates
                </li>
                <li className="flex items-center">
                  <span className="bg-green-500/20 text-green-600 rounded-full p-1 mr-2">✓</span>
                  Maintenance plan options
                </li>
                <li className="flex items-center">
                  <span className="bg-green-500/20 text-green-600 rounded-full p-1 mr-2">✓</span>
                  Hosting and domain costs
                </li>
                <li className="flex items-center">
                  <span className="bg-green-500/20 text-green-600 rounded-full p-1 mr-2">✓</span>
                  Payment terms and conditions
                </li>
              </ul>
            </div>
          </CardContent>

          <CardFooter>
            <Button 
              onClick={handleDownload} 
              className="w-full btn-primary flex items-center justify-center gap-2 group"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              <span>Download Pricing Packages</span>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default PricingSection;
