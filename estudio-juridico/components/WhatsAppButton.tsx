"use client";

import React from "react";

export const WhatsAppButton: React.FC = () => {
    // Replace with the actual phone number
    const phoneNumber = "593989983262"; // Format: country code + number
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-10 right-10 z-50 flex items-center justify-center w-20 h-20 bg-[#25D366] rounded-full shadow-3xl shadow-green-900/30 hover:bg-[#20ba5a] transition-all duration-500 hover:scale-105 active:scale-95 group overflow-hidden"
            aria-label="Contactar por WhatsApp"
        >
            {/* Professional Pulsing Aura */}
            <span className="absolute inset-0 bg-white/30 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-20 pointer-events-none group-hover:hidden"></span>

            <svg
                className="w-11 h-11 text-white relative z-10 transition-transform duration-500 group-hover:rotate-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M12.011 2c-5.514 0-9.99 4.476-9.99 9.99 0 1.764.46 3.42 1.258 4.86l-1.336 4.896 5.01-1.314c1.408.766 3.012 1.206 4.72 1.206 5.513 0 9.99-4.476 9.99-9.99S17.525 2 12.011 2zm6.29 14.502c-.254.717-1.472 1.34-2.022 1.426-.504.077-1.155.11-1.802-.102-.412-.132-1.803-.703-3.858-2.617-2.628-2.45-3.378-5.042-3.378-5.342 0-.301.222-.562.438-.778.21-.21.465-.453.696-.732.23-.279.308-.477.464-.795.156-.317.078-.595-.039-.833-.117-.238-.958-2.308-1.314-3.167-.348-.838-.703-.724-.962-.738-.248-.013-.531-.015-.814-.015-.283 0-.745.106-1.134.528-.39.423-1.488 1.456-1.488 3.55 0 2.094 1.524 4.12 1.737 4.402.212.282 3.0 4.58 7.26 6.42 1.012.44 1.804.703 2.422.898 1.016.323 1.94.277 2.668.169.814-.122 2.508-.122 2.508-1.025 2.146-.61 2.146-.61 2.146-1.238 0-.083-.008-.16-.017-.234-.1-.318-.328-.507-.63-.659z" />
            </svg>
        </a>
    );
};
