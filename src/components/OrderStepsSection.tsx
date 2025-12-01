import { Calendar, Cake, Scale, Palette, Send } from 'lucide-react';

type OrderStepsSectionProps = {
    onOrderClick: () => void;
};

export function OrderStepsSection({ onOrderClick }: OrderStepsSectionProps) {
    return (
        <section className="py-10 md:py-20 bg-[#C5D9D8]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2
                        className="text-gray-900 mb-4  text-4xl md:text-5xl"
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow rounded-lg">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-[#A67C52] text-white rounded-sm flex items-center justify-center">
                                    <Calendar className="w-6 h-6" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <span
                                        className="text-[#A67C52]"
                                        style={{
                                            fontFamily: "'Montserrat', sans-serif",
                                            fontWeight: '700',
                                        }}
                                    >
                                        ШАГ 1
                                    </span>
                                    <div className="h-px flex-1 bg-[#E8C5C5]"></div>
                                </div>
                                <h3
                                    className="text-gray-900 mb-2"
                                    style={{
                                        fontFamily: "'Montserrat', sans-serif",
                                        fontWeight: '600',
                                    }}
                                >
                                    Определитесь с датой
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Выберите дату мероприятия и сообщите нам заранее
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow rounded-lg">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-[#A67C52] text-white rounded-sm flex items-center justify-center">
                                    <Cake className="w-6 h-6" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <span
                                        className="text-[#A67C52]"
                                        style={{
                                            fontFamily: "'Montserrat', sans-serif",
                                            fontWeight: '700',
                                        }}
                                    >
                                        ШАГ 2
                                    </span>
                                    <div className="h-px flex-1 bg-[#E8C5C5]"></div>
                                </div>
                                <h3
                                    className="text-gray-900 mb-2"
                                    style={{
                                        fontFamily: "'Montserrat', sans-serif",
                                        fontWeight: '600',
                                    }}
                                >
                                    Выберите начинку
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Подберите идеальную начинку из нашего каталога
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow rounded-lg">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-[#A67C52] text-white rounded-sm flex items-center justify-center">
                                    <Scale className="w-6 h-6" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <span
                                        className="text-[#A67C52]"
                                        style={{
                                            fontFamily: "'Montserrat', sans-serif",
                                            fontWeight: '700',
                                        }}
                                    >
                                        ШАГ 3
                                    </span>
                                    <div className="h-px flex-1 bg-[#E8C5C5]"></div>
                                </div>
                                <h3
                                    className="text-gray-900 mb-2"
                                    style={{
                                        fontFamily: "'Montserrat', sans-serif",
                                        fontWeight: '600',
                                    }}
                                >
                                    Укажите желаемый вес
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Рассчитаем количество порций для ваших гостей
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow rounded-lg">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-[#A67C52] text-white rounded-sm flex items-center justify-center">
                                    <Palette className="w-6 h-6" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <span
                                        className="text-[#A67C52]"
                                        style={{
                                            fontFamily: "'Montserrat', sans-serif",
                                            fontWeight: '700',
                                        }}
                                    >
                                        ШАГ 4
                                    </span>
                                    <div className="h-px flex-1 bg-[#E8C5C5]"></div>
                                </div>
                                <h3
                                    className="text-gray-900 mb-2"
                                    style={{
                                        fontFamily: "'Montserrat', sans-serif",
                                        fontWeight: '600',
                                    }}
                                >
                                    Опишите декор
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Расскажите о пожеланиях или пришлите фото
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button
                        onClick={onOrderClick}
                        className="inline-flex items-center gap-3 bg-[#A67C52] text-white px-8 py-4 hover:bg-[#8B6640] transition-colors shadow-lg hover:shadow-xl"
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: '500',
                        }}
                    >
                        Оформить заказ
                    </button>
                </div>
            </div>
        </section>
    );
}
