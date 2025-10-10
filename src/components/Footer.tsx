import { MapPin, Phone, Mail, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Visa for Countries", href: "#visa" },
    { name: "Blog", href: "#blog" },
    { name: "Contact Us", href: "#contact" }
  ];

  const popularDestinations = [
    "France", "United Kingdom", "Dubai", "USA", 
    "Australia", "Canada", "Germany", "Singapore"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">The Lavish Journeys</h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Your premier travel solutions provider, specializing in luxury travel experiences 
                and seamless visa services worldwide.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-luxury-gold flex-shrink-0" />
                  <span className="text-sm text-primary-foreground/80">
                    Ghaziabad, U.P., India
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-luxury-gold flex-shrink-0" />
                  <span className="text-sm text-primary-foreground/80">
                    +91 99585 30029
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-luxury-gold flex-shrink-0" />
                  <span className="text-sm text-primary-foreground/80">
                    info@lavishjourneys.in
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-luxury-gold flex-shrink-0" />
                  <span className="text-sm text-primary-foreground/80">
                    www.lavishjourneys.in
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-primary-foreground/80 hover:text-luxury-gold transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Destinations */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Popular Destinations</h4>
              <ul className="space-y-2">
                {popularDestinations.map((destination) => (
                  <li key={destination}>
                    <a 
                      href="#visa" 
                      className="text-primary-foreground/80 hover:text-luxury-gold transition-colors text-sm"
                    >
                      {destination}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Flight Bookings</li>
                <li>Hotel Reservations</li>
                <li>Tour Packages</li>
                <li>Visa Assistance</li>
                <li>Travel Insurance</li>
                <li>24/7 Support</li>
              </ul>
            </div>
          </div>

          {/* Social Media & Copyright */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Social Media */}
              <div className="flex items-center gap-6">
                <span className="text-sm text-primary-foreground/80">Follow us:</span>
                <div className="flex gap-4">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61581618810613" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-luxury-gold transition-colors text-sm font-semibold"
                  >
                    FB
                  </a>
                  <a 
                    href="https://www.instagram.com/_lavish_journeys_/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-luxury-gold transition-colors text-sm font-semibold"
                  >
                    IG
                  </a>
                  <a 
                    href="https://www.threads.com/@_lavish_journeys" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-luxury-gold transition-colors text-sm font-semibold"
                  >
                    TH
                  </a>
                </div>
              </div>

              {/* Copyright */}
              <div className="text-center md:text-right">
                <p className="text-sm text-primary-foreground/80">
                  Copyright © {currentYear} The Lavish Journeys. All rights reserved.
                </p>
                <p className="text-xs text-primary-foreground/60 mt-1">
                  Crafted with ❤️ for exceptional travel experiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;