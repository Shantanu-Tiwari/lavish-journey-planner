import { Button } from "@/components/ui/button";
import { Plane, FileText } from "lucide-react";
import heroImage from "@/assets/hero-travel-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 fade-in">
            The Lavish Journeys
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 fade-in-up font-light">
            Your Gateway to Seamless Travel
          </p>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto fade-in-up">
            Transform every journey into a memory—crafted with precision, comfort, and trust. 
            Experience luxury travel planning and hassle-free visa services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center slide-up">
            <Button 
              variant="hero" 
              size="xl" 
              className="hover-lift"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Plane className="mr-2" />
              Plan Your Journey
            </Button>
            <Button 
              variant="ghost-white" 
              size="xl" 
              className="hover-lift"
              onClick={() => document.getElementById('visa')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <FileText className="mr-2" />
              Visa Assistance
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;