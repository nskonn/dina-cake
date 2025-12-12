import React from 'react';
import { Instagram, MessageCircle, Send } from 'lucide-react';

export const Footer = () => {
    const contactInfo = {
        phone: '+79185471409',
        whatsapp: '+79185471409',
        telegram: 'disk_cake',
        instagram: 'dina.s_cake',
    };

    return (
        <footer className="bg-[#1b1b1b] text-white py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* О нас */}
                    <div>
                        <span
                            className="text-transparent font-script bg-clip-text bg-gradient-to-r from-[#A67C52] via-[#C4956F] to-[#D4A574] tracking-wide"
                            style={{
                                fontWeight: '700',
                                fontSize: '32px',
                            }}
                        >
                            Dina's cake
                        </span>
                        <p className="text-white/80 leading-relaxed">
                            Создаем авторские кондитерские изделия с душой и любовью к деталям
                        </p>
                    </div>

                    {/* Контакты */}
                    <div>
                        <h3
                            className="mb-4"
                            style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: '700',
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
                                fontWeight: '700',
                            }}
                        >
                            Мы в социальных сетях
                        </h3>
                        <div className="flex gap-4">
                            {/* WhatsApp */}
                            <a
                                href={`https://wa.me/${contactInfo.whatsapp}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative w-10 h-10 rounded-full flex items-center justify-center group transition-all duration-300 hover:scale-110"
                            >
                                <div className="absolute inset-0 bg-[#25D366]/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                                <div className="relative bg-gradient-to-br from-[#25D366] to-[#20BA5A] rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
                                    <MessageCircle size={20} className="text-white" />
                                </div>
                            </a>

                            {/* Telegram */}
                            <a
                                href={`https://t.me/${contactInfo.telegram}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative w-10 h-10 rounded-full flex items-center justify-center group transition-all duration-300 hover:scale-110"
                            >
                                <div className="absolute inset-0 bg-[#229ED9]/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                                <div className="relative bg-gradient-to-br from-[#229ED9] to-[#0088cc] rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
                                    <Send size={20} className="text-white" />
                                </div>
                            </a>

                            {/* Instagram */}
                            <a
                                href={`https://instagram.com/${contactInfo.instagram}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative w-10 h-10 rounded-full flex items-center justify-center group transition-all duration-300 hover:scale-110"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#E4405F] via-[#F77737] to-[#FCAF45] opacity-20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                                <div className="relative rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]"></div>
                                    <Instagram size={20} className="text-white relative z-10" />
                                </div>
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

                <div className="text-center text-sm mt-2 text-white/60">
                    <span>Разработка сайта:</span>
                    <a
                        href="https://webzella.ru"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-500 ml-1 font-bold hover:text-emerald-400 transition-colors relative group"
                    >
                        webzella.ru
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </div>
            </div>
        </footer>
    );
};
