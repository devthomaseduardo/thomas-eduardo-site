import type { Metadata } from "next"
import { Check, Clock, ShieldCheck, FileText, Zap, MessageCircleQuestion } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { PriceCalculator } from "@/components/price-calculator"
import { CONTACT } from "@/lib/data"

export const metadata: Metadata = {
  title: "Valores",
  description:
    "Como cobro pelos projetos: R$20/hora, valor base transparente. Landing pages a partir de R$120, sistemas e automacoes com estimativa fechada antes de comecar.",
  alternates: { canonical: "/valores" },
  openGraph: {
    title: "Valores | Thomas Eduardo",
    description: "Preço transparente para desenvolvimento: R$20/hora, estimativa fechada.",
  },
}

const HOURLY_RATE = 20

type Pack = {
  name: string
  hours: string
  hoursNote: string
  price: string
  priceNote: string
  highlight: boolean
  features: string[]
}

const PACKS: Pack[] = [
  {
    name: "Landing / Pagina",
    hours: "6h",
    hoursNote: "prazo medio: 3 a 5 dias",
    price: "R$ 120",
    priceNote: "R$" + HOURLY_RATE + "/h x 6h",
    highlight: false,
    features: [
      "Pagina unica de alta conversao",
      "Responsiva + SEO tecnico",
      "Animacoes e integracao com WhatsApp",
      "Deploy na Vercel",
    ],
  },
  {
    name: "Sistema / App",
    hours: "20-40h",
    hoursNote: "prazo medio: 2 a 4 semanas",
    price: "R$ 400 - R$ 800",
    priceNote: "R$" + HOURLY_RATE + "/h x horas do escopo",
    highlight: true,
    features: [
      "Dashboard e area administrativa",
      "Autenticacao JWT + RBAC",
      "API REST + banco de dados",
      "Documentacao e deploy",
    ],
  },
  {
    name: "Automacao",
    hours: "10-20h",
    hoursNote: "prazo medio: 1 a 2 semanas",
    price: "R$ 200 - R$ 400",
    priceNote: "R$" + HOURLY_RATE + "/h x horas do escopo",
    highlight: false,
    features: [
      "Integracao entre sistemas e APIs",
      "Fluxos automatizados",
      "Bots e processamento de dados",
      "Reducao de trabalho manual",
    ],
  },
]

const HOW = [
  {
    icon: Clock,
    title: "R$20 por hora, sem pegadinha",
    text: "E o unico valor base que uso. Uma landing page de 6h fecha em R$120 - a conta e essa, sem taxa escondida.",
  },
  {
    icon: FileText,
    title: "Proposta com valor fixo",
    text: "Depois de alinhar o escopo, envio uma proposta fechada com numero e prazo exatos - nao fico cobrando por hora solta.",
  },
  {
    icon: ShieldCheck,
    title: "Sem surpresas",
    text: "Escopo claro antes de comecar. Voce aprova o valor antes de eu tocar em uma linha de codigo.",
  },
]

const FAQ = [
  {
    q: "Nao sei quantas horas meu projeto vai levar. E agora?",
    a: "Sem problema. Voce me conta o que precisa e eu volto com uma estimativa de horas e valor em ate 24h - de graca, sem compromisso.",
  },
  {
    q: "O valor pode mudar no meio do projeto?",
    a: "Nao. Depois que a proposta e aprovada, o valor e fixo. Se o escopo mudar durante o projeto, alinhamos antes de qualquer ajuste.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Costumo dividir em duas partes: um sinal pra iniciar e o restante na entrega. Pix ou transferencia.",
  },
  {
    q: "Preciso ja ter tudo definido antes de falar com voce?",
    a: "Nao. Boa parte do trabalho e justamente ajudar a transformar uma ideia solta num escopo claro, com valor e prazo definidos.",
  },
]

export default function ValoresPage() {
  return (
    <>
      <PageHero
        kicker="Valores"
        title="Preco transparente, sem enrolacao."
        description="Trabalho com um unico valor base por hora - R$20 - e fecho cada projeto com proposta de valor fixo e prazo definido. Simples assim."
      />

      <section className="mx-auto max-w-6xl px-5 pt-4">
        <Reveal className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card px-8 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Valor base</p>
            <p className="mt-2 font-display text-5xl font-bold text-foreground">
              R${HOURLY_RATE}
              <span className="text-2xl font-normal text-muted-foreground">/hora</span>
            </p>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Todo orcamento que voce ve nessa pagina nasce dessa conta: horas estimadas x R${HOURLY_RATE}. Sem
            variacao por cliente, sem &quot;depende&quot;.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <div className="grid gap-4 sm:grid-cols-3">
          {HOW.map((h, i) => {
            const Icon = h.icon
            return (
              <Reveal key={h.title} delay={i * 80} className="rounded-2xl border border-border bg-card p-7">
                <span className="inline-flex size-10 items-center justify-center rounded-lg bg-secondary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="border-t border-border bg-card/20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:py-24 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              kicker="Simulador"
              title="Calcule uma estimativa em segundos"
              description={"Ajuste as horas e veja o valor na hora, sempre com base nos R$" + HOURLY_RATE + "/hora. E so uma referencia inicial - o valor final e fechado com o escopo."}
            />
          </div>
          <Reveal delay={100}>
            <PriceCalculator />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <SectionHeading kicker="Pacotes" title="Formatos mais comuns de projeto" align="center" />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {PACKS.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 90}
              className={
                p.highlight
                  ? "flex flex-col rounded-2xl border border-foreground/40 bg-card p-8 ring-1 ring-foreground/20"
                  : "flex flex-col rounded-2xl border border-border bg-card p-8"
              }
            >
              {p.highlight ? (
                <span className="mb-4 w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Mais procurado
                </span>
              ) : null}

              <h3 className="font-display text-xl font-semibold">{p.name}</h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {p.hours} - {p.hoursNote}
              </p>

              <p className="mt-5 font-display text-4xl font-bold leading-none">{p.price}</p>
              <p className="mt-1.5 font-mono text-xs text-muted-foreground">{p.priceNote}</p>

              <ul className="mt-7 space-y-3 border-t border-border pt-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-foreground" />
                    <span className="text-foreground/85">{f}</span>
                  </li>
                ))}
              </ul>

              
                <a href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  p.highlight
                    ? "mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
                    : "mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-transform hover:scale-[1.02] hover:bg-secondary"
                }
              >
                <Zap className="size-4" />
                Pedir orcamento
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 rounded-2xl border border-border bg-card p-7 text-center text-sm text-muted-foreground">
          Prefere conversar antes? Me chame no WhatsApp{" "}
          
            <a href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4"
          >
            {CONTACT.phone}
          </a>{" "}
          e descreva o projeto - respondo com uma estimativa de horas e valor rapidinho.
        </Reveal>
      </section>

      <section className="border-t border-border bg-card/20">
        <div className="mx-auto max-w-4xl px-5 py-20 sm:py-24">
          <SectionHeading kicker="Duvidas" title="Antes de voce me chamar" align="center" />
          <div className="mt-12 space-y-px overflow-hidden rounded-2xl border border-border bg-border">
            {FAQ.map((item, i) => (
              <Reveal key={item.q} delay={i * 70} className="bg-card p-6">
                <div className="flex items-start gap-3">
                  <MessageCircleQuestion className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                  <h3 className="font-display text-base font-semibold">{item.q}</h3>
                </div>
                <p className="mt-2 pl-7 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={FAQ.length * 70} className="mt-10 text-center">
            
              <a href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              <Zap className="size-4" />
              Falar agora no WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}