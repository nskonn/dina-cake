import React from 'react';
import { Phone, MessageCircle, Send, Instagram } from 'lucide-react';

export function ContactsSection() {
    const contactInfo = {
        phone: '+79185471409',
        whatsapp: '+79185471409',
        telegram: 'disk_cake',
        instagram: 'dina.s_cake',
    };

    return (
        <section id="contact" className="py-12 md:py-20 bg-[#F3EFE9] relative overflow-hidden">
            {/* Декоративные элементы */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8C5C5]/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#A67C52]/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-8 md:mb-12">
                    <h2
                        className="text-gray-900 mb-3 md:mb-4 text-3xl md:text-4xl lg:text-5xl"
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: '500',
                            letterSpacing: '0.02em',
                        }}
                    >
                        КОНТАКТЫ
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg lg:text-xl px-2">
                        Свяжитесь с нами удобным способом, и мы ответим на все ваши вопросы
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 md:gap-6">
                    {/* Телефон */}
                    <a
                        href={`tel:${contactInfo.phone}`}
                        className="relative flex flex-row md:flex-col items-center gap-3 md:gap-4 p-4 md:p-6 bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl hover:shadow-xl transition-all duration-300 group border border-gray-200/50 hover:border-[#A67C52]/30 hover:-translate-y-1 overflow-hidden"
                    >
                        {/* Декоративный фон для мобильных */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-[#A67C52]/5 rounded-full -mr-10 -mt-10 md:hidden"></div>
                        
                        <div className="relative flex-shrink-0">
                            <div className="absolute inset-0 bg-[#A67C52]/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                            <div className="relative bg-gradient-to-br from-[#A67C52] to-[#8B6640] text-white p-2.5 md:p-4 rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <Phone size={20} className="md:w-6 md:h-6" />
                            </div>
                        </div>
                        <div className="flex-1 min-w-0 md:text-center">
                            <div
                                className="text-gray-500 text-xs md:text-sm mb-0.5 md:mb-1 font-medium flex items-center gap-1.5 md:justify-center"
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                }}
                            >
                                <span className="hidden md:inline">Телефон</span>
                                <span className="md:hidden text-[#A67C52] font-semibold">Телефон</span>
                            </div>
                            <div
                                className="text-gray-900 font-semibold text-sm md:text-base"
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                }}
                            >
                                +7 (918) 547-14-09
                            </div>
                        </div>
                        {/* Декоративная стрелка для мобильных */}
                        <div className="flex-shrink-0 md:hidden text-gray-300 group-hover:text-[#A67C52] transition-colors">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </div>
                    </a>

                    {/* WhatsApp */}
                    <a
                        href={`https://wa.me/${contactInfo.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex flex-row md:flex-col items-center gap-3 md:gap-4 p-4 md:p-6 bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl hover:shadow-xl transition-all duration-300 group border border-gray-200/50 hover:border-[#25D366]/30 hover:-translate-y-1 overflow-hidden"
                    >
                        {/* Декоративный фон для мобильных */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-[#25D366]/5 rounded-full -mr-10 -mt-10 md:hidden"></div>
                        
                        <div className="relative flex-shrink-0">
                            <div className="absolute inset-0 bg-[#25D366]/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                            <div className="relative bg-gradient-to-br from-[#25D366] to-[#20BA5A] text-white p-2.5 md:p-4 rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <MessageCircle size={20} className="md:w-6 md:h-6" />
                            </div>
                        </div>
                        <div className="flex-1 min-w-0 md:text-center">
                            <div
                                className="text-gray-500 text-xs md:text-sm mb-0.5 md:mb-1 font-medium flex items-center gap-1.5 md:justify-center"
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                }}
                            >
                                <span className="hidden md:inline">WhatsApp</span>
                                <span className="md:hidden text-[#25D366] font-semibold">WhatsApp</span>
                            </div>
                            <div
                                className="text-gray-900 font-semibold text-sm md:text-base"
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                }}
                            >
                                {contactInfo.phone}
                            </div>
                        </div>
                        {/* Декоративная стрелка для мобильных */}
                        <div className="flex-shrink-0 md:hidden text-gray-300 group-hover:text-[#25D366] transition-colors">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </div>
                    </a>

                    {/* Telegram */}
                    <a
                        href={`https://t.me/${contactInfo.telegram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex flex-row md:flex-col items-center gap-3 md:gap-4 p-4 md:p-6 bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl hover:shadow-xl transition-all duration-300 group border border-gray-200/50 hover:border-[#229ED9]/30 hover:-translate-y-1 overflow-hidden"
                    >
                        {/* Декоративный фон для мобильных */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-[#229ED9]/5 rounded-full -mr-10 -mt-10 md:hidden"></div>
                        
                        <div className="relative flex-shrink-0">
                            <div className="absolute inset-0 bg-[#229ED9]/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                            <div className="relative bg-gradient-to-br from-[#229ED9] to-[#0088cc] text-white p-2.5 md:p-4 rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <Send size={20} className="md:w-6 md:h-6" />
                            </div>
                        </div>
                        <div className="flex-1 min-w-0 md:text-center">
                            <div
                                className="text-gray-500 text-xs md:text-sm mb-0.5 md:mb-1 font-medium flex items-center gap-1.5 md:justify-center"
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                }}
                            >
                                <span className="hidden md:inline">Telegram</span>
                                <span className="md:hidden text-[#229ED9] font-semibold">Telegram</span>
                            </div>
                            <div
                                className="text-gray-900 font-semibold text-sm md:text-base"
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                }}
                            >
                                @{contactInfo.telegram}
                            </div>
                        </div>
                        {/* Декоративная стрелка для мобильных */}
                        <div className="flex-shrink-0 md:hidden text-gray-300 group-hover:text-[#229ED9] transition-colors">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </div>
                    </a>

                    {/* Instagram */}
                    <a
                        href={`https://www.instagram.com/dina.s_cake`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex flex-row md:flex-col items-center gap-3 md:gap-4 p-4 md:p-6 bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl hover:shadow-xl transition-all duration-300 group border border-gray-200/50 hover:-translate-y-1 overflow-hidden"
                    >
                        {/* Декоративный фон для мобильных */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#E4405F]/5 via-[#F77737]/5 to-[#FCAF45]/5 rounded-full -mr-10 -mt-10 md:hidden"></div>
                        
                        <div className="relative flex-shrink-0">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#E4405F] via-[#F77737] to-[#FCAF45] opacity-20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                            <div className="relative p-2.5 md:p-4 rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] rounded-full"></div>
                                <div className="relative text-white">
                                    <Instagram size={20} className="md:w-6 md:h-6" />
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 min-w-0 md:text-center">
                            <div
                                className="text-gray-500 text-xs md:text-sm mb-0.5 md:mb-1 font-medium flex items-center gap-1.5 md:justify-center"
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                }}
                            >
                                <span className="hidden md:inline">Instagram</span>
                                <span className="md:hidden font-semibold" style={{ background: 'linear-gradient(135deg, #833AB4, #FD1D1D, #FCAF45)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                    Instagram
                                </span>
                            </div>
                            <div
                                className="text-gray-900 font-semibold text-sm md:text-base"
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                }}
                            >
                                @{contactInfo.instagram}
                            </div>
                        </div>
                        {/* Декоративная стрелка для мобильных */}
                        <div className="flex-shrink-0 md:hidden text-gray-300 group-hover:opacity-70 transition-opacity">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
