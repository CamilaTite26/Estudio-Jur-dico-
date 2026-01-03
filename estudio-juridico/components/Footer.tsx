import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-secondary pt-20 pb-10 text-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
                    {/* Brand Column */}
                    <div className="space-y-6 text-center sm:text-left">
                        <Link href="#inicio" className="inline-block group">
                            <div className="flex flex-col">
                                <span className="text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">RAMIRO TITE</span>
                                <span className="text-[10px] md:text-sm tracking-[0.3em] md:tracking-[0.4em] uppercase text-primary font-bold">Estudio Jurídico</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 font-serif leading-relaxed text-sm md:text-base max-w-xs mx-auto sm:mx-0">
                            Excelencia académica y rigor técnico en la defensa de sus derechos fundamentales.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-6 text-center sm:text-left">
                        <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary">Navegación</h4>
                        <nav className="flex flex-col space-y-4 text-sm md:text-base text-gray-300 font-serif">
                            <Link href="#inicio" className="hover:text-primary transition-colors hover:translate-x-1 duration-300 inline-block py-1">Página de Inicio</Link>
                            <Link href="#sobre-mi" className="hover:text-primary transition-colors hover:translate-x-1 duration-300 inline-block py-1">Sobre Ramiro Tite</Link>
                            <Link href="#servicios" className="hover:text-primary transition-colors hover:translate-x-1 duration-300 inline-block py-1">Áreas de Práctica</Link>
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6 text-center sm:text-left sm:col-span-2 lg:col-span-2">
                        <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary">Información</h4>
                        <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
                            <div className="flex items-start gap-4 justify-center sm:justify-start">
                                <MapPin className="w-5 h-5 text-accent opacity-90 mt-1 shrink-0" />
                                <div className="space-y-1">
                                    <p className="text-gray-200 font-serif text-sm md:text-base leading-tight">
                                        Bolívar y Carlos Tamayo<br />
                                        Píllaro, Tungurahua
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 justify-center sm:justify-start">
                                <Phone className="w-5 h-5 text-accent opacity-90 mt-1 shrink-0" />
                                <div className="space-y-1">
                                    <p className="text-gray-200 font-serif text-sm md:text-base">+593 989 983 262</p>
                                    <p className="text-[10px] uppercase tracking-widest text-primary font-bold">Atención 24/7</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 md:mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-widest font-sans text-center md:text-left">
                        © {new Date().getFullYear()} Mg. Ramiro Tite | Excelencia en Defensa Legal
                    </p>
                    <div className="flex gap-8 text-[10px] md:text-xs uppercase tracking-widest font-bold text-gray-400">
                        <span className="opacity-40">Píllaro - Ecuador</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
