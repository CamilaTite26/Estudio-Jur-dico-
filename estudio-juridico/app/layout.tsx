import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dr. Ramiro Tite | Estudio Jurídico",
  description: "Abogado Penalista y Constitucionalista en Píllaro, Ecuador. Más de 25 años de experiencia defendiendo sus derechos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${cormorant.variable} ${montserrat.variable} font-sans antialiased text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
