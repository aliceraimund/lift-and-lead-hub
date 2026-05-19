import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { whatsappUrl } from "@/lib/whatsapp";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link to="/" aria-label="DJ Rent home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className="text-sm font-medium text-foreground hover:text-[var(--brand-blue)]">
            Home
          </Link>
          <Link to="/" hash="servicos" className="text-sm font-medium text-foreground hover:text-[var(--brand-blue)]">
            Serviços
          </Link>
          <Link to="/" hash="contato" className="text-sm font-medium text-foreground hover:text-[var(--brand-blue)]">
            Contato
          </Link>
          <Link to="/sobre" className="text-sm font-medium text-foreground hover:text-[var(--brand-blue)]">
            Sobre Nós
          </Link>
          <a
            href={whatsappUrl("Olá DJ Rent! Gostaria de solicitar um orçamento")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--brand-blue)] px-5 py-2 text-sm font-semibold text-white shadow-[var(--shadow-cta)] transition-colors hover:bg-[var(--brand-blue-dark)]"
          >
            Solicitar Orçamento
          </a>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col gap-1 p-4">
            <Link to="/" onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-medium">
              Home
            </Link>
            <Link to="/" hash="servicos" onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-medium">
              Serviços
            </Link>
            <Link to="/" hash="contato" onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-medium">
              Contato
            </Link>
            <Link to="/sobre" onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-medium">
              Sobre Nós
            </Link>
            <a
              href={whatsappUrl("Olá DJ Rent! Gostaria de solicitar um orçamento")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-[var(--brand-blue)] px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
