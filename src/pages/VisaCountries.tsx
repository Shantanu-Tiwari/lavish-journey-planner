import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MapPin, FileCheck, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import VisaContactForm from "@/components/VisaContactForm";

const VisaCountries = () => {
  const regions = [
    {
      name: "Europe",
      countries: [
        "Austria", "Czech Republic", "France", "Germany", "Greece", "Italy", 
        "Netherlands", "Russia", "Spain", "Switzerland", "Turkey", "United Kingdom"
      ],
      color: "bg-travel-blue",
      link: "/europe"
    },
    {
      name: "Asia",
      countries: [
        "Cambodia", "China (Z Visa)", "China (S1 Visa)", "Japan", "Singapore", "South Korea", "Vietnam"
      ],
      color: "bg-luxury-gold",
      link: "/asia"
    },
    {
      name: "Americas", 
      countries: [
        "Brazil", "Canada"
      ],
      color: "bg-success",
      link: "/america"
    },
    {
      name: "Middle East",
      countries: [
        "Dubai"
      ],
      color: "bg-destructive",
      link: "/middle-east"
    },
    {
      name: "Africa",
      countries: [
        "Ghana", "South Africa"
      ],
      color: "bg-primary",
      link: "/africa"
    },
    {
      name: "Australia & Oceania",
      countries: [
        "Australia", "New Zealand"
      ],
      color: "bg-travel-blue",
      link: "/australia"
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
              Visa for Countries
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose your destination to get hassle-free visa assistance. 
              We provide expert guidance for over 30+ countries worldwide.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <Card className="text-center hover-lift">
                <CardContent className="p-6">
                  <FileCheck className="w-12 h-12 text-success mx-auto mb-4" />
                  <h3 className="font-semibold text-primary mb-2">99% Success Rate</h3>
                  <p className="text-sm text-muted-foreground">Proven track record</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover-lift">
                <CardContent className="p-6">
                  <Clock className="w-12 h-12 text-travel-blue mx-auto mb-4" />
                  <h3 className="font-semibold text-primary mb-2">10-15 Days</h3>
                  <p className="text-sm text-muted-foreground">Processing time</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover-lift">
                <CardContent className="p-6">
                  <MapPin className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
                  <h3 className="font-semibold text-primary mb-2">30+ Countries</h3>
                  <p className="text-sm text-muted-foreground">Global coverage</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Countries by Region */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {regions.map((region, index) => (
                <Card key={region.name} className="hover-lift shadow-travel" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-4">
                      <div className={`w-16 h-16 ${region.color} rounded-full flex items-center justify-center`}>
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary">{region.name}</h3>
                        <p className="text-muted-foreground">{region.countries.length} countries available</p>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {region.countries.map((country) => (
                        <div
                          key={country}
                          className="p-3 rounded-lg bg-muted text-sm font-medium text-center"
                        >
                          {country}
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Link to={region.link}>
                        <Button className="w-full" variant="outline">
                          View {region.name} Visa Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16">
              <div className="bg-luxury-gradient p-8 rounded-2xl shadow-gold max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-luxury-gold-foreground mb-4">
                  Need Help Choosing?
                </h3>
                <p className="text-luxury-gold-foreground/80 mb-6 max-w-2xl mx-auto">
                  Our visa experts are here to guide you through the entire process. 
                  Contact us for personalized assistance and documentation support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="#contact">
                    <Button variant="premium" size="lg">
                      <FileCheck className="mr-2" />
                      Get Free Consultation
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VisaContactForm />
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default VisaCountries;