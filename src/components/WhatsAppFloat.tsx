import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl("Olá DJ Rent! Gostaria de solicitar um orçamento")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--whatsapp)] text-white shadow-[var(--shadow-cta)] transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute -inset-1 -z-10 animate-ping rounded-full bg-[var(--whatsapp)] opacity-30" />
    </a>
  );
}
