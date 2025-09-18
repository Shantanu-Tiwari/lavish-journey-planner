import { Card, CardContent } from "@/components/ui/card";
import { Award, Users } from "lucide-react";
import leadershipOfficeImage from "@/assets/leadership-office.jpg";

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

          {/* Office Image */}
          <div className="mb-12 fade-in">
            <div className="relative max-w-2xl mx-auto">
              <img 
                src={leadershipOfficeImage} 
                alt="The Lavish Journeys leadership team office" 
                className="rounded-2xl shadow-luxury w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Leadership Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Proprietor */}
            <Card className="hover-lift group shadow-travel">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-12 h-12 text-luxury-gold-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Mrs. Shagun Sirohi</h3>
                <p className="text-luxury-gold font-semibold mb-4 text-lg">Proprietor</p>
                <p className="text-muted-foreground leading-relaxed">
                  With extensive experience in the travel industry, Mrs. Sirohi leads our company 
                  with a vision of transforming travel dreams into reality. Her commitment to 
                  excellence ensures every client receives personalized, premium service.
                </p>
              </CardContent>
            </Card>

            {/* Manager */}
            <Card className="hover-lift group shadow-travel">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-travel-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Mr. Vikas Balyan</h3>
                <p className="text-travel-blue font-semibold mb-4 text-lg">Manager</p>
                <p className="text-muted-foreground leading-relaxed">
                  Mr. Balyan brings operational excellence and strategic oversight to our daily 
                  operations. His expertise in travel logistics and customer relations ensures 
                  seamless service delivery and client satisfaction.
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