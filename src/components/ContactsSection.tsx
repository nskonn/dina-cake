import React from 'react';
import { Phone, MessageCircle, Send, Instagram } from 'lucide-react';

export function ContactsSection() {
    const contactInfo = {
        phone: '+79185471409',
        whatsapp: '+79185471409',
        telegram: 'Dinas_cake',
        instagram: 'dina.s_cake',
    };

    return (
        <section id="contact" className="py-12 md:py-20 bg-[#F5E8DC] relative overflow-hidden">
            {/* Декоративные элементы */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8C5C5]/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#A67C52]/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2
                        className="text-gray-900 mb-4 text-4xl md:text-5xl"
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: '500',
                            letterSpacing: '0.02em',
                        }}
                    >
                        КОНТАКТЫ
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
                        Свяжитесь с нами удобным способом, и мы ответим на все ваши вопросы
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Телефон */}
                    <a
                        href={`tel:${contactInfo.phone}`}
                        className="relative flex flex-col items-center gap-4 p-6 bg-white/90 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-all duration-300 group border border-gray-200/50 hover:border-[#A67C52]/30 hover:-translate-y-1"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#A67C52]/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                            <div className="relative bg-gradient-to-br from-[#A67C52] to-[#8B6640] text-white p-4 rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <Phone size={24} />
                            </div>
                        </div>
                        <div className="text-center flex-1">
                            <div
                                className="text-gray-500 text-sm mb-1 font-medium"
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                }}
                            >
                                Телефон
                            </div>
                            <div
                                className="text-gray-900 font-semibold"
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                }}
                            >
                                +7 (918) 547-14-09
                            </div>
                        </div>
                    </a>

                    {/* WhatsApp */}
                    <a
                        href={`https://wa.me/${contactInfo.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex flex-col items-center gap-4 p-6 bg-white/90 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-all duration-300 group border border-gray-200/50 hover:border-[#25D366]/30 hover:-translate-y-1"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#25D366]/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                            <div className="relative bg-gradient-to-br from-[#25D366] to-[#20BA5A] text-white p-4 rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <MessageCircle size={24} />
                            </div>
                        </div>
                        <div className="text-center flex-1">
                            <div
                                className="text-gray-500 text-sm mb-1 font-medium"
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                }}
                            >
                                WhatsApp
                            </div>
                            <div
                                className="text-gray-900 font-semibold"
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                }}
                            >
                                {contactInfo.phone}
                            </div>
                        </div>
                    </a>

                    {/* Telegram */}
                    <a
                        href={`https://t.me/${contactInfo.telegram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex flex-col items-center gap-4 p-6 bg-white/90 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-all duration-300 group border border-gray-200/50 hover:border-[#229ED9]/30 hover:-translate-y-1"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#229ED9]/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                            <div className="relative bg-gradient-to-br from-[#229ED9] to-[#0088cc] text-white p-4 rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <Send size={24} />
                            </div>
                        </div>
                        <div className="text-center flex-1">
                            <div
                                className="text-gray-500 text-sm mb-1 font-medium"
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                }}
                            >
                                Telegram
                            </div>
                            <div
                                className="text-gray-900 font-semibold"
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                }}
                            >
                                @{contactInfo.telegram}
                            </div>
                        </div>
                    </a>

                    {/* Instagram */}
                    <a
                        href={`https://www.instagram.com/dina.s_cake`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex flex-col items-center gap-4 p-6 bg-white/90 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-all duration-300 group border border-gray-200/50 hover:-translate-y-1"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#E4405F] via-[#F77737] to-[#FCAF45] opacity-20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                            <div className="relative p-4 rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] rounded-full"></div>
                                <div className="relative text-white">
                                    <Instagram size={24} />
                                </div>
                            </div>
                        </div>
                        <div className="text-center flex-1">
                            <div
                                className="text-gray-500 text-sm mb-1 font-medium"
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                }}
                            >
                                Instagram
                            </div>
                            <div
                                className="text-gray-900 font-semibold"
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                }}
                            >
                                @{contactInfo.instagram}
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
