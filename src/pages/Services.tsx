import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Globe, Hotel, MapPin, Headphones, FileCheck, Plane, Shield, Users, Clock, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const ServicesPage = () => {
  const services = [
    {
      icon: Globe,
      title: "International & Domestic Bookings",
      description: "Comprehensive flight and train booking services for all your travel needs.",
      features: [
        "International flight bookings",
        "Domestic flight reservations", 
        "Train ticket bookings",
        "Multi-city itineraries",
        "Group booking discounts",
        "Flexible booking options"
      ],
      color: "bg-travel-blue"
    },
    {
      icon: Hotel,
      title: "Hotel Reservations",
      description: "Premium accommodations worldwide at the best available rates.",
      features: [
        "Luxury hotel bookings",
        "Budget-friendly options",
        "Resort reservations",
        "Business hotel partnerships",
        "Room upgrades available",
        "Special package deals"
      ],
      color: "bg-luxury-gold"
    },
    {
      icon: MapPin,
      title: "Tour Packages",
      description: "Carefully curated travel packages for every type of traveler.",
      features: [
        "Family vacation packages",
        "Romantic honeymoon trips",
        "Corporate travel solutions",
        "Adventure tours",
        "Cultural experiences",
        "Customized itineraries"
      ],
      color: "bg-success"
    },
    {
      icon: Headphones,
      title: "24/7 Travel Assistance",
      description: "Round-the-clock support to ensure your journey goes smoothly.",
      features: [
        "Emergency travel support",
        "Flight change assistance",
        "Travel advisory updates",
        "Local contact support",
        "Insurance claim help",
        "Real-time notifications"
      ],
      color: "bg-destructive"
    },
    {
      icon: FileCheck,
      title: "Visa & Passport Services",
      description: "Complete documentation support for hassle-free travel approvals.",
      features: [
        "Visa application assistance",
        "Document verification",
        "Passport renewal help",
        "Embassy appointment booking",
        "Travel insurance",
        "Express processing options"
      ],
      color: "bg-primary"
    },
    {
      icon: Shield,
      title: "Travel Insurance",
      description: "Comprehensive travel protection for peace of mind.",
      features: [
        "Medical coverage abroad",
        "Trip cancellation protection",
        "Baggage loss coverage",
        "Emergency evacuation",
        "COVID-19 coverage",
        "Family protection plans"
      ],
      color: "bg-travel-blue"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Consultation",
      description: "Share your travel dreams and requirements with our experts"
    },
    {
      step: "2", 
      title: "Planning",
      description: "We create a personalized itinerary based on your preferences"
    },
    {
      step: "3",
      title: "Booking",
      description: "Secure the best deals on flights, hotels, and activities"
    },
    {
      step: "4",
      title: "Support",
      description: "24/7 assistance throughout your entire journey"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-luxury-gold transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive travel solutions designed to make every journey exceptional. 
              From planning to execution, we handle every detail with precision and care.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card 
                    key={service.title} 
                    className="hover-lift group cursor-pointer border-0 shadow-travel h-full"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="text-center pb-4">
                      <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-primary group-hover:text-travel-blue transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <div className="w-4 h-4 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                              <FileCheck className="w-2 h-2 text-white" />
                            </div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">How We Work</h2>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                Our streamlined process ensures a seamless experience from consultation to your return
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <Card key={step.step} className="bg-white/10 border-white/20 hover-lift text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-luxury-gold-foreground">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-primary-foreground/80 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Why Choose Our Services?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We go beyond ordinary travel services to deliver extraordinary experiences
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center hover-lift">
                <CardContent className="p-8">
                  <Users className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-3">Expert Team</h3>
                  <p className="text-muted-foreground">
                    Experienced travel professionals with deep knowledge of destinations worldwide
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-lift">
                <CardContent className="p-8">
                  <Clock className="w-12 h-12 text-travel-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-3">Quick Response</h3>
                  <p className="text-muted-foreground">
                    Rapid response times and efficient processing for all your travel needs
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-lift">
                <CardContent className="p-8">
                  <Shield className="w-12 h-12 text-success mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-3">Secure Booking</h3>
                  <p className="text-muted-foreground">
                    Safe and secure payment processing with complete data protection
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-lift">
                <CardContent className="p-8">
                  <Globe className="w-12 h-12 text-destructive mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-3">Global Network</h3>
                  <p className="text-muted-foreground">
                    Worldwide partnerships ensuring the best rates and exclusive deals
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-lift">
                <CardContent className="p-8">
                  <Headphones className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-3">24/7 Support</h3>
                  <p className="text-muted-foreground">
                    Round-the-clock assistance for any travel emergencies or queries
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-lift">
                <CardContent className="p-8">
                  <FileCheck className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-3">Hassle-Free Process</h3>
                  <p className="text-muted-foreground">
                    Streamlined procedures making travel planning effortless and enjoyable
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Service Areas
              </h2>
              <p className="text-lg text-muted-foreground">
                We serve clients across India and internationally
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover-lift">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-travel-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Delhi NCR</h3>
                  <p className="text-muted-foreground">
                    Primary service area including Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-lift">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Pan India</h3>
                  <p className="text-muted-foreground">
                    Extended services across all major Indian cities through our partner network
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-lift">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Plane className="w-8 h-8 text-luxury-gold-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">International</h3>
                  <p className="text-muted-foreground">
                    Global travel services and visa assistance for destinations worldwide
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-luxury-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-luxury-gold-foreground mb-6">
              Ready to Experience Our Services?
            </h2>
            <p className="text-xl text-luxury-gold-foreground/90 mb-8">
              Let our expert team handle all your travel needs. Contact us today for a 
              personalized consultation and start planning your perfect journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="lg" className="hover-lift">
                <Headphones className="mr-2" />
                Get Free Consultation
              </Button>
              <Button variant="outline-gold" size="lg" className="hover-lift">
                <Phone className="mr-2" />
                Call +91 99585 30029
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicesPage;