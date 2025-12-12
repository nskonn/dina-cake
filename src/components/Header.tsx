import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ContactModal } from './ContactModal';

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setMobileMenuOpen(false);
        }
    };

    const navLinks = [
        { name: 'Каталог', action: () => scrollToSection('catalog') },
        { name: 'Отзывы', action: () => scrollToSection('reviews') },
        { name: 'Как заказать?', action: () => scrollToSection('order-steps') },
        { name: 'Контакты', action: () => scrollToSection('contacts') },
    ];

    return (
        <>
            <header className="bg-[#F3EFE9] border-b border-gray-300 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Логотип */}
                        <Link to="/" className="flex items-center">
                            <span
                                className="text-transparent font-script bg-clip-text bg-gradient-to-r from-[#A67C52] via-[#C4956F] to-[#D4A574] tracking-wide"
                                style={{
                                    fontWeight: '700',
                                    fontSize: '32px',
                                }}
                            >
                                Dina's cake
                            </span>
                        </Link>

                        {/* Навигация для десктопа */}
                        <nav className="hidden md:flex items-center gap-8">
                            {navLinks.map(link => (
                                <button
                                    key={link.name}
                                    type="button"
                                    onClick={link.action}
                                    className="text-gray-700 hover:text-[#A67C52] transition-colors"
                                >
                                    {link.name}
                                </button>
                            ))}
                            <button
                                type="button"
                                className="bg-[#A67C52] text-white px-6 py-2 rounded hover:bg-[#8B6640] transition-colors"
                                onClick={() => setModalOpen(true)}
                            >
                                Заказать
                            </button>
                        </nav>

                        {/* Мобильное меню кнопка */}
                        <button
                            className="md:hidden text-gray-700"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Мобильное меню */}
                    {mobileMenuOpen && (
                        <div className="md:hidden py-4 border-t border-[#C9B299]">
                            <nav className="flex flex-col gap-4">
                                {navLinks.map(link => (
                                    <button
                                        key={link.name}
                                        type="button"
                                        onClick={link.action}
                                        className="text-left text-gray-700 hover:text-[#A67C52] transition-colors"
                                    >
                                        {link.name}
                                    </button>
                                ))}
                                <button
                                    type="button"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setModalOpen(true);
                                    }}
                                    className="bg-[#A67C52] text-white px-6 py-2 rounded-lg hover:bg-[#8B6640] transition-colors text-center w-full"
                                >
                                    Заказать
                                </button>
                            </nav>
                        </div>
                    )}
                </div>
            </header>
            {modalOpen && (<ContactModal open={modalOpen} onOpenChange={setModalOpen} />)}
        </>
    );
}
