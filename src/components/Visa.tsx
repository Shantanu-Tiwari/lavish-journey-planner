import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileCheck, Download, Globe2, CheckCircle } from "lucide-react";

const Visa = () => {
  const features = [
    "Personalized travel planning",
    "Competitive pricing with luxury experiences", 
    "24/7 dedicated assistance",
    "Wide network of trusted global partners"
  ];

  return (
    <section id="visa" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-current rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-current rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-current rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-luxury-gold rounded-full mb-6">
              <Globe2 className="w-10 h-10 text-luxury-gold-foreground" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Visa Made Simple</h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              We provide effortless visa services for over 30+ countries across Europe, Asia, 
              the Americas, Africa, and beyond. Let us handle the complexity while you focus on your journey.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Content */}
            <div className="fade-in-up">
              <h3 className="text-2xl font-semibold mb-8">Why Choose Our Visa Services?</h3>
              
              <div className="space-y-6 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-luxury-gold-foreground" />
                    </div>
                    <p className="text-lg text-primary-foreground/90">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/visa-countries">
                  <Button variant="hero" size="lg" className="hover-lift">
                    <Globe2 className="mr-2" />
                    Explore Visa Options
                  </Button>
                </a>
                <Button variant="ghost-white" size="lg" className="hover-lift">
                  <Download className="mr-2" />
                  Download Checklist
                </Button>
              </div>
            </div>

            {/* Visa Stats */}
            <div className="fade-in-up">
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-white/10 border-white/20 hover-lift">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileCheck className="w-6 h-6 text-luxury-gold-foreground" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">99%</h4>
                    <p className="text-white/80">Approval Rate</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 hover-lift">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-travel-blue rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe2 className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">30+</h4>
                    <p className="text-white/80">Countries</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 hover-lift">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">10-15</h4>
                    <p className="text-white/80">Days Processing</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 hover-lift">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-destructive rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileCheck className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">24/7</h4>
                    <p className="text-white/80">Support</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visa;