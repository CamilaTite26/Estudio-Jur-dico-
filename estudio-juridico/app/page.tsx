"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import dynamic from "next/dynamic";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MapPin, Phone, Mail } from "lucide-react";

const MapView = dynamic(() => import("@/components/MapView").then(mod => mod.MapView), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-full bg-gray-200">
      <span className="text-gray-500">Cargando mapa...</span>
    </div>
  ),
});

const OFFICE_COORDINATES = {
  lat: -1.1731843,
  lng: -78.5418647
};

const SERVICES = [
  {
    title: "Derecho Penal",
    description: "Defensa integral en delitos penales, con enfoque en la protección de los derechos fundamentales y el debido proceso."
  },
  {
    title: "Derecho Constitucional",
    description: "Acciones de protección, hábeas corpus y garantías constitucionales para la defensa efectiva frente a actos de poder."
  },
  {
    title: "Penal Económico",
    description: "Asesoría y defensa estratégica en delitos contra la administración, propiedad y orden económico nacional."
  }
];

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll(".reveal, .reveal-up");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans selection:bg-primary/10 selection:text-primary">
      <Navbar />

      <main className="flex-grow">
        <Hero />

        {/* Sobre Mí Section */}
        <section id="sobre-mi" className="py-20 md:py-32 bg-white overflow-hidden">
          <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              {/* Image Side */}
              <div className="relative animate-reveal">
                <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] relative overflow-hidden group shadow-2xl">
                  <Image
                    src="/Ramiro.jpeg"
                    alt="Dr. Ramiro Tite"
                    fill
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-48 md:h-48 bg-primary/10 -z-10 blur-2xl"></div>
              </div>

              {/* Content Side */}
              <div className="space-y-6 md:space-y-8 animate-reveal [animation-delay:200ms]">
                <div className="space-y-2 md:space-y-4">
                  <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-primary font-sans">Abogado & Fundador</span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-secondary leading-tight">
                    Mg. Ramiro Tite
                  </h2>
                </div>
                <div className="space-y-4 md:space-y-6 text-base md:text-xl text-secondary/80 font-serif leading-relaxed">
                  <p>
                    Con más de 25 años de experiencia, el Magíster Ramiro Tite ha dedicado su carrera a la defensa penal y constitucional. Su enfoque se basa en la excelencia analítica y un compromiso inquebrantable con la justicia.
                  </p>
                  <p>
                    Fundador de la Institución Jurídica Dr. Ramiro Tite, ha liderado casos de alta complejidad a nivel nacional, consolidando una reputación de rigor académico y efectividad en estrados.
                  </p>
                </div>
                <div className="pt-4 md:pt-8 grid grid-cols-2 gap-4 md:gap-12 text-secondary/90">
                  <div className="space-y-1 md:space-y-2">
                    <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-primary">Formación</h4>
                    <p className="text-sm md:text-xl font-serif">Especialidad en Derecho Penal</p>
                  </div>
                  <div className="space-y-1 md:space-y-2">
                    <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-primary">Prestigio</h4>
                    <p className="text-sm md:text-xl font-serif">Trayectoria Nacional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Especialidades Section */}
        <section id="servicios" className="py-20 md:py-32 bg-[#F8F8F8] text-secondary relative overflow-hidden border-y border-accent/30">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none"></div>
          <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="max-w-[800px] mb-12 md:mb-20 space-y-4 text-center lg:text-left mx-auto lg:mx-0">
              <span className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-primary font-sans">Excelencia Legal</span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-secondary">Especialidades</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {SERVICES.map((service, index) => (
                <div key={service.title} className="reveal-up" style={{ animationDelay: `${index * 150}ms` }}>
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Map Section */}
        <section id="contacto" className="py-20 md:py-32 bg-[#F2F2F2] overflow-hidden">
          <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
              <div className="space-y-8 md:space-y-12 animate-reveal">
                <div className="space-y-4 text-center lg:text-left">
                  <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-primary font-sans">Ubicación & Contacto</span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-secondary">Hablemos de su caso</h2>
                </div>

                <div className="space-y-6 md:space-y-8 max-w-md mx-auto lg:mx-0">
                  <div className="flex items-start gap-4 md:gap-6 group">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="space-y-1 md:space-y-2">
                      <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary/60">Dirección</h3>
                      <p className="text-lg md:text-2xl font-serif text-secondary leading-tight">
                        Bolívar y Carlos Tamayo<br />Píllaro, Tungurahua
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 md:gap-6 group">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
                      <Phone className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="space-y-1 md:space-y-2">
                      <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary/60">Contáctenos</h3>
                      <p className="text-lg md:text-2xl font-serif text-secondary">+593 989 983 262</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 md:gap-6 group">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
                      <Mail className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="space-y-1 md:space-y-2">
                      <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary/60">Correo Electrónico</h3>
                      <p className="text-lg md:text-xl font-serif text-secondary overflow-hidden text-ellipsis">rtitelegal@yahoo.es</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[400px] md:h-[600px] w-full relative animate-reveal [animation-delay:300ms] shadow-2xl border-4 md:border-8 border-white">
                <MapView center={OFFICE_COORDINATES} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
