import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

const Leadership = () => {
  return (
    <section className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Meet Our Leadership</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our experienced leadership team brings decades of expertise in travel, hospitality, 
              and customer service to ensure your journey exceeds expectations.
            </p>
          </div>

          {/* Leadership Card */}
          <div className="max-w-2xl mx-auto">
            <Card className="hover-lift group shadow-travel">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-travel-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Mr. Vikas Balyan</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With 9 years of experience in the tours and travel industry, Mr. Balyan brings 
                  operational excellence and strategic expertise to Lavish Journeys. His deep knowledge 
                  of travel logistics, customer relations, and destination management ensures seamless 
                  service delivery and exceptional client satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Company Values */}
          <div className="mt-16 text-center fade-in-up">
            <div className="bg-white p-8 rounded-2xl shadow-luxury max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-6">Our Leadership Principles</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-luxury-gold-foreground">E</span>
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Excellence</h4>
                  <p className="text-muted-foreground text-sm">Striving for perfection in every service</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-travel-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">I</span>
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Integrity</h4>
                  <p className="text-muted-foreground text-sm">Honest and transparent relationships</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">C</span>
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Care</h4>
                  <p className="text-muted-foreground text-sm">Genuine concern for every traveler</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;