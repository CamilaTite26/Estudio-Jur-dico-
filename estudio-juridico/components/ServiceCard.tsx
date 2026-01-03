import React from 'react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
    return (
        <div className="group relative bg-white p-10 border border-accent/20 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl shadow-primary/5 h-full">
            {/* Minimal Accent Line */}
            <div className="absolute top-0 left-0 w-0 h-1 bg-primary transition-all duration-500 group-hover:w-full"></div>

            <div className="mb-8 p-5 bg-muted group-hover:bg-primary/5 transition-colors duration-500 inline-block">
                {icon || (
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary opacity-80">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                )}
            </div>

            <h3 className="text-2xl font-bold font-serif mb-6 text-secondary group-hover:text-primary transition-colors">
                {title}
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 font-serif font-light">
                {description}
            </p>

            <div className="pt-4 border-t border-accent/10 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-sm font-bold uppercase tracking-widest text-primary font-sans">
                    Detalles del servicio &rarr;
                </span>
            </div>
        </div>
    );
};
