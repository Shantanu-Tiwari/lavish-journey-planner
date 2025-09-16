import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Hotel, MapPin, Headphones, FileCheck } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "International & Domestic Bookings",
      description: "Flights, trains, and complete travel arrangements tailored to your needs.",
      color: "bg-travel-blue",
    },
    {
      icon: Hotel,
      title: "Hotel Reservations",
      description: "Premium stays worldwide at competitive prices with exclusive partnerships.",
      color: "bg-luxury-gold",
    },
    {
      icon: MapPin,
      title: "Tour Packages",
      description: "Tailor-made itineraries for families, couples, corporates, and solo travelers.",
      color: "bg-success",
    },
    {
      icon: Headphones,
      title: "Travel Assistance",
      description: "24/7 support ensuring a smooth travel experience from start to finish.",
      color: "bg-primary",
    },
    {
      icon: FileCheck,
      title: "Visa & Passport Assistance",
      description: "Streamlined documentation and approval support for hassle-free processing.",
      color: "bg-destructive",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive travel solutions designed to make your journey exceptional. 
              From planning to execution, we handle every detail with precision and care.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={service.title} 
                  className="hover-lift group cursor-pointer border-0 shadow-travel"
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
                  <CardContent className="text-center">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-16 fade-in-up">
            <div className="bg-luxury-gradient p-8 rounded-2xl shadow-gold">
              <h3 className="text-2xl font-bold text-luxury-gold-foreground mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-luxury-gold-foreground/80 mb-6 max-w-2xl mx-auto">
                Let our experienced team craft the perfect travel experience for you. 
                From luxury getaways to business trips, we make every journey memorable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;