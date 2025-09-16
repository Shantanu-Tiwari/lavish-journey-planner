import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, Download, Phone, FileCheck, Clock, DollarSign, MapPin } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const VisaDetail = () => {
  const { country } = useParams();
  
  // Format country name for display
  const countryName = country?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ') || 'Austria';

  const visaTypes = [
    {
      type: "Tourist Visa",
      duration: "30-90 days",
      description: "Perfect for leisure travel, sightseeing, and visiting friends or family.",
      requirements: ["Valid passport", "Photographs", "Travel itinerary", "Hotel bookings", "Financial proof"]
    },
    {
      type: "Business Visa", 
      duration: "30-180 days",
      description: "For business meetings, conferences, and professional activities.",
      requirements: ["Business invitation", "Company registration", "Financial statements", "Travel insurance"]
    },
    {
      type: "Student Visa",
      duration: "1-4 years", 
      description: "For pursuing education at recognized institutions.",
      requirements: ["Admission letter", "Educational certificates", "Financial proof", "Health insurance"]
    },
    {
      type: "Work Visa",
      duration: "1-5 years",
      description: "For employment and professional work opportunities.",
      requirements: ["Job offer letter", "Work permit", "Professional qualifications", "Medical certificate"]
    }
  ];

  const documents = [
    "Valid Passport (minimum 6 months validity)",
    "Recent Passport-size Photographs (2-4 photos)",
    "Completed Visa Application Form",
    "Proof of Accommodation (hotel bookings/invitation letter)",
    "Flight Booking Confirmation (round-trip)",
    "Bank Statements (last 6 months)",
    "Travel Insurance (minimum coverage as per embassy requirements)",
    "Employment Certificate/Business Registration",
    "Income Tax Returns (last 2-3 years)",
    "Cover Letter explaining purpose of visit"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-current rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-current rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Link to="/visa-countries" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-luxury-gold transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to All Countries
            </Link>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Experience the {countryName} Dream
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Effortless Visa Assistance Services for {countryName}. Whether you're planning a short visit 
              or relocating for work or study, our professional visa assistance services make the process easy and stress-free.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Phone className="mr-2" />
                Get in Touch
              </Button>
              <Button variant="ghost-white" size="lg">
                <Download className="mr-2" />
                Download Checklist
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Country Overview */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Why Visit {countryName}?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {countryName}—home to stunning landscapes, rich culture, and high quality of life—welcomes visitors 
                for tourism, business, education, and long-term stays. Discover endless opportunities in one of the world's most sought-after destinations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center hover-lift">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileCheck className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">99% Success Rate</h3>
                  <p className="text-muted-foreground">Proven expertise in {countryName} visa processing</p>
                </CardContent>
              </Card>

              <Card className="text-center hover-lift">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-travel-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">10-15 Working Days</h3>
                  <p className="text-muted-foreground">Standard processing time for most visa types</p>
                </CardContent>
              </Card>

              <Card className="text-center hover-lift">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-luxury-gold-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Competitive Fees</h3>
                  <p className="text-muted-foreground">Transparent pricing as per embassy guidelines</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Types */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Types of {countryName} Visa
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose the right visa type based on your purpose of visit
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {visaTypes.map((visa, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center justify-between w-full mr-4">
                      <div>
                        <h3 className="text-lg font-semibold text-primary">{visa.type}</h3>
                        <p className="text-sm text-muted-foreground">Duration: {visa.duration}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground mb-4">{visa.description}</p>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Key Requirements:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        {visa.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Documents Required
              </h2>
              <p className="text-lg text-muted-foreground">
                Complete checklist for your {countryName} visa application
              </p>
            </div>

            <Card className="shadow-travel">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileCheck className="w-6 h-6 text-success" />
                  Required Documents Checklist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                      <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FileCheck className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm">{doc}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Processing & Fees */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Processing & Fees
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-travel-blue" />
                    Processing Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Standard Processing:</span>
                      <span className="font-semibold">10-15 working days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Express Processing:</span>
                      <span className="font-semibold">5-7 working days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Peak Season:</span>
                      <span className="font-semibold">15-20 working days</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <DollarSign className="w-6 h-6 text-luxury-gold" />
                    Service Fees
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-luxury-gold/10 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-2">Embassy Fees:</p>
                      <p className="font-semibold">As per current embassy guidelines</p>
                    </div>
                    <div className="p-4 bg-travel-blue/10 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-2">Our Service Fee:</p>
                      <p className="font-semibold">Competitive rates (call for details)</p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      * Fees are subject to change as per embassy updates
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to start your journey to {countryName}?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Our visa experts are ready to guide you through the entire process. 
              Contact us today for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="hover-lift">
                <Phone className="mr-2" />
                Call us at +91 99585 30029
              </Button>
              <Button variant="ghost-white" size="lg" className="hover-lift">
                Apply Now
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

export default VisaDetail;