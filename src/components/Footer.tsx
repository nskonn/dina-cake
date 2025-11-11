import {ContactModal} from "./ContactModal";
import { Instagram, MessageCircle, Send } from 'lucide-react';

export const Footer = () => {
    const contactInfo = {
        phone: '+7 (999) 123-45-67',
        whatsapp: '+79991234567',
        telegram: 'dinascake',
        instagram: 'dinascake',
    };

    return (
    <footer className="bg-[#1b1b1b] text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {/* О нас */}
                <div>
                    <h3
                        className="mb-4"
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: "700",
                        }}
                    >
                        Dina's Cake
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                        Создаем авторские кондитерские изделия с душой и
                        любовью к деталям
                    </p>
                </div>

                {/* Контакты */}
                <div>
                    <h3
                        className="mb-4"
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: "700",
                        }}
                    >
                        Контакты
                    </h3>
                    <div className="space-y-2 text-white/80">
                        <p>{contactInfo.phone}</p>
                        <p>@{contactInfo.telegram}</p>
                        <p>@{contactInfo.instagram}</p>
                    </div>
                </div>

                {/* Социальные сети */}
                <div>
                    <h3
                        className="mb-4"
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: "700",
                        }}
                    >
                        Мы в социальных сетях
                    </h3>
                    <div className="flex gap-4">
                        <a
                            href={`https://wa.me/${contactInfo.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
                        >
                            <MessageCircle size={20} />
                        </a>
                        <a
                            href={`https://t.me/${contactInfo.telegram}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
                        >
                            <Send size={20} />
                        </a>
                        <a
                            href={`https://instagram.com/${contactInfo.instagram}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
                        >
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Разделитель */}
            <div className="h-px bg-white/20 mb-6"></div>

            {/* Копирайт */}
            <div className="text-center text-white/60 text-sm">
                <p>© 2025 Dina's Cake. Все права защищены.</p>
            </div>
        </div>
    </footer>
    )
}