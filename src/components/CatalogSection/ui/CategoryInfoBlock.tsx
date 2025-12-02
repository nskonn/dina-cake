import React from 'react';
import { CatalogCategory } from '../model/enums';

type CategoryInfoBlockProps = {
    category: CatalogCategory;
};

export const CategoryInfoBlock: React.FC<CategoryInfoBlockProps> = ({ category }) => {
    if (category === CatalogCategory.BentoCakes) {
        return (
            <div className=" mt-6 relative overflow-hidden">
                {/* Градиентный фон */}
                <div className="absolute inset-0 bg-white/60 rounded-2xl"></div>
                
                {/* Декоративные элементы */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#A67C52]/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#C4956F]/5 rounded-full -ml-20 -mb-20 blur-2xl"></div>
                
                <div className="relative p-6 md:p-8 lg:p-10 border border-[#E8C5C5]/50 rounded-2xl shadow-lg">
                    <div className="space-y-6">
                        {/* Вес и базовая информация */}
                        <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                            <div className="flex-1">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#A67C52]/10 rounded-full mb-3">
                                    <svg
                                        className="w-5 h-5 text-[#A67C52]"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                                        />
                                    </svg>
                                    <span
                                        className="text-[#A67C52] font-semibold text-sm"
                                        style={{
                                            fontFamily: "'Montserrat', sans-serif",
                                            fontWeight: '600',
                                        }}
                                    >
                                        ВЕС ~ 400-450г
                                    </span>
                                </div>
                                <h3
                                    className="text-xl md:text-2xl font-bold text-gray-900 mb-2"
                                    style={{
                                        fontFamily: "'Montserrat', sans-serif",
                                        fontWeight: '700',
                                    }}
                                >
                                    На 2-3 человек
                                </h3>
                                <p
                                    className="text-gray-700 text-sm md:text-base leading-relaxed"
                                    style={{
                                        fontFamily: "'Montserrat', sans-serif",
                                    }}
                                >
                                    В стоимость входит покрытие любого цвета, надпись, небольшой рисунок
                                </p>
                            </div>
                        </div>

                        {/* Дополнительная информация */}
                        <div className=" bg-amber-50/50">
                            <p
                                className="text-sm md:text-base font-semibold text-gray-800 leading-relaxed"
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontWeight: '600',
                                }}
                            >
                                ⚠️ Сложный дизайн, декор ягодами, шоколадом и орехами оплачивается отдельно
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        );
    }

    return null;
};

