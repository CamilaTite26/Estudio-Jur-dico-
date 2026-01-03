import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="bg-secondary text-white py-12 border-t border-gray-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold font-serif tracking-tight">RAMIRO TITE</h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Defensa legal experta con más de 25 años de trayectoria. Compromiso, integridad y resultados en derecho penal y constitucional.
                        </p>
                    </div>

                    {/* Contact Column */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold font-serif text-gray-200">Contacto</h4>
                        <div className="space-y-2 text-sm text-gray-400">
                            <p className="flex items-start gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 text-primary shrink-0">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                <span>Calles Bolívar y Carlos Tamayo<br />Cantón Píllaro, Tungurahua, Ecuador</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                                <span>+593 989983262</span>
                            </p>
                        </div>
                    </div>

                    {/* Links Column */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold font-serif text-gray-200">Enlaces Rápidos</h4>
                        <div className="flex flex-col space-y-2 text-sm text-gray-400">
                            <Link href="#inicio" className="hover:text-primary transition-colors">Inicio</Link>
                            <Link href="#sobre-mi" className="hover:text-primary transition-colors">Sobre Mí</Link>
                            <Link href="#servicios" className="hover:text-primary transition-colors">Áreas de Práctica</Link>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Estudio Jurídico Ramiro Tite. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};
