import { Phone, MessageCircle, Send, ChevronRight, X } from 'lucide-react';

interface ContactModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
    const contactInfo = {
        phone: '+7 (918) 547-14-09',
        whatsapp: '+79185471409',
        telegram: 'disk_cake',
    };

    const contactMethods = [
        {
            id: 'phone',
            title: 'Телефон',
            value: '+7 (918) 547-14-09',
            icon: Phone,
            color: 'bg-[#A38870]', // Warm brown/gold
            textColor: 'text-[#A38870]',
            bgColor: 'bg-[#A38870]/10',
            action: 'tel:+79185471409',
        },
        {
            id: 'whatsapp',
            title: 'WhatsApp',
            value: '+7 (918) 547-14-09',
            icon: MessageCircle,
            color: 'bg-[#4ADE80]', // Green
            textColor: 'text-green-600',
            bgColor: 'bg-green-100',
            action: 'https://wa.me/79185471409',
        },
        {
            id: 'telegram',
            title: 'Telegram',
            value: '@disk_cake',
            icon: Send,
            color: 'bg-[#60A5FA]', // Blue
            textColor: 'text-blue-600',
            bgColor: 'bg-blue-100',
            action: 'https://t.me/disk_cake',
        },
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
            {/* Backdrop with blur */}
            <div
                className="absolute inset-0 bg-[#1A1A1A]/30 backdrop-blur-sm transition-opacity"
                onClick={() => onOpenChange(false)}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-md bg-[#F9F7F4] rounded-[2.5rem] shadow-2xl p-8 md:p-10 transform transition-all scale-100">
                {/* Close button */}
                <button
                    onClick={() => onOpenChange(false)}
                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 transition-colors text-gray-400 hover:text-black"
                >
                    <X size={24} strokeWidth={1.5} />
                </button>

                <div className="text-center mb-10 mt-2">
                    <h3 className="text-3xl md:text-4xl font-serif font-medium mb-3 text-[#1A1A1A]">
                        Свяжитесь с нами
                    </h3>
                    <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-xs mx-auto">
                        Мы на связи в мессенджерах и по телефону
                    </p>
                </div>

                <div className="space-y-4">
                    {contactMethods.map(method => (
                        <a
                            key={method.id}
                            href={method.action}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-5 p-4 rounded-3xl bg-white border border-[#E5D5C5]/40 hover:border-[#D5C5B5] transition-all duration-300 hover:shadow-xl hover:shadow-[#D5C5B5]/20 group relative overflow-hidden"
                        >
                            {/* Subtle color background on hover */}
                            <div
                                className={`absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity ${method.color.replace('bg-', 'bg-')}`}
                            ></div>

                            <div
                                className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-110 ${method.color}`}
                            >
                                <method.icon
                                    size={22}
                                    fill="currentColor"
                                    className="opacity-95"
                                    strokeWidth={1.5}
                                />
                            </div>

                            <div className="flex-1 text-left">
                                <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-0.5 block">
                                    {method.title}
                                </span>
                                <span className="text-lg font-medium text-[#1A1A1A] font-sans">
                                    {method.value}
                                </span>
                            </div>

                            <div className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 group-hover:text-[#1A1A1A] group-hover:bg-[#1A1A1A]/5 transition-all">
                                <ChevronRight size={18} />
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </div>
    );
}
