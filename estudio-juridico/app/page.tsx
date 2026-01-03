"use client";

import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import dynamic from "next/dynamic";

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
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        <Hero />

        {/* About Section */}
        <section id="sobre-mi" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="aspect-[3/4] rounded-lg overflow-hidden bg-gray-200 shadow-xl relative z-10">
                  {/* Placeholder for Lawyer Image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100">
                    <span className="sr-only">Foto del Abogado Ramiro Tite</span>
                    <Image
                      src="/main-img-rami.jpg"
                      alt="Foto del Abogado Ramiro Tite"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -left-6 z-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                <div className="absolute -top-6 -right-6 z-0 w-40 h-40 bg-gray-900/5 rounded-full blur-2xl"></div>
              </div>

              <div className="order-1 md:order-2 space-y-6">
                <h2 className="text-3xl md:text-7xl font-bold font-serif text-gray-900">Mg. Ramiro Tite</h2>
                <h3 className="text-xl text-gray-600 font-medium">Abogado Penalista y Constitucionalista</h3>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Con una sólida trayectoria de <strong>más de 25 años</strong> en el ejercicio de la abogacía, me he dedicado a defender los derechos de mis clientes con integridad, pasión y un profundo conocimiento de la ley ecuatoriana.
                  </p>
                  <p>
                    Mi experiencia abarca la defensa técnica en casos complejos de Derecho Penal y Constitucional. Poseo múltiples títulos de cuarto nivel (Maestrías) que respaldan mi pericia jurídica, especializándome en litigio estratégico y defensa de derechos fundamentales.
                  </p>
                  <p>
                    Desde mi estudio jurídico en el Cantón Píllaro, he servido a la comunidad de Tungurahua y de todo el país, brindando asesoría legal personalizada y efectiva.
                  </p>
                </div>

                <div className="pt-4">
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900">Áreas de Práctica</h2>
              <p className="text-gray-600">Representación legal especializada con un enfoque estratégico para resolver sus conflictos legales.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <ServiceCard
                title="Derecho Penal"
                description="Defensa técnica especializada en procesos penales. Protegemos su libertad y sus derechos en todas las etapas del proceso judicial, desde la investigación previa hasta el juicio."
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
                }
              />
              <ServiceCard
                title="Derecho Constitucional"
                description="Acciones de protección, hábeas corpus y defensa de derechos fundamentales. Garantizamos que se respete la Constitución en defensa de sus intereses."
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                }
              />
              <ServiceCard
                title="Derecho Penal Económico"
                description="Asesoría y defensa en delitos contra el orden económico, tributario y aduanero. Estrategias preventivas y defensa en casos de alta complejidad."
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                }
              />
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="contacto" className="py-20 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-secondary rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2">
                <div className="p-12 md:p-16 text-white space-y-8">
                  <h2 className="text-3xl md:text-4xl font-bold font-serif">¿Necesita Asesoría Legal Inmediata?</h2>
                  <p className="text-gray-300 text-lg">
                    Su tranquilidad es nuestra prioridad. Contáctenos hoy mismo para agendar una consulta y analizar su caso con la seriedad que merece.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/20 p-3 rounded-full">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Visítenos en</p>
                        <p className="font-medium text-lg">Calles Bolívar y Carlos Tamayo, Cantón Píllaro</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="bg-primary/20 p-3 rounded-full">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Llámenos al</p>
                        <p className="font-medium text-lg">+593 989 983 262</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-200 relative min-h-[300px] md:min-h-full">
                  <MapView center={OFFICE_COORDINATES} />
                </div>
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
