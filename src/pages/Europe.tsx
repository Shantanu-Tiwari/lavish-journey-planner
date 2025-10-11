import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import VisaChecklist from "@/components/VisaChecklist";
import VisaContactForm from "@/components/VisaContactForm";
import { Globe } from "lucide-react";

const Europe = () => {
  const countries = [
    {
      name: "Italy",
      sections: [
        {
          title: "General Requirements for Tourist Visits",
          items: [
            "Valid passport (6 months from departure date) with previous passport",
            "Recent passport-sized photographs (2)",
            "Request letter (mentioning purpose, duration, and sponsor)",
            "Confirmed travel booking (hotel and flight) and insurance",
            "Three-year Income Tax Return",
            "Personal bank statement (last 6 months) with signature and stamp",
            "Aadhar Card and PAN Card (clearly visible)",
          ],
        },
        {
          title: "Businessmen",
          items: [
            "Three-year Income Tax Return",
            "Company bank statement (last 6 months)",
            "Proof of Company Registration/Memorandum/Partnership Deed",
          ],
        },
        {
          title: "Salaried Persons",
          items: [
            "6-month salary slip",
            "Leave Certificate and NOC from Employer",
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
          items: ["Invitation letter from an Italian company or authority"],
        },
      ],
    },
    {
      name: "France",
      sections: [
        {
          title: "For Tourist Visit",
          items: [
            "06 Months Valid Passport from the date of departure (Need to carry old passports if any)",
            "Two Latest passport size Photograph, white background size - 35 X 45 mm, face should be Cover on Photo 70%",
            "Request letter on the letter head or normal paper (mention purpose of visit, duration of stay, who will be pay your visit)",
            "Confirmed travel booking (Hotel & Flight) & Insurance",
            "Three Year Income Tax Return",
            "Personal bank Statement last 6 month with sign and stamp by the bank authority",
            "Aadhar Card & Pan Card (clearly visible)",
          ],
        },
        {
          title: "If PAX Traveling First Time",
          items: [
            "Fixed Deposits, Shares Certificates if any",
            "Property Papers",
          ],
        },
        {
          title: "If Businessman",
          items: [
            "Three year Income Tax Return",
            "Last 6 month bank statement of company – with Name & Address to be mention",
            "Proof of Company Registration / Memorandum / Partner Ship Deed",
          ],
        },
        {
          title: "If Salaried Person",
          items: [
            "3 Month salary slip",
            "Leave Certificate & NOC From The Employer",
          ],
        },
        {
          title: "If Student",
          items: [
            "Student /Dependant, consent from the parents/ spouse and their bank statement",
            "Student Id card copy",
            "School NOC",
          ],
        },
        {
          title: "Business Visit",
          items: ["Invitation letter from France (invitation in business purpose only)"],
        },
      ],
    },
    {
      name: "Germany",
      sections: [
        {
          title: "General Requirements for Tourist Visits",
          items: [
            "Valid passport (6 months from departure date)",
            "Recent passport-sized photographs (2)",
            "Request letter (mentioning purpose, duration, and sponsor)",
            "Confirmed travel booking (hotel and flight) and insurance",
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
            "Invitation letter from the business partner in German or English",
          ],
        },
      ],
    },
    {
      name: "Spain",
      sections: [
        {
          title: "For Tourist Visit",
          items: [
            "06 Months Valid Passport from the date of departure (Need to carry old passports if any)",
            "Two Latest passport size Photograph, white background size - 35 X 45 mm, face should be Cover on Photo 70%",
            "Request letter on the letter head or normal paper (mention purpose of visit, duration of stay, who will be pay your visit)",
            "Confirmed travel booking (Hotel & Flight) & Insurance",
            "Three Year Income Tax Return",
            "Personal bank Statement last 6 month with sign and stamp by the bank authority",
            "Aadhar Card & Pan Card (clearly visible)",
          ],
        },
        {
          title: "If PAX Traveling First Time",
          items: [
            "Fixed Deposits, Shares Certificates if any",
            "Property Papers",
          ],
        },
        {
          title: "If Businessman",
          items: [
            "Three year Income Tax Return",
            "Last 6 month bank statement of company – with Name & Address to be mention",
            "Proof of Company Registration / Memorandum / Partner Ship Deed",
          ],
        },
        {
          title: "If Salaried Person",
          items: [
            "3 Month salary slip",
            "Leave Certificate & NOC From The Employer",
          ],
        },
        {
          title: "If Student",
          items: [
            "Student /Dependant, consent from the parents/ spouse and their bank statement",
            "Student Id card copy",
            "School NOC",
          ],
        },
      ],
    },
    {
      name: "Switzerland",
      sections: [
        {
          title: "General Requirements for Tourist Visits",
          items: [
            "Valid passport (6 months from departure date) with previous passport",
            "Recent passport-sized photographs (2) not older than 6 months",
            "Request letter (mentioning purpose, duration, and sponsor)",
            "Confirmed travel booking (hotel and flight) and insurance",
            "Last three-year Income Tax Return",
            "Personal bank statement (last 6 months) with signature and stamped from bank",
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
          ],
        },
        {
          title: "Students",
          items: [
            "Consent from parents/spouse and their bank statement stamped by bank",
            "Student ID card copy",
            "School NOC",
          ],
        },
      ],
    },
    {
      name: "United Kingdom",
      sections: [
        {
          title: "UK Visitor Visa Requirements",
          items: [
            "06 Months Valid Passport from the date of departure (Need to carry old passports if any)",
            "Two Latest passport size Photograph, white background size - 35 X 45 mm, face should cover on Photo 70%",
            "The request letter drafted on the passenger's Letter Heads or normal paper (personal/official)",
            "Invitation letter from UK (invitation in business purpose only)",
            "Visa application forms duly filled & signed by Passenger",
            "01 copies of the PAN CARD (per person)",
            "Last Three-Years Income Tax Returns (Personal)",
            "Copy of International Credit card - Optional",
            "Last Six-Months Original Bank Statement (Personal) with Name & Address",
          ],
        },
        {
          title: "If Pax Are Traveling First Time",
          items: [
            "Fixed Deposits, Shares Certificates if any",
            "Property Papers",
          ],
        },
        {
          title: "If Businessmen",
          items: [
            "Proof of Company Registration / Memorandum / Partnership Deed",
            "Last Year Balance Sheet of Company",
            "Last Three-Years Income Tax Returns of Company",
            "Last Six-Months Original Bank Statement of Company, with Name & Address",
          ],
        },
        {
          title: "If Salaried Person",
          items: [
            "Last 3 month Salary Slip",
            "Leave Certificate & NOC From The Employer",
          ],
        },
      ],
    },
    {
      name: "Austria",
      sections: [
        {
          title: "General Requirements for Tourist Visits",
          items: [
            "Valid passport (6 months from departure date)",
            "Recent passport-sized photographs (2)",
            "Request letter (mentioning purpose, duration, and sponsor)",
            "Confirmed travel booking (hotel and flight) and insurance",
            "Three-year Income Tax Return",
            "Personal bank statement (last 6 months) with signature and stamp",
            "Aadhar Card and PAN Card (clearly visible)",
          ],
        },
        {
          title: "Businessmen",
          items: [
            "Three-year Income Tax Return",
            "Company bank statement (last 6 months)",
            "Proof of Company Registration/Memorandum/Partnership Deed",
          ],
        },
        {
          title: "Salaried Persons",
          items: [
            "3-month salary slip",
            "Leave Certificate and NOC from Employer",
            "Employment Contract",
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
      ],
    },
    {
      name: "Netherlands",
      sections: [
        {
          title: "General Requirements for Tourist Visits",
          items: [
            "Valid passport (6 months from departure date)",
            "Recent passport-sized photographs (2)",
            "Request letter (mentioning purpose, duration, and sponsor)",
            "Confirmed travel booking (hotel and flight) and insurance",
            "Three-year Income Tax Return",
            "Personal bank statement (last 6 months) with signature and stamp",
            "Aadhar Card and PAN Card (clearly visible)",
          ],
        },
        {
          title: "Businessmen",
          items: [
            "Three-year Income Tax Return",
            "Company bank statement (last 6 months sign & stamp)",
            "Proof of Company Registration/Memorandum/Partnership Deed",
          ],
        },
        {
          title: "Salaried Persons",
          items: [
            "3-month salary slip",
            "Leave Certificate and NOC from Employer",
            "Employment contract",
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
      ],
    },
    {
      name: "Czech Republic",
      sections: [
        {
          title: "General Requirements for Tourist Visits",
          items: [
            "Valid passport (6 months from departure date)",
            "Recent passport-sized photographs (2)",
            "Request letter (mentioning purpose, duration, and sponsor)",
            "Confirmed travel booking (hotel and flight) and insurance",
            "Three-year Income Tax Return",
            "Personal bank statement (last 6 months) with signature and stamp",
            "Aadhar Card and Pan Card (clearly visible)",
          ],
        },
        {
          title: "Businessmen",
          items: [
            "Three-year Income Tax Return",
            "Company bank statement (last 6 months)",
            "Proof of Company Registration/Memorandum/Partnership Deed",
          ],
        },
        {
          title: "Salaried Persons",
          items: [
            "3-month salary slip",
            "Leave Certificate and NOC from Employer",
            "Employment contract",
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
      ],
    },
    {
      name: "Russia",
      sections: [
        {
          title: "For Tourist Visit",
          items: [
            "06 Months Valid Passport from the date of departure (Need to carry old passports if any)",
            "Two Latest passport size Photograph, white background size – 2X2mm, face should be Cover on Photo 70%",
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
            "Last 6 month bank statement of company–with Name & Address to be mention",
            "Proof of Company Registration/Memorandum/Partner Ship Deed",
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
            "Student/Dependant, consent from the parents / spouse and their bank statement",
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
    {
      name: "Greece",
      sections: [
        {
          title: "General Requirements for Tourist Visits",
          items: [
            "Valid passport (6 months from departure date)",
            "Recent passport-sized photographs (2) not older than 6 months",
            "Request letter (mentioning purpose, duration, and sponsor)",
            "Confirmed travel booking (hotel and flight) and insurance",
            "Last three-year Income Tax Return",
            "Personal bank statement (last 6 months) with signature and stamped from bank",
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
          ],
        },
        {
          title: "Students",
          items: [
            "Consent from parents/spouse and their bank statement stamped by bank",
            "Student ID card copy",
            "School NOC",
          ],
        },
        {
          title: "Business Visits",
          items: [
            "Invitation letter from the business partner in Greece",
            "Planned activities and business relationship documentation",
            "Invitor's residency permit and identity card photocopies",
          ],
        },
        {
          title: "Sponsors",
          items: [
            "Proof of financial means if trip is sponsored by third party",
            "Sponsor's Bank Statement (last three months) with signature and stamp",
          ],
        },
      ],
    },
    {
      name: "Turkey",
      sections: [
        {
          title: "For Tourist Visit",
          items: [
            "06 Months Valid Passport from the date of departure (Need to carry old passports if any)",
            "Two Latest passport size Photograph, white background size – 2 X 2 mm, face should be Cover on Photo 70%",
            "Request letter on the letter head or normal paper (mention purpose of visit, duration of stay, who will be pay your visit)",
            "Confirmed travel booking (Hotel & Flight)",
            "Three Year Income Tax Return",
            "Personal bank Statement last 6 month balance 1 Lakh INR for per person with sign and stamp by the bank authority",
            "Aadhar Card & Pan Card (clearly visible)",
          ],
        },
        {
          title: "If Businessman",
          items: [
            "Three year Income Tax Return",
            "Last 6 month bank statement of company – with Name & Address to be mention",
            "Proof of Company Registration / Memorandum / Partner Ship Deed (Original notary attestation mandatory)",
          ],
        },
        {
          title: "If Salaried Person",
          items: [
            "Last three month salary slip",
            "Leave Certificate & NOC From The Employer",
            "Form 16",
          ],
        },
        {
          title: "If Student",
          items: [
            "Student / Dependant, consent from the parents/ spouse and their bank statement",
            "Student Id card copy",
            "School NOC",
          ],
        },
        {
          title: "If Retired",
          items: [
            "Retirement Documents & Income Proof along with last three month bank statement with 1 Lakh INR",
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
            <h1 className="text-5xl font-bold mb-4">Europe Visa Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive visa requirements and checklists for European countries
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {countries.map((country, index) => (
              <div key={index} id={country.name.toLowerCase().replace(/\s+/g, '-')}>
                <VisaChecklist country={country.name} sections={country.sections} />
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

export default Europe;
