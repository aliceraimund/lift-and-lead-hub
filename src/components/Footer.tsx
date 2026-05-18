import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { EMAIL, PHONE_DISPLAY, WHATSAPP_DISPLAY, whatsappUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#1A1A1A] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4 md:px-8">
        <div>
          <Logo light large />
          <p className="mt-5 text-sm text-white/60">
            Locação, compra e venda de empilhadeiras.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/70">Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[var(--brand-blue)]">Home</Link></li>
            <li><Link to="/" hash="servicos" className="hover:text-[var(--brand-blue)]">Serviços</Link></li>
            <li><Link to="/" hash="contato" className="hover:text-[var(--brand-blue)]">Contato</Link></li>
            <li><Link to="/sobre" className="hover:text-[var(--brand-blue)]">Sobre Nós</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/70">Contato</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Tel: {PHONE_DISPLAY}</li>
            <li>
              <a href={whatsappUrl("Olá DJ Rent!")} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--brand-blue)]">
                WhatsApp: {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>{EMAIL}</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/70">Endereço</h4>
          <p className="text-sm text-white/80">
            Alameda Terracota, 215, Torre Union, Sala 802<br />São Caetano do Sul, SP<br />CEP 09531-190
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-white/50 md:px-8">
          © 2025 DJ Rent. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
