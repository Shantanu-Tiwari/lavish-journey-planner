import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919958530029";
    const message = "Hi! I'm interested in your travel services. Could you please help me?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-pulse">
      <Button
        onClick={handleWhatsAppClick}
        className="w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#1fb855] text-white shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        size="icon"
      >
        <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
        <span className="sr-only">Contact us on WhatsApp</span>
      </Button>
      
      {/* Pulse animation rings */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
      <div className="absolute inset-2 rounded-full bg-[#25D366] animate-ping opacity-30 animation-delay-75"></div>
    </div>
  );
};

export default WhatsAppButton;