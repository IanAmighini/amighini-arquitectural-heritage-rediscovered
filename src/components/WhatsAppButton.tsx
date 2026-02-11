import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5491100000000"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-accent text-accent-foreground flex items-center justify-center rounded-full shadow-luxury hover:bg-bronze-light transition-colors duration-300 hover:scale-110 transform"
  >
    <MessageCircle size={24} />
  </a>
);

export default WhatsAppButton;
