import type { Metadata } from "next";
import { EB_Garamond, Libre_Baskerville, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Mg. Ramiro Tite | Estudio Jurídico",
  description: "Defensa Legal con Excelencia en Píllaro y todo el Ecuador. Especialista en Derecho Penal y Constitucional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${ebGaramond.variable} ${libreBaskerville.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
