import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Syne, JetBrains_Mono } from "next/font/google"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { SmoothScroll } from "@/components/smooth-scroll"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { CustomCursor } from "@/components/ui/custom-cursor"
import { PageLoader } from "@/components/ui/page-loader"
import { PageTransition } from "@/components/page-transition"
import "./globals.css"

// nik.co vibe: Suisse Int'l → Inter (body), Heathergreen → Syne (display)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["300", "400", "500", "600", "700"],
})
// Display: Syne (statement type, closest free feel to Heathergreen energy)
const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
})
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["400", "500"],
})

const signature = localFont({
  src: "../public/fonts/ShadowHand.ttf",
  variable: "--font-signature",
  display: "swap",
})

const SITE_URL = "https://thomaseduardo.com.br"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Thomas Eduardo | Full Stack Software Engineer | São Paulo",
    template: "%s | Thomas Eduardo | Full Stack Engineer",
  },
  description:
    "Thomas Eduardo | Engenheiro de Software Full Stack em São Paulo. Especialista em Next.js, TypeScript, React e soluções digitais modernas, performáticas e escaláveis. Portfólio com projetos reais, processo de engenharia estruturado e resultados comprovados.",
  keywords: [
    "Thomas Eduardo",
    "Desenvolvedor Full Stack São Paulo",
    "Engenheiro de Software",
    "Full Stack Developer Brazil",
    "Next.js Developer",
    "TypeScript Engineer",
    "React Developer São Paulo",
    "Product Engineer",
    "Desenvolvedor Web São Paulo",
    "Criação de Sites Profissionais",
    "Portfólio Desenvolvedor Full Stack",
    "TERON OS",
    "Soluções Digitais Escaláveis",
  ],
  authors: [{ name: "Thomas Eduardo R. Nascimento", url: SITE_URL }],
  creator: "Thomas Eduardo R. Nascimento",
  openGraph: {
    title: "Thomas Eduardo | Full Stack Software Engineer | São Paulo",
    description:
      "Engenheiro de Software Full Stack em São Paulo. Construindo soluções digitais modernas, performáticas e escaláveis com Next.js, TypeScript e arquitetura limpa.",
    url: SITE_URL,
    siteName: "Thomas Eduardo | Full Stack Engineer",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Thomas Eduardo | Full Stack Software Engineer - Portfólio Profissional",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thomas Eduardo | Full Stack Software Engineer | São Paulo",
    description:
      "Desenvolvedor Full Stack em São Paulo. Next.js, TypeScript, React e soluções digitais escaláveis.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Thomas Eduardo R. Nascimento",
  url: SITE_URL,
  jobTitle: "Desenvolvedor Full Stack | Engenheiro de Software",
  description:
    "Engenheiro de Software Full Stack em São Paulo especializado em aplicações web modernas, portais, dashboards, APIs e landing pages com Next.js, TypeScript e arquitetura escalável.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressCountry: "BR",
  },
  sameAs: [
    "https://github.com/devthomaseduardo",
    "https://www.linkedin.com/in/devthomaseduardo",
    "https://www.thomaseduardo.com.br",
  ],
}

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`dark ${inter.variable} ${mono.variable} ${display.variable} ${signature.variable} bg-background`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('loader-boot','loader-active')`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T9K46BCS');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="font-sans font-light antialiased overflow-x-hidden" suppressHydrationWarning={true}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T9K46BCS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <SmoothScroll>
          <PageLoader />
          <CustomCursor />
          <SiteNav />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
          <FloatingWhatsApp />
          <SiteFooter />
          <Analytics />
          <SpeedInsights />
        </SmoothScroll>
      </body>
    </html>
  )
}
