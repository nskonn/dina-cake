import { Calendar, Cake, Scale, Palette, Send } from 'lucide-react';

type OrderStepsSectionProps = {
    onOrderClick: () => void;
};

export function OrderStepsSection({ onOrderClick }: OrderStepsSectionProps) {
    const steps = [
        {
            id: 1,
            icon: Calendar,
            title: 'Определитесь с датой',
            desc: 'Выберите дату мероприятия и сообщите нам заранее',
        },
        {
            id: 2,
            icon: Cake,
            title: 'Выберите начинку',
            desc: 'Подберите идеальную начинку из нашего каталога',
        },
        {
            id: 3,
            icon: Scale,
            title: 'Укажите желаемый вес',
            desc: 'Рассчитаем количество порций для ваших гостей',
        },
        {
            id: 4,
            icon: Palette,
            title: 'Опишите декор',
            desc: 'Расскажите о пожеланиях или пришлите фото',
        },
    ];

    return (
        <section className="py-10 md:py-20 bg-white/60">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2
                        className="text-gray-900 mb-4  text-3xl md:text-5xl"
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: '500',
                        }}
                    >
                        КАК СДЕЛАТЬ ЗАКАЗ
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
                        Простой процесс оформления заказа в несколько шагов
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    {steps.map(step => (
                        <div key={step.id} className="flex gap-6 items-start group">
                            <div className="flex-shrink-0 w-14 h-14 rounded-2xl border border-[#8B735B] flex items-center justify-center text-white shadow-lg shadow-[#8B735B]/20 transition-transform duration-300">
                                <step.icon className="text-[#8B735B]" size={32} strokeWidth={1.5} />
                            </div>
                            <div className="flex-1 pt-1">
                                <div className="flex items-center gap-4 mb-2">
                                    <span className="text-[#8B735B] font-bold text-sm tracking-widest uppercase">
                                        Шаг {step.id}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-[#1A1A1A]">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <button onClick={onOrderClick} className="px-8 py-4 text-[#8B735B] border border-[#8B735B] rounded-xl font-medium text-lg hover:text-white hover:bg-[#6D5A46] transition-all duration-300 shadow-lg shadow-[#8B735B]/30 active:scale-95">
                        Оформить заказ
                    </button>
                </div>
            </div>
        </section>
    );
}
