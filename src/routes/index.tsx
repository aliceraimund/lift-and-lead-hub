import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Truck, Forklift, BadgeDollarSign, Handshake, Zap, ShieldCheck, Clock, Sparkles,
  Phone, MapPin, Mail, MessageCircle, ChevronDown, CheckCircle2, FileText,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { whatsappUrl, WHATSAPP_DISPLAY, PHONE_DISPLAY, EMAIL } from "@/lib/whatsapp";
import heroImg from "@/assets/images/hero-bg.png";
import logoWhite from "@/assets/images/logo-white.png";
import djSymbol from "@/assets/images/dj-symbol.png";
import electricImg from "@/assets/images/forklift-electric-toyota.png";
import combustionImg from "@/assets/images/forklift-combustion-toyota.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DJ Rent: Aluguel e Venda de Empilhadeiras em São Paulo" },
      { name: "description", content: "Locação, compra e venda de empilhadeiras elétricas e à combustão. Atuação no estado de São Paulo com foco na região metropolitana. Solicite orçamento via WhatsApp." },
      { property: "og:title", content: "DJ Rent: Empilhadeiras para Aluguel e Venda" },
      { property: "og:description", content: "Soluções de movimentação de carga para sua empresa. Frota moderna, entrega rápida e preços competitivos." },
    ],
  }),
  component: Home,
});

const faqs = [
  { q: "Qual é o prazo mínimo de aluguel?", a: "Oferecemos total flexibilidade em períodos de locação. Você pode alugar por dias, semanas, meses ou períodos customizados conforme sua necessidade operacional. Não temos prazo mínimo rígido; adequamos a solução ao seu cronograma." },
  { q: "Vocês oferecem empilhadeiras elétricas e à combustão?", a: "Sim, oferecemos ambas as opções. As elétricas são ideais para ambientes internos com maior preocupação ambiental; as à combustão oferecem maior potência para operações pesadas e ambientes externos. Avaliamos sua operação e recomendamos o melhor equipamento." },
  { q: "Como funciona o processo de aluguel?", a: "É simples: entre em contato informando suas necessidades (tipo de carga, altura de elevação, período). Nossa equipe avalia o melhor equipamento e elabora uma proposta detalhada. Após aprovação, realizamos a entrega rápida com toda a documentação." },
  { q: "Como funciona o processo de compra?", a: "Entre em contato informando suas necessidades e preferências. Nosso time avaliará o melhor equipamento para sua operação e apresentará opções de máquinas novas e usadas. Negociamos os melhores termos e finalizamos toda a documentação." },
  { q: "Qual é o horário de atendimento?", a: "Segunda a sexta-feira, das 8h às 18h. Fora desse horário, deixe sua mensagem no WhatsApp ou email que respondemos assim que possível." },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Benefits />
      <FAQ />
      <FinalCTA />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={heroImg}
        alt="Empilhadeira Toyota em operação"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-28 md:px-8 md:py-40">
        <img src={logoWhite} alt="DJ Rent" className="h-32 w-auto md:h-44 self-start" />
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-white backdrop-blur">
          <ShieldCheck className="h-3.5 w-3.5" /> Mais de 10 anos de experiência
        </span>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.8)" }}>
          Empilhadeiras para<br />
          <span className="text-[var(--brand-blue)]">Locação e Venda</span>
        </h1>
        <p className="max-w-2xl text-lg text-white/85 md:text-xl" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.8)" }}>
          Soluções completas de movimentação de carga para sua empresa.<br />
          Frota moderna, entrega rápida e preços competitivos.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={whatsappUrl("Olá DJ Rent! Gostaria de solicitar um orçamento para aluguel/compra de empilhadeiras")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-blue)] px-7 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-cta)] transition-all hover:bg-[var(--brand-blue-dark)] hover:translate-y-[-1px]"
          >
            <MessageCircle className="h-4 w-4" /> Solicitar Orçamento
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white hover:text-foreground"
          >
            Fale Conosco
          </a>
        </div>
        <div className="mt-6 flex items-center gap-3 text-white/80">
          <Phone className="h-4 w-4 text-[var(--brand-blue)]" />
          <span className="text-sm">WhatsApp: <strong className="text-white">{WHATSAPP_DISPLAY}</strong></span>
        </div>
      </div>
    </section>
  );
}

