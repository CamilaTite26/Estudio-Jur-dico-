import Link from 'next/link';
import { Button } from './Button';

export const Hero = () => {
    return (
        <section id="inicio" className="relative py-20 lg:py-32 overflow-hidden bg-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" />
                </svg>
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
                    <div className="space-y-4">
                        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl font-serif text-secondary leading-[1.1]">
                            Defensa Legal con Excelencia
                        </h1>
                        <p className="mx-auto max-w-[800px] text-gray-600 md:text-xl font-light leading-relaxed font-sans">
                            Especialista en Derecho Penal y Constitucional. Protegemos sus derechos con integridad, estrategia y resultados comprobados en Píllaro y todo el Ecuador.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                        <Link href="https://wa.me/593989983262">
                            <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-red-900/20">
                                Agendar Consulta
                            </Button>
                        </Link>
                        <Link href="#servicios">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                Conferir Servicios
                            </Button>
                        </Link>
                    </div>

                    <div className="pt-8 flex items-center justify-center gap-8 text-gray-400 grayscale opacity-60">
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-3xl font-serif text-gray-900 italic">25+</span>
                            <span className="text-xs uppercase tracking-[0.2em] font-sans">Años</span>
                        </div>
                        <div className="w-px h-12 bg-gray-200"></div>
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-3xl font-serif text-gray-900 italic">100%</span>
                            <span className="text-xs uppercase tracking-[0.2em] font-sans">Compromiso</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
