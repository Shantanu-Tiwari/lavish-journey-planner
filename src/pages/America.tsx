import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import VisaContactForm from "@/components/VisaContactForm";
import { Globe } from "lucide-react";

const America = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
              <Globe className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-5xl font-bold mb-4">America Visa Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive visa requirements and checklists for American countries
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8">
              Visa checklists for American countries will be added soon. Contact us for assistance with your America travel visa requirements.
            </p>
          </div>
        </div>
      </section>

      <VisaContactForm />
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default America;
