import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react";
import logoImage from "@/assets/lavish-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToContact = () => {
    if (window.location.pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollToContact: true } });
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a href="mailto:info@lavishjourneys.in" className="flex items-center gap-2 hover:text-luxury-gold transition-colors">
                <Mail size={16} />
                info@lavishjourneys.in
              </a>
              <a href="tel:+919958530029" className="flex items-center gap-2 hover:text-luxury-gold transition-colors">
                <Phone size={16} />
                +91 99585 30029
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://wa.me/919958530029" className="hover:text-luxury-gold transition-colors">
                <MessageCircle size={16} />
              </a>
              <div className="flex gap-2">
                <a href="#" className="hover:text-luxury-gold transition-colors text-xs">FB</a>
                <a href="#" className="hover:text-luxury-gold transition-colors text-xs">IG</a>
                <a href="#" className="hover:text-luxury-gold transition-colors text-xs">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background border-b shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src={logoImage} 
                alt="Lavish Journeys Logo" 
                className="h-12 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="/" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </a>
              <a href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
                About Us
              </a>
              <a href="/services" className="text-foreground hover:text-primary transition-colors font-medium">
                Services
              </a>
              <div className="relative group">
              <a href="/visa-countries" className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1">
                Visa for Countries
                <span className="text-xs">▼</span>
              </a>
            </div>
              <button onClick={scrollToContact} className="text-foreground hover:text-primary transition-colors font-medium">
                Contact Us
              </button>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button variant="hero" size="lg" onClick={scrollToContact}>
                Get in Touch
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="/" className="text-foreground hover:text-primary transition-colors font-medium">
                  Home
                </a>
                <a href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
                  About Us
                </a>
                <a href="/services" className="text-foreground hover:text-primary transition-colors font-medium">
                  Services
                </a>
                <a href="/visa-countries" className="text-foreground hover:text-primary transition-colors font-medium">
                  Visa for Countries
                </a>
                <button onClick={scrollToContact} className="text-foreground hover:text-primary transition-colors font-medium">
                  Contact Us
                </button>
                <Button variant="hero" size="lg" className="w-fit" onClick={scrollToContact}>
                  Get in Touch
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;