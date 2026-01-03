"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Button } from './Button';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-xl font-bold font-serif tracking-tight text-primary">RAMIRO TITE</span>
                        <span className="hidden md:inline-block w-px h-6 bg-gray-300 mx-2"></span>
                        <span className="hidden md:inline-block text-sm text-gray-600 tracking-wide uppercase">Estudio Jurídico</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        <Link href="#inicio" className="text-sm font-medium hover:text-primary transition-colors">
                            Inicio
                        </Link>
                        <Link href="#sobre-mi" className="text-sm font-medium hover:text-primary transition-colors">
                            Sobre Mí
                        </Link>
                        <Link href="#servicios" className="text-sm font-medium hover:text-primary transition-colors">
                            Servicios
                        </Link>
                        <Link href="#contacto" className="text-sm font-medium hover:text-primary transition-colors">
                            Contacto
                        </Link>
                        <Button size="sm" variant="primary">
                            <Link href="https://wa.me/593989983262">Consulta Gratuita</Link>
                        </Button>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-600">
                            <span className="sr-only">Menu</span>
                            {/* Hamburger Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t">
                    <div className="grid gap-4 p-4 bg-white">
                        <Link href="#inicio" className="text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                            Inicio
                        </Link>
                        <Link href="#sobre-mi" className="text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                            Sobre Mí
                        </Link>
                        <Link href="#servicios" className="text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                            Servicios
                        </Link>
                        <Link href="#contacto" className="text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                            Contacto
                        </Link>
                        <Button className="w-full" size="sm" variant="primary" onClick={() => setIsOpen(false)}>
                            Consulta Gratuita
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};
