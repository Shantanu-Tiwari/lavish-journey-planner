import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, Heart } from "lucide-react";
import aboutTeamImage from "@/assets/about-team.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Who We Are</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The Lavish Journeys is a premier travel solutions provider headquartered in Ghaziabad, U.P. 
              We specialize in curating personalized, luxurious travel experiences for leisure and corporate clients.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image Column */}
            <div className="fade-in order-2 lg:order-1">
              <div className="relative">
                <img 
                  src={aboutTeamImage} 
                  alt="The Lavish Journeys team working together" 
                  className="rounded-2xl shadow-luxury w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Content Column */}
            <div className="fade-in-up order-1 lg:order-2">
              <h3 className="text-2xl font-semibold text-primary mb-6">Our Mission</h3>
              <p className="text-lg text-foreground mb-8 leading-relaxed">
                Our mission is simple: to transform every journey into a memory—crafted with precision, 
                comfort, and trust. We believe that travel should be seamless, luxurious, and tailored 
                to your unique needs and dreams.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-travel-blue rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-travel-blue-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Premium Service Excellence</h4>
                    <p className="text-muted-foreground">Delivering world-class travel experiences</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-luxury-gold-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Personalized Attention</h4>
                    <p className="text-muted-foreground">Tailored solutions for every traveler</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-success-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Global Network</h4>
                    <p className="text-muted-foreground">Trusted partnerships worldwide</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-destructive rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-destructive-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Passionate Commitment</h4>
                    <p className="text-muted-foreground">Your satisfaction is our priority</p>
                  </div>
                </div>
              </div>

              <Button variant="travel" size="lg" className="hover-lift">
                Learn More About Us
              </Button>
            </div>

            {/* Stats Column */}
            <div className="fade-in-up order-4 lg:order-3 lg:col-span-2">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="hover-lift">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-3xl font-bold text-primary mb-2">500+</h3>
                    <p className="text-muted-foreground">Happy Travelers</p>
                  </CardContent>
                </Card>
                
                <Card className="hover-lift">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-3xl font-bold text-luxury-gold mb-2">30+</h3>
                    <p className="text-muted-foreground">Countries Served</p>
                  </CardContent>
                </Card>
                
                <Card className="hover-lift">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-3xl font-bold text-travel-blue mb-2">24/7</h3>
                    <p className="text-muted-foreground">Support Available</p>
                  </CardContent>
                </Card>
                
                <Card className="hover-lift">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-3xl font-bold text-success mb-2">98%</h3>
                    <p className="text-muted-foreground">Success Rate</p>
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

export default About;