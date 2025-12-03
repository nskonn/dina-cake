import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Показываем кнопку после прокрутки на 300px вниз
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-gradient-to-br from-[#A67C52] to-[#8B6640] text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 group ${
                isVisible
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
            aria-label="Наверх"
        >
            <div className="absolute inset-0 bg-[#A67C52]/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <ArrowUp 
                size={20} 
                className="md:w-6 md:h-6 relative z-10"
                strokeWidth={2.5}
            />
        </button>
    );
}
