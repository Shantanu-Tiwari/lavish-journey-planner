import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface ChecklistSection {
  title: string;
  items: string[];
}

interface VisaChecklistProps {
  country: string;
  sections: ChecklistSection[];
}

const VisaChecklist = ({ country, sections }: VisaChecklistProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">{country} Visa Requirements</CardTitle>
        <CardDescription>Please ensure all documents are prepared before applying</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {sections.map((section, index) => (
          <div key={index} className="space-y-3">
            <h3 className="font-semibold text-lg text-primary">{section.title}</h3>
            <ul className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default VisaChecklist;
