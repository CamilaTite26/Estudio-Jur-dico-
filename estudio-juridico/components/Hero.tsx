import Link from 'next/link';
import { Button } from './Button';

export const Hero = () => {
    return (
        <section id="inicio" className="relative pt-32 pb-24 lg:pt-56 lg:pb-40 overflow-hidden bg-background">
            {/* Elegant Background Accents */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="container relative z-10 mx-auto px-4 md:px-8">
                <div className="flex flex-col items-center text-center space-y-16 max-w-5xl mx-auto">
                    <div className="space-y-8 animate-reveal">
                        <span className="inline-block text-xs tracking-[0.6em] uppercase font-bold text-primary mb-2 opacity-90 font-sans">
                            Institución Jurídica en Ecuador
                        </span>
                        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight font-serif text-secondary leading-[1.1]">
                            JUSTICIA & <br /> ESTRATEGIA
                        </h1>
                        <p className="mx-auto max-w-[800px] text-secondary/80 text-lg md:text-2xl font-serif font-light leading-relaxed pt-6 italic">
                            Defensa penal y constitucional de alto impacto. 25 años de trayectoria garantizando resultados con ética y rigor académico.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full justify-center items-center animate-reveal-up [animation-delay:400ms]">
                        <Link href="https://wa.me/593989983262" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full sm:w-auto h-16 sm:h-20 px-8 sm:px-14 rounded-none tracking-[0.2em] font-bold uppercase text-xs sm:text-sm shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
                                Agendar Consulta
                            </Button>
                        </Link>
                        <Link href="#servicios" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto h-16 sm:h-20 px-8 sm:px-14 rounded-none tracking-[0.2em] font-bold uppercase text-xs sm:text-sm border-accent hover:bg-secondary hover:text-white transition-all">
                                Servicios
                            </Button>
                        </Link>
                    </div>

                    <div className="pt-16 sm:pt-20 flex flex-nowrap items-center justify-center gap-8 sm:gap-20 text-gray-400 animate-reveal [animation-delay:800ms]">
                        <div className="flex flex-col items-center gap-2 sm:gap-3">
                            <span className="text-3xl sm:text-5xl font-serif text-secondary leading-none">25+</span>
                            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-sans font-bold opacity-60">Años de Trayectoria</span>
                        </div>
                        <div className="w-px h-12 sm:h-20 bg-accent opacity-40"></div>
                        <div className="flex flex-col items-center gap-2 sm:gap-3">
                            <span className="text-3xl sm:text-5xl font-serif text-secondary leading-none">100%</span>
                            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-sans font-bold opacity-60">Compromiso Ético</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
