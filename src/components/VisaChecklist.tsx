import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ChecklistSection {
  title: string;
  items: string[];
}

interface VisaChecklistProps {
  country: string;
  sections: ChecklistSection[];
}

const VisaChecklist = ({ country, sections }: VisaChecklistProps) => {
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: "Download Request",
      description: "Please contact us at +91 99585 30029 or info@lavishjourneys.in to receive the complete checklist.",
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <div>
            <CardTitle className="text-2xl">{country} Visa Requirements</CardTitle>
            <CardDescription>Please ensure all documents are prepared before applying</CardDescription>
          </div>
          <Button onClick={handleDownload} variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download Checklist
          </Button>
        </div>
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
