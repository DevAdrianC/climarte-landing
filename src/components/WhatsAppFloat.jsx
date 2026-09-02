import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../data/links";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener"
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-5 right-5 z-20 flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_24px_-8px_rgba(37,211,102,0.6)] active:scale-95 transition-transform"
    >
      <MessageCircle size={26} fill="white" stroke="#25D366" />
    </a>
  );
}
