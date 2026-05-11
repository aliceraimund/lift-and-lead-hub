import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { whatsappUrl } from "@/lib/whatsapp";

export function Header() {
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link to="/" aria-label="DJ Rent home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setServices(true)}
            onMouseLeave={() => setServices(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-[var(--brand-blue)]">
              Serviços <ChevronDown className="h-4 w-4" />
            </button>
            {services && (
              <div className="absolute left-0 top-full w-52 rounded-lg border border-border bg-card p-2 shadow-[var(--shadow-card)]">
                <Link
                  to="/"
                  hash="servicos"
                  className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-secondary"
                >
                  Aluguel de Empilhadeiras
                </Link>
                <Link
                  to="/"
                  hash="servicos"
                  className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-secondary"
                >
                  Compra e Venda
                </Link>
              </div>
            )}
          </div>
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
            <Link to="/" hash="servicos" onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-medium">
              Aluguel de Empilhadeiras
            </Link>
            <Link to="/" hash="servicos" onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-medium">
              Compra e Venda
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
