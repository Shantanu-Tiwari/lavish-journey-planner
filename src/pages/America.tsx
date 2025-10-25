import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import VisaContactForm from "@/components/VisaContactForm";
import { Globe } from "lucide-react";

const America = () => {
  const countries = [
    {
      name: "Canada",
      sections: [
        {
          title: "General Requirements",
          items: [
            "Valid Passport: At least six months' validity beyond departure from Canada",
            "Previous Passport: If available",
            "Passport-Sized Photographs: Three latest (45x55mm, white background, face covering 80%)",
            "Request Letter: To 'The Visa Officer, Canadian High Commission, New Delhi' mentioning purpose, duration, and expenses",
            "PAN Card Copy",
            "Income Tax Returns: Last three years' personal income tax returns",
            "International Credit Card Copy",
            "Bank Statement: Last six months' original personal bank statement with name, address, sign, and stamp",
          ],
        },
        {
          title: "Businessmen",
          items: [
            "Proof of Company Registration: Memorandum/Partnership Deed",
            "Company's Last Year Balance Sheet",
            "Company's Last Three Years Income Tax Returns",
            "Company Bank Statement: Last six months' with name, address, sign, and stamp",
          ],
        },
        {
          title: "Salaried Persons",
          items: [
            "Last Three Months Salary Slip",
            "Leave Certificate and NOC from Employer",
            "Office ID Card",
          ],
        },
        {
          title: "Children Traveling with Parents",
          items: [
            "School or College ID Card",
            "NOC or Leave Letter from School or College",
            "Aadhar card",
          ],
        },
        {
          title: "Requirements for Those Being Invited",
          items: [
            "Invitation Letter: Mentioning relation, personal details, and contact details",
            "Passport and Valid Visa Copy",
            "Resident Card",
            "Offer Letter from Employer",
            "Six Months Bank Statement and Tax Papers",
          ],
        },
      ],
    },
    {
      name: "Brazil",
      sections: [
        {
          title: "General Requirements for Tourist Visits",
          items: [
            "Valid passport (6 months from departure date) with previous passport",
            "Recent passport-sized photographs (2) 35*45 mm",
            "Request letter (mentioning purpose, duration, and sponsor)",
            "Confirmed travel booking (hotel and flight)",
            "Three-year Income Tax Return",
            "Personal bank statement (last 6 months) with signature and stamp",
            "Aadhar Card and PAN Card (clearly visible)",
          ],
        },
        {
          title: "Businessmen",
          items: [
            "Three-year Income Tax Return",
            "Company bank statement (last 6 months) with name and address",
            "Proof of Company Registration/Memorandum/Partnership Deed",
          ],
        },
        {
          title: "Salaried Persons",
          items: [
            "6-month salary slip",
            "Leave Certificate and NOC from Employer",
            "Office ID card",
          ],
        },
        {
          title: "Students",
          items: [
            "Consent from parents/spouse and their bank statement",
            "Student ID card copy",
            "School NOC",
          ],
        },
        {
          title: "Business Visits",
          items: [
            "Invitation letter from the business partner in Brazil",
            "Planned activities and business relationship documentation",
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
            <h1 className="text-5xl font-bold mb-4">Americas Visa Requirements</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete checklist of documents required for North and South American visa applications
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

export default America;
