# Thomas Eduardo — Portfolio

Site pessoal e portfólio de **Thomas Eduardo**, Product Engineer / Full Stack em São Paulo.

**Produção:** [thomaseduardo.online](https://thomaseduardo.online)

---

## Stack

| Camada | Tecnologia |
|--------|------------|
| Framework | Next.js 16 (App Router) |
| UI | React 19, Tailwind CSS 4, shadcn/ui |
| Animação | Framer Motion, GSAP, Lenis |
| Ícones | Lucide, Iconify |
| Carrosséis | Swiper + carrossel mobile custom (scroll-snap) |
| Analytics | Vercel Analytics + Speed Insights |
| Deploy | Vercel |

---

## Funcionalidades

- **Home** — hero com vídeo + TextPressure, projetos, processo, stack, galeria
- **Sobre** — layout bento, métricas, timeline, certificações
- **Projetos** — cases com stack e resultados
- **Valores** — processo comercial e FAQ
- **Linkbio** (`/linkbio`) — hub de links para redes
- **Currículo** (`/curriculo`) — visualização e download do PDF (`/curriculo.pdf`)
- **Redirects** (`/r/[slug]`) — links curtos com tracking (ex.: `/r/wa`, `/r/github`)
- **Proposta** (`/proposta`) — páginas privadas de proposta (noindex)
- **UI** — cursor custom (desktop), loader de entrada, WhatsApp flutuante com CircularText
- **Mobile** — seções em carrossel horizontal para reduzir rolagem

---

## Rotas principais

| Rota | Descrição |
|------|-----------|
| `/` | Home |
| `/sobre` | Sobre + métricas |
| `/projetos` | Projetos |
| `/valores` | Processo e valores |
| `/linkbio` | Links sociais |
| `/curriculo` | CV em PDF |
| `/r` | Índice de redirects |
| `/r/wa` | WhatsApp (tracked) |
| `/proposta` | Proposta comercial (privada) |

---

## Desenvolvimento local

**Requisitos:** Node.js 18+ e [pnpm](https://pnpm.io/)

```bash
git clone https://github.com/devthomaseduardo/thomas-eduardo-site.git
cd thomas-eduardo-site
pnpm install
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000).

### Scripts

```bash
pnpm dev      # servidor de desenvolvimento
pnpm build    # build de produção
pnpm start    # serve o build
pnpm lint     # ESLint
```

---

## Estrutura

```
app/                 # App Router (páginas e layouts)
  r/[slug]/          # redirects com analytics
  curriculo/         # viewer do PDF
  linkbio/           # hub de links
  sobre|projetos|valores/
components/
  home/              # seções da home
  ui/                # primitives (cursor, loader, carousels, etc.)
lib/
  data.ts            # projetos, contato
  redirects.ts       # mapa de /r/*
public/
  curriculo.pdf      # CV oficial
  hero.mp4           # vídeo do hero
  projects/          # imagens dos cases
```

---

## Deploy

O repositório está preparado para deploy na **Vercel** (push em `main` dispara o pipeline, se o projeto estiver linkado).

```bash
# build local de verificação
pnpm build
```

Variáveis de ambiente: nenhuma obrigatória para o site estático/SSR padrão. Analytics e Speed Insights funcionam no ambiente Vercel.

---

## SEO e privacidade

- Páginas públicas indexáveis: home, sobre, projetos, valores
- **Noindex:** `/proposta`, `/r/*`, `/curriculo` (documento utilitário)
- JSON-LD Person no layout raiz

---

## Licença

Uso pessoal. Todos os direitos reservados © Thomas Eduardo.
