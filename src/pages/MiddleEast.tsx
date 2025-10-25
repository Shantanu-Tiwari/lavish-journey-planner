import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import VisaContactForm from "@/components/VisaContactForm";
import { Globe } from "lucide-react";

const MiddleEast = () => {
  const countries = [
    {
      name: "Dubai (UAE)",
      sections: [
        {
          title: "For Tourist Visit",
          items: [
            "06 Months Valid Passport from the date of departure (Need to carry old passports if any)",
            "Two Latest passport size Photograph, white background size –2X2 mm, face should be Cover on Photo 70%",
            "Pan Card Copy",
            "Confirmed travel booking (Hotel & Flight)",
          ],
        },
        {
          title: "For Business Visit",
          items: [
            "Invitation Letter from the Inviting company",
            "Letter of Guarantee, from the inviting company",
            "Certified copy of the incorporation register or an overview of company",
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
              <Globe className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-5xl font-bold mb-4">Middle East Visa Requirements</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete checklist of documents required for Middle East visa applications
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {countries.map((country, index) => (
              <div key={index}>
                {country.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="mb-6">
                    <h2 className="text-2xl font-semibold text-primary mb-4">{section.title}</h2>
                    <ul className="space-y-2 ml-4">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <VisaContactForm />
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MiddleEast;
