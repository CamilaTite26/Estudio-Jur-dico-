
interface ServiceCardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
    return (
        <div className="group relative overflow-hidden rounded-lg border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-red-100">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-red-50 transition-all group-hover:bg-red-100 blur-2xl opacity-50"></div>

            <div className="relative z-10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {icon ? icon : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                    )}
                </div>
                <h3 className="mb-2 text-xl font-bold font-serif text-gray-900">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
        </div>
    );
};
