import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Plane, FileText } from "lucide-react";
import heroImage1 from "@/assets/hero-carousel-1.jpg";
import heroImage2 from "@/assets/hero-carousel-2.jpg";
import heroImage3 from "@/assets/hero-carousel-3.jpg";
import heroImage4 from "@/assets/hero-carousel-4.jpg";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [heroImage1, heroImage2, heroImage3, heroImage4];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-[80vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      {images.map((image, index) => (
        <div 
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/30 to-primary/60"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 fade-in">
            Lavish Journeys
          </h1>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto fade-in-up">
            Transform every journey into a memory—crafted with precision, comfort, and trust. 
            Experience luxury travel planning and hassle-free visa services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center slide-up">
            <Button 
              variant="hero" 
              size="xl" 
              className="hover-lift"
              onClick={() => window.open('https://wa.me/919958530029', '_blank')}
            >
              <Plane className="mr-2" />
              Plan Your Journey
            </Button>
              <a href="/visa-countries">
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="hover-lift"
                >
                  <FileText className="mr-2" />
                  Visa Assistance
                </Button>
              </a>
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