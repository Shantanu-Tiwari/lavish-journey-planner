import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import VisaChecklist from "@/components/VisaChecklist";
import VisaContactForm from "@/components/VisaContactForm";
import { Globe } from "lucide-react";

const Asia = () => {
  const countries = [
    {
      name: "Vietnam",
      sections: [
        {
          title: "For Tourist Visit",
          items: [
            "06 Months Valid Passport from the date of departure (Need to carry old passports if any)",
            "Two Latest passport size Photograph, white background size –2X2 mm, face should be Cover on Photo 70%",
            "Request letter on the letterhead or normal paper (mention purpose of visit, duration of stay, who will be pay your visit)",
            "Detailed Itinerary",
            "Confirmed travel booking (Hotel & Flight)",
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
          ],
        },
      ],
    },
    {
      name: "South Korea",
      sections: [
        {
          title: "For Tourist Visit",
          items: [
            "06 Months Valid Passport from the date of departure (Need to carry old passports if any)",
            "Two Latest passport size Photograph, white background size - 35 X 45mm, face should be Cover on Photo 70%",
            "Request letter on the letter head or normal paper (mention purpose of visit, duration of stay, who will be pay your visit)",
            "Confirmed travel booking (Hotel & Flight)",
            "Three Year Income Tax Return",
            "Personal bank Statement last 6 month with sign and stamp by the bank authority",
            "Aadhar Card & Pan Card (clearly visible)",
            "Health condition form",
          ],
        },
        {
          title: "If Businessman",
          items: [
            "Three year Income Tax Return",
            "Last 6 month bank statement of company – with Name & Address to be mentioned",
            "Proof of Company Registration / Memorandum / Partnership Deed",
          ],
        },
        {
          title: "If Salaried Person",
          items: [
            "One year month salary slip",
            "Leave Certificate & NOC From The Employer",
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
          title: "For Business Visit",
          items: [
            "Invitation letter from South Korea",
            "Copy of Business Registration of Korean Company",
          ],
        },
        {
          title: "For Inviting Family & Friend",
          items: [
            "Invitation letter from South Korea",
            "Alien Registration Card of Inviter",
            "Copy of Passport of Inviter",
          ],
        },
      ],
    },
    {
      name: "Singapore",
      sections: [
        {
          title: "Tourist Visit",
          items: [
            "Passport: Original Passport with two blank pages and it should be valid for at least 6 months from the date of travel",
            "Photograph: Two matt-finished, colored photographs with white background. It should be an 80% face close up and 35mm x 45mm in size. The photograph should not be older than 3 months. 01 Photo should be pasted and cross signed",
            "Application Form: A Visa Application Form that is completely filled and signed by the Applicant",
            "Cover Letter: Covering letter from Applicant addressed to 'The Visa Consular, Singapore High Commission, New Delhi' stating name of the applicant, designation, nationality, passport number, purpose of visit, period of stay with dates and saying that all the expenses including medical, boarding and lodging will be borne by the Applicant",
            "Employment proof",
            "Air ticket",
            "Hotel booking",
            "Financial Statement: Updated Bank Statement of Last 03 months",
            "Address Proof if Passport is issued from any other Jurisdiction (Any two of these - Current Electricity bill, Landline bill, Agreement copy of Flat, Rent Agreement, Aadhaar Card Copy)",
          ],
        },
        {
          title: "Photo Guidelines",
          items: [
            "Taken within the last 3 months",
            "Clear and in focus, 35mm wide by 45mm high, without any borders",
            "In colour taken against a plain white background without shadows",
            "Avoid white headgear and plain white clothing",
            "Full face with the upper shoulders visible, facing forward with eyes open",
            "Hair must not cover the eyebrows or the eyes",
            "Even exposure (must not be taken under direct lighting)",
            "Spectacle frames must not cover part of the eyes",
            "Spectacle lenses must not reflect or glare",
          ],
        },
      ],
    },
    {
      name: "Japan",
      sections: [
        {
          title: "For Tourist Visit",
          items: [
            "06 Months Valid Passport from the date of departure (Need to carry old passports if any)",
            "Two Latest passport size Photograph, white background size – 2 X 2mm, face should be Cover on Photo 70%",
            "Request letter on the letter head or normal paper (mention purpose of visit, duration of stay, who will pay for your visit)",
            "Detailed Itinerary",
            "Confirmed travel booking (Hotel & Flight)",
            "Three Year Income Tax Return",
            "Personal bank statement last 6 months with sign and stamp by the bank authority",
          ],
        },
        {
          title: "If Businessman",
          items: [
            "Three year Income Tax Return",
            "Last 6 month bank statement of company – with Name & Address to be mentioned",
            "Proof of Company Registration / Memorandum / Partnership Deed",
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
            "Student / Dependant, consent from the parents/spouse and their bank statement",
            "Student ID card copy",
            "School NOC",
          ],
        },
        {
          title: "For Business Visit",
          items: [
            "Invitation Letter from the Inviting company",
            "Letter of Guarantee, from the inviting company",
            "A certified copy of the incorporation register or an overview of the company",
          ],
        },
      ],
    },
    {
      name: "Cambodia",
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
            "Personal bank statement last 6 month with signature stamp by the bank authority",
          ],
        },
        {
          title: "If Businessman",
          items: [
            "Three year Income Tax Return",
            "Last 6 month bank statement of company – with Name & Address to be mention",
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
    {
      name: "China (Z Visa - Work Visa)",
      sections: [
        {
          title: "General Requirements",
          items: [
            "Valid Passport: Minimum six months' validity and at least two blank visa pages",
            "Chinese Visa Application Form: Completely filled online",
            "Passport-Sized Photograph: One colored photograph with a white background (48mm x 33mm)",
            "Covering Letter: Typed formal letter addressed to the Chinese Embassy, including company profile, applicant's name, passport number, purpose of travel, and travel plan",
            "Passport Copies: Photo copies of the passport's front data page, last page, and earlier traveled Chinese visa copies",
          ],
        },
        {
          title: "Additional Requirements",
          items: [
            "Physical Examination Record: Original and photocopy issued by an Indian or Chinese government hospital, with stamped photo and signed by authorized doctor (valid for 3 months)",
            "Employment Approval Document: Original and copy of the Notification Letter issued by the Ministry of Human Resources and Social Security of the People's Republic of China",
            "If the applicant has a valid Work Permit: invitation letter from employer, copy of valid Work Permit, and detailed list obtained by scanning QR code on Work Permit ID card",
            "Qualification Certificates: Photocopies of professional and educational qualification certificates",
          ],
        },
      ],
    },
    {
      name: "China (S1 Visa - Long Stay)",
      sections: [
        {
          title: "General Requirements",
          items: [
            "Valid Passport: Minimum six months' validity and at least two blank visa pages",
            "Chinese Visa Application Form: Completely filled online",
            "Passport-Sized Photograph: One colored photograph with a white background (48mm x 33mm)",
            "Covering Letter: Typed formal letter addressed to the Chinese Embassy, including company profile, name, passport number, purpose of travel, and travel plan",
            "Passport Copies: Photocopies of the passport's front data page, last page, and earlier traveled Chinese visa copies",
          ],
        },
        {
          title: "Additional Requirements",
          items: [
            "Relationship Proof Certificate: Original and copy (birth certificate, marriage certificate, adoption certificate, or other relevant documents)",
            "Invitation Letter: From main applicant inviting and staying on Z visa in China (copy of passport, valid Residence Permit, Work Permit)",
            "Physical Examination Record: Original and photocopy issued by an Indian or Chinese government hospital, with stamped photo and signed by authorized doctor (valid for 3 months)",
            "Attested Affidavit: From China Embassy, if relationship proof document does not match passport details",
          ],
        },
        {
          title: "Important Notes",
          items: [
            "Arrange all documents according to the checklist",
            "Schedule an appointment via email before submitting application at Delhi center",
            "S1 Visa is for family members of foreigners staying in China or for personal matters (stay over 180 days)",
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
            <h1 className="text-5xl font-bold mb-4">Asia Visa Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive visa requirements and checklists for Asian countries
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

export default Asia;