function About() {
  const items = [
    { icon: Forklift, title: "Frota Moderna e Diversificada", desc: "Empilhadeiras elétricas e à combustão para cada necessidade." },
    { icon: Zap, title: "Soluções Flexíveis e Rápidas", desc: "Contratos sob medida: diários, semanais ou mensais." },
    { icon: BadgeDollarSign, title: "Preços Competitivos", desc: "Os melhores preços do estado de São Paulo." },
  ];
  return (
    <section id="sobre" className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-blue)]">Quem Somos</p>
        <h2 className="mt-3 text-3xl md:text-4xl">Sua parceira em movimentação de carga</h2>
        <p className="mt-4 text-base leading-relaxed text-[var(--brand-steel)]">
          A DJ Rent é sua parceira confiável em soluções de movimentação. Com mais de 10 anos de experiência, oferecemos locação, compra e venda de empilhadeiras elétricas e à combustão para empresas de todos os tamanhos, com atuação no estado de São Paulo e foco na região metropolitana.
        </p>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="group rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-[var(--brand-blue)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-blue)]/10 text-[var(--brand-blue)]">
              <it.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--brand-steel)]">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const cards = [
    {
      img: electricImg, icon: Truck, title: "Aluguel de Empilhadeiras",
      desc: "Locação flexível de curto ou longo prazo.",
      benefits: ["Empilhadeiras elétricas e à combustão", "Sem investimento inicial", "Entrega rápida"],
      cta: "Solicitar Aluguel",
      msg: "Olá DJ Rent! Tenho interesse em alugar uma empilhadeira.",
    },
    {
      img: combustionImg, icon: FileText, title: "Compra e Venda",
      desc: "Equipamentos novos e usados em perfeito estado.",
      benefits: ["Máquinas em perfeito estado", "Elétricas e à combustão", "Condições flexíveis"],
      cta: "Consultar Disponibilidade",
      msg: "Olá DJ Rent! Gostaria de consultar disponibilidade para compra de empilhadeira.",
    },
  ];
  return (
    <section id="servicos" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-blue)]">Nossos Serviços</p>
          <h2 className="mt-3 text-3xl md:text-4xl">O que oferecemos</h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {cards.map((c) => (
            <div key={c.title} className="group overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
              <div className="relative h-56 overflow-hidden">
                <img src={c.img} alt={c.title} loading="lazy" width={1280} height={896} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-blue)] text-white shadow-[var(--shadow-cta)]">
                  <c.icon className="h-5 w-5" />
                </div>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-bold">{c.title}</h3>
                <p className="mt-2 text-[var(--brand-steel)]">{c.desc}</p>
                <ul className="mt-5 space-y-2.5">
                  {c.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-blue)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappUrl(c.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--brand-blue)] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-cta)] transition-colors hover:bg-[var(--brand-blue-dark)]"
                >
                  <MessageCircle className="h-4 w-4" /> {c.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const items = [
    { icon: Truck, title: "Entrega Rápida", desc: "Logística ágil para sua operação não parar." },
    { icon: BadgeDollarSign, title: "Preços Competitivos", desc: "Os melhores da região." },
    { icon: Handshake, title: "Confiança e Experiência", desc: "Mais de 10 anos no mercado, com relacionamento duradouro." },
    { icon: Zap, title: "Diversidade de Equipamentos", desc: "Elétricas e à combustão para todo tipo de operação." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-blue)]">Por que escolher a DJ Rent?</p>
        <h2 className="mt-3 text-3xl md:text-4xl">Razões para confiar em nós</h2>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <div key={it.title} className="relative rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all hover:border-[var(--brand-blue)] hover:shadow-[var(--shadow-cta)]">
            <span className="absolute right-5 top-5 text-5xl font-bold text-[var(--brand-blue)]/10">0{i + 1}</span>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-blue-dark)] text-white shadow-[var(--shadow-cta)]">
              <it.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--brand-steel)]">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Benefits() {
  const pillars = [
    {
      icon: Zap, title: "Eficiência e Produtividade",
      items: ["Frota moderna elétrica e à combustão", "Equipamentos testados e em perfeito funcionamento", "Entrega rápida para sua operação", "Equipamento ideal para sua necessidade"],
    },
    {
      icon: ShieldCheck, title: "Segurança e Confiabilidade",
      items: ["Equipamentos certificados e regulamentados", "Máquinas inspecionadas regularmente", "Garantia de qualidade em cada operação", "Parceria comprovada com diversos clientes"],
    },
    {
      icon: Sparkles, title: "Flexibilidade e Economia",
      items: ["Locação sob medida (dia/semana/mês)", "Sem custos de aquisição e manutenção", "Pague apenas pelo que usar", "Soluções para demandas sazonais"],
    },
  ];
  return (
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-blue)]">Vantagens</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Benefícios de alugar com a DJ Rent</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl bg-card p-8 shadow-[var(--shadow-card)] border border-border">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-blue-dark)] text-white">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{p.title}</h3>
              <ul className="mt-5 space-y-3">
                {p.items.map((i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--brand-graphite)]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-blue)]" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-4xl px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-blue)]">FAQ</p>
        <h2 className="mt-3 text-3xl md:text-4xl">Dúvidas frequentes</h2>
      </div>
      <div className="mt-12 space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="overflow-hidden rounded-xl border border-border bg-card">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-semibold text-foreground">{f.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-[var(--brand-blue)] transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && (
                <div className="px-6 pb-5 text-sm leading-relaxed text-[var(--brand-steel)]">{f.a}</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-[#003D82] py-20 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,132,217,0.4),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-4 text-center md:px-8">
        <h2 className="text-3xl font-bold text-white md:text-5xl">Pronto para aumentar sua produtividade?</h2>
        <p className="mt-4 text-white/80">Resposta rápida. Fale com nosso time agora.</p>
        <a
          href={whatsappUrl("Olá DJ Rent! Quero solicitar um orçamento.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--brand-blue)] px-9 py-4 text-base font-bold uppercase tracking-wide text-white shadow-[var(--shadow-cta)] transition-all hover:scale-105"
        >
          <MessageCircle className="h-5 w-5" /> Solicitar Orçamento
        </a>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", empresa: "", ramo: "", assunto: "Aluguel", mensagem: "", whats: false });
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.nome.trim() || !form.email.trim() || !form.telefone.trim()) return;
    if (form.whats) {
      const msg = `Olá DJ Rent! Sou ${form.nome} (${form.empresa || "sem empresa"}). Assunto: ${form.assunto}. ${form.mensagem}`;
      window.open(whatsappUrl(msg), "_blank");
    }
    setSent(true);
  }

  return (
    <section id="contato" className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
      <img src={djSymbol} alt="DJ Rent" className="mx-auto mb-10 h-20 w-auto md:h-24" />
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-blue)]">Contato</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Entre em contato</h2>
          <p className="mt-3 text-[var(--brand-steel)]">Preencha o formulário ou fale conosco diretamente pelos canais ao lado.</p>

          {sent ? (
            <div className="mt-8 rounded-2xl border border-[var(--brand-blue)]/30 bg-[var(--brand-blue)]/5 p-8 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-[var(--brand-blue)]" />
              <h3 className="mt-4 text-xl font-bold">Mensagem enviada!</h3>
              <p className="mt-2 text-[var(--brand-steel)]">Em breve nossa equipe entrará em contato.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="mt-8 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Nome*" value={form.nome} onChange={(v) => setForm({ ...form, nome: v })} required />
                <Field label="Email*" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
                <Field label="Telefone*" value={form.telefone} onChange={(v) => setForm({ ...form, telefone: v })} required />
                <Field label="Empresa" value={form.empresa} onChange={(v) => setForm({ ...form, empresa: v })} />
                <Field label="Ramo de atuação" value={form.ramo} onChange={(v) => setForm({ ...form, ramo: v })} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Assunto</label>
                <select
                  value={form.assunto}
                  onChange={(e) => setForm({ ...form, assunto: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-[var(--brand-blue)] focus:outline-none"
                >
                  <option>Aluguel</option>
                  <option>Compra/Venda</option>
                  <option>Outro</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Mensagem</label>
                <textarea
                  rows={4}
                  maxLength={1000}
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-[var(--brand-blue)] focus:outline-none"
                />
              </div>
              <label className="flex items-center gap-2 text-sm text-[var(--brand-graphite)]">
                <input type="checkbox" checked={form.whats} onChange={(e) => setForm({ ...form, whats: e.target.checked })} className="h-4 w-4 accent-[var(--brand-blue)]" />
                Desejo ser contatado via WhatsApp
              </label>
              <button
                type="submit"
                className="w-full rounded-full bg-[var(--brand-blue)] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-[var(--shadow-cta)] transition-colors hover:bg-[var(--brand-blue-dark)]"
              >
                Enviar
              </button>
            </form>
          )}
        </div>

        <div>
          <h3 className="text-xl font-bold">Fale com a DJ Rent</h3>
          <div className="mt-6 space-y-5">
            <InfoRow icon={MapPin} title="Endereço">Alameda Terracota, 215, Torre Union, Sala 802<br />São Caetano do Sul, SP, CEP 09531-190</InfoRow>
            <InfoRow icon={Phone} title="Telefone">{PHONE_DISPLAY}</InfoRow>
            <InfoRow icon={MessageCircle} title="WhatsApp">
              {WHATSAPP_DISPLAY}
              <a
                href={whatsappUrl("Olá DJ Rent!")}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 inline-flex items-center gap-1.5 rounded-full bg-[var(--whatsapp)] px-3 py-1 text-xs font-semibold text-white"
              >
                Abrir WhatsApp
              </a>
            </InfoRow>
            <InfoRow icon={Mail} title="Email">{EMAIL}</InfoRow>
            <InfoRow icon={Clock} title="Horário">Seg–Sex: 8h às 18h</InfoRow>
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
            <iframe
              title="Localização DJ Rent"
              src="https://www.google.com/maps?q=Alameda+Terracota+215+São+Caetano+do+Sul&output=embed"
              className="h-64 w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground">{label}</label>
      <input
        type={type}
        required={required}
        maxLength={255}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-[var(--brand-blue)] focus:outline-none"
      />
    </div>
  );
}

function InfoRow({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-blue)]/10 text-[var(--brand-blue)]">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-steel)]">{title}</p>
        <div className="mt-0.5 text-sm text-foreground">{children}</div>
      </div>
    </div>
  );
}
