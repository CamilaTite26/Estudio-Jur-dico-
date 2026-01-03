"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Button } from './Button';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-accent/30 bg-glass backdrop-blur-xl transition-all duration-300">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex h-24 items-center justify-between">
                    <Link href="/" className="flex items-center space-x-4 group">
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold font-serif tracking-tight text-primary group-hover:text-primary-hover transition-colors leading-none">
                                RAMIRO TITE
                            </span>
                            <span className="text-xs text-gray-500 tracking-[0.2em] uppercase font-sans mt-2">
                                Estudio Jurídico
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-12">
                        <div className="flex items-center gap-10">
                            {['Inicio', 'Sobre Mí', 'Servicios'].map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                                    className="text-sm font-bold uppercase tracking-[0.2em] text-secondary/70 hover:text-primary transition-all relative group"
                                >
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            ))}
                        </div>
                        <Link href="https://wa.me/593989983262">
                            <Button className="px-8 rounded-none tracking-widest uppercase text-[11px] font-bold shadow-xl hover:scale-105 active:scale-95 transition-all">
                                Consulta Gratuita
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-secondary p-2 z-50"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-between">
                            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-white/95 backdrop-blur-2xl z-40 transition-all duration-500 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col items-center justify-center h-full gap-10 p-4">
                    {['Inicio', 'Sobre Mí', 'Servicios'].map((item, i) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                            className={`text-2xl font-serif text-secondary hover:text-primary transition-all ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                    <Link
                        href="https://wa.me/593989983262"
                        className={`mt-4 w-full max-w-[280px] ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                        style={{ transitionDelay: '300ms' }}
                        onClick={() => setIsOpen(false)}
                    >
                        <Button className="w-full py-6 rounded-none tracking-[0.3em] uppercase text-xs font-bold shadow-2xl">
                            Consulta Gratuita
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};
