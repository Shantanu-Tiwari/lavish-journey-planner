import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Award, Users, Globe, Heart, Target, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const AboutPage = () => {
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
              About Lavish Journeys
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your premier travel solutions provider, dedicated to transforming every journey 
              into an unforgettable memory through precision, comfort, and trust.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Our Story</h2>
                <div className="space-y-6 text-lg text-foreground leading-relaxed">
                  <p>
                    Founded in Ghaziabad, Uttar Pradesh, Lavish Journeys emerged from a simple yet 
                    powerful vision: to make luxury travel accessible and stress-free for everyone. 
                    We recognized that travel should be about creating memories, not managing complications.
                  </p>
                  <p>
                    What started as a small travel consultancy has grown into a comprehensive travel 
                    solutions provider, specializing in both leisure and corporate travel experiences. 
                    Our expertise spans across international and domestic bookings, luxury accommodations, 
                    and most importantly, hassle-free visa services.
                  </p>
                  <p>
                    Today, we pride ourselves on being more than just a travel agency—we're your trusted 
                    travel partners, committed to turning your travel dreams into reality with 
                    unparalleled service and attention to detail.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <Card className="hover-lift">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-3xl font-bold text-luxury-gold mb-2">500+</h3>
                    <p className="text-muted-foreground">Happy Travelers</p>
                  </CardContent>
                </Card>
                
                <Card className="hover-lift">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-3xl font-bold text-travel-blue mb-2">30+</h3>
                    <p className="text-muted-foreground">Countries Served</p>
                  </CardContent>
                </Card>
                
                <Card className="hover-lift">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-3xl font-bold text-success mb-2">5+</h3>
                    <p className="text-muted-foreground">Years Experience</p>
                  </CardContent>
                </Card>
                
                <Card className="hover-lift">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-3xl font-bold text-destructive mb-2">99%</h3>
                    <p className="text-muted-foreground">Success Rate</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="bg-white/10 border-white/20 hover-lift">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-luxury-gold-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    To transform every journey into a cherished memory by providing personalized, 
                    luxurious travel experiences crafted with precision, comfort, and trust. 
                    We strive to eliminate travel stress and maximize joy for every traveler.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 hover-lift">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-travel-blue rounded-full flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    To become the most trusted and preferred travel partner in India, known for 
                    exceptional service quality, innovative solutions, and creating extraordinary 
                    travel experiences that exceed expectations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                These principles guide everything we do and shape every interaction with our clients
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover-lift">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-luxury-gold-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Excellence</h3>
                  <p className="text-muted-foreground">
                    We strive for perfection in every service we provide, ensuring the highest 
                    standards of quality and professionalism.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-lift">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-travel-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Integrity</h3>
                  <p className="text-muted-foreground">
                    We build trust through honest, transparent relationships and ethical 
                    business practices in all our dealings.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-lift">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Care</h3>
                  <p className="text-muted-foreground">
                    We genuinely care about every traveler's experience and go above and 
                    beyond to ensure their satisfaction.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-lift">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-destructive rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Innovation</h3>
                  <p className="text-muted-foreground">
                    We continuously evolve our services and embrace new technologies to 
                    enhance the travel experience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Leadership */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Leadership Team</h2>
              <p className="text-lg text-muted-foreground">
                Meet the experienced professionals leading Lavish Journeys
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="hover-lift shadow-travel">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-travel-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Mr. Vikas Balyan</h3>
                  <p className="text-travel-blue font-semibold mb-4 text-lg">Manager</p>
                  <p className="text-muted-foreground leading-relaxed">
                    With 9 years of experience in the tours and travel industry, Mr. Balyan brings 
                    operational excellence and strategic oversight to our daily operations. His expertise 
                    in travel logistics, customer relations, and process optimization ensures seamless 
                    service delivery and exceptional client satisfaction.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Why Choose Lavish Journeys?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">24/7</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Round-the-Clock Support</h3>
                <p className="text-muted-foreground">
                  Our dedicated team is available 24/7 to assist you with any travel emergencies or queries.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-luxury-gold-foreground">99%</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Visa Success Rate</h3>
                <p className="text-muted-foreground">
                  Industry-leading success rate in visa approvals through our expert guidance and documentation.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-travel-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Global Network</h3>
                <p className="text-muted-foreground">
                  Trusted partnerships with airlines, hotels, and service providers worldwide for the best deals.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-destructive rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Personalized Service</h3>
                <p className="text-muted-foreground">
                  Every itinerary is customized to your preferences, ensuring a unique travel experience.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Expert Guidance</h3>
                <p className="text-muted-foreground">
                  Years of experience in handling complex travel requirements and visa procedures.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">₹</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Transparent Pricing</h3>
                <p className="text-muted-foreground">
                  No hidden costs, competitive pricing, and complete transparency in all our services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Let us help you create unforgettable travel memories. Contact our expert team today 
              for personalized travel solutions.
            </p>
            <Button variant="hero" size="lg" className="hover-lift">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;