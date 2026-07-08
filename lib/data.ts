export const CONTACT = {
  name: "Thomas Eduardo R. Nascimento",
  role: "Software Engineer | Full Stack Developer",
  email: "devthomaseduardo@gmail.com",
  phone: "(11) 97707-0209",
  location: "São Paulo, SP",
  site: "thomaseduardo.online",
  github: "https://github.com/devthomaseduardo",
  linkedin: "https://linkedin.com/in/devthomaseduardo",
  whatsapp:
    "https://wa.me/5511977070209?text=Ol%C3%A1%20Thomas%2C%20quero%20falar%20sobre%20um%20projeto.",
  cnpj: "60.882.678/0001-77",
}


export type Project = {
  tag: string
  title: string
  description: string
  bullets: string[]
  stack: string[]
  image: string
  href?: string
  year?: string
}


export const PROJECTS: Project[] = [

  {
    tag: "Produto Digital",
    title: "Thomas Eduardo Portfolio",
    description:
      "Plataforma profissional desenvolvida para apresentar projetos, serviços e gerar novas oportunidades comerciais.",
    bullets: [
      "Arquitetura moderna",
      "UX orientado a conversão",
      "Performance otimizada",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    image: "/projects/portfolio.webp",
    href: "https://thomaseduardo.online",
    year: "2026",
  },


  {
    tag: "Experiência Digital",
    title: "Homma Design",
    description:
      "Landing premium desenvolvida para mobiliário autoral, combinando estética editorial, narrativa visual e experiência de marca.",
    bullets: [
      "Direção visual premium",
      "Performance otimizada",
      "Design responsivo",
    ],
    stack: [
      "Next.js",
      "Tailwind CSS",
      "Vercel",
    ],
    image: "/projects/homma-projetos.webp",
    href:
      "https://hommadesignvercelapp.vercel.app",
    year: "2026",
  },


  {
    tag: "Backend API",
    title: "Auth JWT RBAC",
    description:
      "API backend estruturada com autenticação segura e controle de acesso baseado em permissões.",
    bullets: [
      "Autenticação JWT",
      "Controle de usuários",
      "Arquitetura escalável",
    ],
    stack: [
      "Node.js",
      "Fastify",
      "Prisma",
      "PostgreSQL",
    ],
    image:
      "/projects/auth-rbac.webp",
    year: "2026",
  },


  {
    tag: "Inteligência Artificial",
    title: "AI Agents Platform",
    description:
      "Projeto focado na criação de agentes inteligentes e automações utilizando inteligência artificial.",
    bullets: [
      "Arquitetura de agentes",
      "Automação de processos",
      "Integração com IA",
    ],
    stack: [
      "TypeScript",
      "Node.js",
      "AI",
    ],
    image:
      "/projects/agents.webp",
    year: "2026",
  },


  {
    tag: "Conversão Digital",
    title: "Sleep House Campinas",
    description:
      "Landing comercial criada para showroom de colchões com catálogo, prova social e geração de contatos.",
    bullets: [
      "SEO técnico",
      "Experiência mobile",
      "WhatsApp comercial",
    ],
    stack: [
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    image:
      "/projects/sleep-house-campinas.svg",
    year: "2026",
  },

]



export type Service = {
  title: string
  description: string
  features: string[]
}



export const SERVICES: Service[] = [

  {
    title: "Produtos Digitais e Sistemas",
    description:
      "Aplicações web completas para empresas que precisam organizar processos, automatizar tarefas e criar novas soluções digitais.",
    features: [
      "Dashboards administrativos",
      "Autenticação e permissões",
      "Banco de dados estruturado",
    ],
  },


  {
    title: "Sites e Landing Pages",
    description:
      "Experiências digitais rápidas e estratégicas para apresentar marcas, serviços e gerar novas oportunidades.",
    features: [
      "SEO técnico",
      "Performance otimizada",
      "Integração com WhatsApp",
    ],
  },


  {
    title: "APIs e Back-end",
    description:
      "Desenvolvimento de APIs, integrações e estruturas backend preparadas para aplicações reais.",
    features: [
      "APIs REST",
      "Webhooks",
      "Integrações externas",
    ],
  },

]



export const DIFERENCIAIS = [

  {
    title: "Código limpo e preparado para evolução",
    description:
      "Estruturas organizadas para manutenção, crescimento e novas funcionalidades.",
  },


  {
    title: "Visão de produto",
    description:
      "Cada decisão técnica considera experiência do usuário e objetivo do negócio.",
  },


  {
    title: "Desenvolvimento Full Stack",
    description:
      "Da interface ao backend, criando soluções completas de ponta a ponta.",
  },


  {
    title: "Entrega organizada",
    description:
      "Processo dividido em etapas claras desde planejamento até publicação.",
  },

]



export const PROCESS = [

  {
    step: "01",
    title: "Entendimento",
    description:
      "Analiso o problema, objetivo e processo atual antes de iniciar o desenvolvimento.",
  },


  {
    step: "02",
    title: "Arquitetura",
    description:
      "Defino tecnologia, estrutura e estratégia para criar uma solução sustentável.",
  },


  {
    step: "03",
    title: "Desenvolvimento",
    description:
      "Construção incremental, testes, deploy e evolução contínua.",
  },

]



export const STACK = [

  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Fastify",
  "Express",
  "PostgreSQL",
  "Prisma",
  "Docker",
  "Linux",
  "AWS",
  "Vercel",
  "JWT",
  "Tailwind CSS",
  "Python",

]
export const CLIENTS = [
  { name: "Academia Spinmove", logo: "/projects/academia-spinmove.svg" },
  { name: "Gil Barbosa", logo: "/projects/gilbarbosa.svg" },
  { name: "Hazap Workstation", logo: "/projects/hazap-workstation.svg" },
  { name: "Instituto Kell", logo: "/projects/intituto-kell.svg" },
  { name: "Paper Contratos", logo: "/projects/paper-contratos.svg" },
  { name: "Sleep House Campinas", logo: "/projects/sleep-house-campinas.svg" },
  { name: "Yazigi Swiss Park", logo: "/projects/yagizi-swissparck.svg" },
]
