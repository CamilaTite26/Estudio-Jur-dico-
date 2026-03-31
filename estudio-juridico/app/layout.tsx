import type { Metadata } from "next";
import { EB_Garamond, Libre_Baskerville, Geist_Mono } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://ramirotiteabogado.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mg. Ramiro Tite | Abogado Penalista en Píllaro, Ecuador",
    template: "%s | Mg. Ramiro Tite - Estudio Jurídico",
  },
  description:
    "Abogado penalista y constitucionalista con más de 25 años de experiencia en Píllaro, Tungurahua. Especialista en derecho penal, constitucional y penal económico. Defensa legal de alto impacto en todo Ecuador.",
  keywords: [
    "abogado penalista Píllaro",
    "abogado Píllaro Ecuador",
    "derecho penal Ecuador",
    "derecho constitucional Ecuador",
    "abogado penalista Tungurahua",
    "estudio jurídico Píllaro",
    "defensa penal Ecuador",
    "hábeas corpus Ecuador",
    "acciones de protección",
    "abogado penal económico",
    "Ramiro Tite abogado",
    "bufete de abogados Píllaro",
    "consulta legal gratuita Ecuador",
    "abogado defensor penal",
    "garantías constitucionales Ecuador",
  ],
  authors: [{ name: "Mg. Ramiro Tite" }],
  creator: "Mg. Ramiro Tite",
  publisher: "Institución Jurídica Dr. Ramiro Tite",
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
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: SITE_URL,
    siteName: "Estudio Jurídico Mg. Ramiro Tite",
    title: "Mg. Ramiro Tite | Abogado Penalista en Píllaro, Ecuador",
    description:
      "Defensa penal y constitucional de alto impacto. Más de 25 años de trayectoria garantizando resultados con ética y rigor académico en Píllaro y todo Ecuador.",
    images: [
      {
        url: "/Ramiro.jpeg",
        width: 800,
        height: 600,
        alt: "Mg. Ramiro Tite - Abogado Penalista y Constitucionalista en Píllaro, Ecuador",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mg. Ramiro Tite | Abogado Penalista en Píllaro, Ecuador",
    description:
      "Defensa penal y constitucional de alto impacto. 25+ años de experiencia en Píllaro y todo Ecuador.",
    images: ["/Ramiro.jpeg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "Legal Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${ebGaramond.variable} ${libreBaskerville.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
