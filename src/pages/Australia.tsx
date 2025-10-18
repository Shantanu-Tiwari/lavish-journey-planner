import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import VisaChecklist from "@/components/VisaChecklist";
import VisaContactForm from "@/components/VisaContactForm";
import { Globe } from "lucide-react";

const Australia = () => {
  const countries = [
    {
      name: "Australia",
      sections: [
        {
          title: "General Requirements for Tourist Visits",
          items: [
            "Valid passport (6 months from departure date)",
            "Request letter (mentioning purpose, duration, and sponsor)",
            "Three-year Income Tax Return",
            "Personal bank statement (last 6 months) with signature and stamp",
            "Aadhar Card and PAN Card (clearly visible)",
          ],
        },
        {
          title: "Businessmen",
          items: [
            "Three-year Income Tax Return",
            "Company bank statement (last 6 months) with signature and stamp by bank authority",
            "Proof of Company Registration/Memorandum/Partnership Deed",
          ],
        },
        {
          title: "Salaried Persons",
          items: [
            "3-month salary slip",
            "Leave Certificate & NOC from the Employer on company letterhead with seal & signed by authorized signatory",
            "Official ID Card / Visiting Card",
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
          title: "If Somebody is Inviting",
          items: [
            "Invitation letter (mentioning relation, personal details, and address)",
            "Passport Copy",
            "Financials (Bank statement and ITR)",
            "Rent Agreement",
          ],
        },
      ],
    },
    {
      name: "New Zealand",
      sections: [
        {
          title: "General Requirements for Tourist Visits",
          items: [
            "Valid passport (6 months from departure date)",
            "Recent passport-sized photographs (2)",
            "Request letter (mentioning purpose, duration, and sponsor)",
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
            "3-month salary slip",
            "Leave Certificate and NOC from Employer",
            "Office Id card",
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
          title: "Minor",
          items: [
            "Minor traveling alone or accompanied by one parent shall provide a notarized NOC by the not traveling parent, plus copies of parents passports or signature ID proof",
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
            <h1 className="text-5xl font-bold mb-4">Australia & Oceania Visa Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive visa requirements and checklists for Australia and New Zealand
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {countries.map((country, index) => {
              const pdfMap: Record<string, string> = {
                "Australia": "australia-checklist.pdf",
                "New Zealand": "newzealand-checklist.pdf",
              };
              return (
                <div key={index} id={country.name.toLowerCase().replace(/\s+/g, '-')}>
                  <VisaChecklist 
                    country={country.name} 
                    sections={country.sections}
                    pdfFileName={pdfMap[country.name]}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <VisaContactForm />
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Australia;
