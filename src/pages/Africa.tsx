import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import VisaContactForm from "@/components/VisaContactForm";
import { Globe } from "lucide-react";

const Africa = () => {
  const countries = [
    {
      name: "Ghana",
      sections: [
        {
          title: "Basic Requirements",
          items: [
            "Completed Form: One set, duly completed",
            "Passport Photo: One recent, passport-size",
            "Air Ticket: Confirmed, return/onward journey",
            "Yellow Fever Vaccination: Certificate required",
            "Covering Letter: Introduction letter from applicant",
            "Visa Fee: Banker's Draft in favor of 'Ghana High Commission, New Delhi'",
            "Draft Photocopy: One photocopy of the draft",
            "ID Proof: Copy of ID proof of reference in Ghana",
            "Original Invitation Letter: From host in Ghana (not scanned, faxed, or emailed)",
            "Invitation Letter Copy: Host to fax or email a copy to the Ghana High Commission",
          ],
        },
        {
          title: "Tourist/Short Visit Visa",
          items: [
            "Hotel Reservation: If not hosted by person sending invitation",
            "Covering Letter: From employer of person inviting the applicant",
            "Undertaking: Host to ensure visitor complies with immigration laws",
            "Birth Certificate: For child traveling with parent(s)",
            "Marriage Certificate: If accompanying/joining spouse in Ghana",
            "Letter of Introduction: From school (for students)",
          ],
        },
        {
          title: "Business Visa",
          items: [
            "Covering Letter: From employer of the applicant",
            "Undertaking: Host to ensure visitor complies with immigration laws",
            "Passport Copies: Relevant pages of passport of alien inviting businessman",
            "Correspondence: With company/companies in Ghana or supporting documents",
          ],
        },
      ],
    },
    {
      name: "South Africa",
      sections: [
        {
          title: "For Tourist Visit",
          items: [
            "06 Months Valid Passport from the date of departure (Need to carry old passports if any)",
            "Two Latest passport size Photograph, white background size –2X2mm, face should be Cover on Photo 70%",
            "Request letter on the letterhead or normal paper (mention purpose of visit, duration of stay, who will be pay your visit)",
            "Detailed Itinerary",
            "Confirmed travel booking (Hotel & Flight)",
            "Three Year Income Tax Return",
            "Personal bank statement last 6 month with sign and stamp by the bank authority",
          ],
        },
        {
          title: "If Businessman",
          items: [
            "Three year Income Tax Return",
            "Last 6 month bank statement of company – with Name & Address to be mention",
            "Proof of Company Registration/Memorandum/Partnership Deed",
          ],
        },
        {
          title: "If Salaried Person",
          items: [
            "Last three month salary slip",
            "Leave Certificate & NOC From The Employer",
          ],
        },
        {
          title: "If Student",
          items: [
            "Student/Dependant, consent from the parents/spouse and their bank statement",
            "Student Id card copy",
            "School NOC",
          ],
        },
        {
          title: "For Business Visit",
          items: [
            "Invitation Letter from the Inviting company",
            "Letter of Guarantee, from the inviting company",
            "A certified copy of the incorporation register or an overview of company",
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
            <h1 className="text-5xl font-bold mb-4">Africa Visa Requirements</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete checklist of documents required for African visa applications
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

export default Africa;
