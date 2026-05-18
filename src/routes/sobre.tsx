import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Gem, Handshake, Zap, ShieldCheck, RefreshCw, Truck, BadgeDollarSign, CheckCircle2, MessageCircle, Leaf } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { whatsappUrl } from "@/lib/whatsapp";
import fleetImg from "@/assets/about-fleet.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Nós — DJ Rent" },
      { name: "description", content: "Conheça a história da DJ Rent — mais de 10 anos em locação, compra e venda de empilhadeiras com atuação em todo o estado de São Paulo." },
      { property: "og:title", content: "Sobre a DJ Rent" },
      { property: "og:description", content: "Nossa missão, visão, valores e diferenciais no mercado de movimentação de carga." },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#1A1A1A] py-20 md:py-28">
        <img src={fleetImg} alt="Frota DJ Rent" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003D82]/80 to-black/70" />
        <div className="relative mx-auto max-w-5xl px-4 text-center md:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-blue)]">Sobre Nós</p>
          <h1 className="mt-3 text-4xl font-bold text-white md:text-6xl">Mais de 10 anos movimentando o futuro</h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/80">
            Conheça a história, a missão e os valores que fazem da DJ Rent uma referência em movimentação de carga.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-4xl px-4 py-20 md:px-8 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-blue)]">Nossa História</p>
        <h2 className="mt-3 text-3xl md:text-4xl">Crescimento e Confiança</h2>
        <div className="mt-6 space-y-5 leading-relaxed text-[var(--brand-graphite)]">
          <p>A DJ Rent surgiu em 2015 como uma solução inovadora no mercado de movimentação de cargas em São Paulo. Fundada por profissionais com mais de 20 anos de experiência em logística e operações industriais, nasceu da necessidade de oferecer uma alternativa flexível e econômica para empresas que precisavam de equipamentos sem os altos custos de aquisição.</p>
          <p>Nos primeiros anos, operávamos com uma pequena frota de empilhadeiras à combustão, atendendo principalmente pequenas e médias empresas do ABC Paulista. O diferencial desde o início era simples: atendimento rápido, equipamentos bem mantidos e preços justos.</p>
          <p>Com o crescimento da demanda, expandimos nossa frota para incluir também empilhadeiras elétricas, atendendo diversos segmentos de mercado e ambientes operacionais em todo o estado de São Paulo.</p>
          <p>Nossa trajetória é marcada pelo compromisso com qualidade, confiabilidade e inovação. Cada cliente é atendido com excelência, e cada máquina é selecionada e mantida com rigor — garantindo segurança e eficiência nas operações.</p>
          <p className="font-semibold text-foreground">A DJ Rent não é apenas uma empresa de locação e venda. Somos parceiros dos seus projetos, crescendo junto com você.</p>
        </div>
      </section>

      {/* Missão Visão Valores */}
      <section className="bg-secondary/40 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <MVVCard icon={Target} title="Missão">
              Fornecer soluções de movimentação de carga flexíveis, confiáveis e econômicas, permitindo que empresas de todos os tamanhos tenham acesso a equipamentos de qualidade sem investimentos pesados.
            </MVVCard>
            <MVVCard icon={Eye} title="Visão">
              Ser a referência em locação, compra e venda de equipamentos de movimentação no estado de São Paulo, reconhecida pela excelência no atendimento, confiança e inovação sustentável.
            </MVVCard>
            <MVVCard icon={Gem} title="Valores">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><Handshake className="h-4 w-4 text-[var(--brand-blue)]" /> Confiança</li>
                <li className="flex items-center gap-2"><Zap className="h-4 w-4 text-[var(--brand-blue)]" /> Eficiência</li>
                <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[var(--brand-blue)]" /> Qualidade</li>
                <li className="flex items-center gap-2"><RefreshCw className="h-4 w-4 text-[var(--brand-blue)]" /> Flexibilidade</li>
              </ul>
            </MVVCard>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-blue)]">Diferenciais</p>
          <h2 className="mt-3 text-3xl md:text-4xl">O que nos diferencia</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {[
            { icon: Truck, title: "Frota Moderna e Diversificada", d: "Elétricas e à combustão para qualquer necessidade operacional." },
            { icon: Leaf, title: "Compromisso Sustentável", d: "Empilhadeiras elétricas para operações mais limpas e responsáveis." },
            { icon: ShieldCheck, title: "Equipamentos Testados", d: "Cada máquina é inspecionada com rigor antes da entrega." },
            { icon: Handshake, title: "Atendimento com Excelência", d: "Equipe especializada focada na melhor solução para o seu negócio." },
            { icon: RefreshCw, title: "Flexibilidade Contratual", d: "Dia, semana, mês ou customizado — adaptamos ao seu cronograma." },
            { icon: BadgeDollarSign, title: "Preços Competitivos", d: "Os melhores valores do estado, com negociação flexível." },
          ].map((d) => (
            <div key={d.title} className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-colors hover:border-[var(--brand-blue)]">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-blue)]/10 text-[var(--brand-blue)]">
                <d.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">{d.title}</h3>
                <p className="mt-1 text-sm text-[var(--brand-steel)]">{d.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seção Ambiental */}
      <section className="py-20 md:py-24" style={{ backgroundColor: "#e8f5f0" }}>
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-700/10 text-green-700">
              <Leaf className="h-8 w-8" />
            </div>
            <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-green-700">Sustentabilidade</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1A1A1A] md:text-4xl">Compromisso com o Meio Ambiente</h2>
            <p className="mt-2 text-lg font-medium text-green-800">Locação de empilhadeiras elétricas</p>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#3a3a3a]">
              Ao optar por empilhadeiras elétricas da DJ Rent, você investe em uma solução que equilibra produtividade com responsabilidade ambiental, contribuindo para operações mais limpas e sustentáveis.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Ar mais puro para seus colaboradores",
                desc: "Equipamentos elétricos funcionam sem emissões diretas de gases nocivos. Isso significa ambientes internos mais saudáveis, menor exposição a poluentes atmosféricos e melhor qualidade do ar para quem trabalha na operação.",
              },
              {
                title: "Proteção do solo e da água",
                desc: "Sem vazamento de combustíveis ou óleos lubrificantes, as empilhadeiras elétricas eliminam riscos de contaminação do solo e de recursos hídricos, preservando ecossistemas locais e reduzindo passivos ambientais.",
              },
              {
                title: "Aproveitamento inteligente de energia",
                desc: "Enquanto equipamentos a combustão convertem apenas uma pequena fração de sua energia em movimento útil, as empilhadeiras elétricas oferecem eficiência significativamente superior. Menos desperdício energético significa custos operacionais menores e pegada de carbono reduzida.",
              },
              {
                title: "Responsabilidade que se traduz em resultados",
                desc: "Escolher equipamentos sustentáveis hoje é garantir um futuro operacional mais responsável amanhã — para sua empresa, seus colaboradores e o meio ambiente.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-green-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-700" />
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#555]">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={whatsappUrl("Olá DJ Rent! Quero saber mais sobre locação de empilhadeiras elétricas e sustentabilidade.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-700 px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all hover:bg-green-800 hover:scale-105"
            >
              <Leaf className="h-4 w-4" /> Alugue Equipamentos Sustentáveis
            </a>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#003D82] py-16">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Vamos conversar?</h2>
          <p className="mt-3 text-white/80">Solicite um orçamento e receba uma proposta em até 2 horas.</p>
          <a
            href={whatsappUrl("Olá DJ Rent! Vim da página Sobre Nós e quero um orçamento.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--brand-blue)] px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-[var(--shadow-cta)] transition-all hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" /> Solicitar Orçamento
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

function MVVCard({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-card p-8 shadow-[var(--shadow-card)] border border-border">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-blue-dark)] text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-2xl font-bold">{title}</h3>
      <div className="mt-3 text-sm leading-relaxed text-[var(--brand-graphite)]">{children}</div>
    </div>
  );
}
