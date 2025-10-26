import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Globe, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const subject = "Travel Inquiry from Website";
      const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AMessage: ${formData.message}`;
      const mailtoLink = `mailto:info@lavishjourneys.in?subject=${encodeURIComponent(subject)}&body=${body}`;
      
      window.location.href = mailtoLink;
      
      toast({
        title: "Opening Email Client",
        description: "Your default email client will open with the inquiry details.",
      });
      
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border border-current rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-current rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-current rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Ready to embark on your next adventure? Contact us today and let's start planning 
              your perfect journey together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="fade-in-up">
              <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-luxury-gold-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Address</h4>
                    <p className="text-primary-foreground/80">
                      102, Sector - 9, 1st Floor, SRBC Tower,<br />
                      Vasundhara, Ghaziabad, U.P.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-travel-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone Numbers</h4>
                    <div className="text-primary-foreground/80 space-y-1">
                      <p>+91 99585 30029</p>
                      <p>+91 92114 47558</p>
                      <p>+91 92114 47559</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-primary-foreground/80">info@lavishjourneys.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-destructive rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Website</h4>
                    <p className="text-primary-foreground/80">www.lavishjourneys.in</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="hover-lift"
                  onClick={() => window.open('https://wa.me/919958530029', '_blank')}
                >
                  <MessageCircle className="mr-2" />
                  WhatsApp Us
                </Button>
                <Button 
                  variant="ghost-white" 
                  size="lg" 
                  className="hover-lift"
                  onClick={() => window.location.href = 'tel:+919958530029'}
                >
                  <Phone className="mr-2" />
                  Call Now
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="fade-in-up">
              <Card className="bg-white/10 border-white/20 shadow-gold">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-white mb-2 block">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-white mb-2 block">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-white mb-2 block">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                        placeholder="+91 12345 67890"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-white mb-2 block">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60 min-h-[120px]"
                        placeholder="Tell us about your travel plans..."
                      />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full hover-lift">
                      <Send className="mr-2" />
                      Send Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;