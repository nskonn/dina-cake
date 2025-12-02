import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ZoomIn } from 'lucide-react';

import type { CatalogProduct } from '../../../components/CatalogSection/model/types';

type FeaturedProductCardProps = {
    product: CatalogProduct;
    onOrderClick: () => void;
};

export const FeaturedProductCard: React.FC<FeaturedProductCardProps> = ({ product, onOrderClick }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            handleCloseModal();
        }
    };

    // Закрытие по клавише ESC
    useEffect(() => {
        if (!isModalOpen) return;

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsModalOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    return (
        <>
            <div className="group cursor-pointer h-full overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-200 rounded-xl flex flex-col">
                <div
                    className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#F5E8DC] to-[#E8C5C5] relative cursor-pointer"
                    onClick={handleImageClick}
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent z-10 group-hover:bg-black/20 transition-colors duration-300" />

                    {product.badge && (
                        <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-900 z-10">
                            {product.badge}
                        </div>
                    )}

                    <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm px-4 py-2 rounded shadow-lg z-10">
                        <p
                            className="text-white"
                            style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: '500',
                                letterSpacing: '0.04em',
                            }}
                        >
                            {product.price} {product.um}
                        </p>
                    </div>

                    {/* Иконка лупы при наведении (десктоп) */}
                    <div className="absolute inset-0 hidden md:flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="bg-white/80 rounded-full p-4 shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                            <ZoomIn className="w-10 h-10 text-[#A67C52]" strokeWidth={2.5} />
                        </div>
                    </div>

                    {/* Иконка лупы справа внизу (мобильные) */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleImageClick();
                        }}
                        className="absolute bottom-3 right-3 md:hidden z-20 bg-white/70 hover:bg-white rounded-full p-2.5 shadow-lg transition-all duration-300 active:scale-95"
                        aria-label="Увеличить изображение"
                    >
                        <ZoomIn className="w-5 h-5 text-[#A67C52]" strokeWidth={2.5} />
                    </button>
                </div>

            <div className="p-6 flex flex-col flex-1">
                <h3
                    className="text-gray-900 text-lg md:text-xl mb-3"
                    style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: '600',
                    }}
                >
                    {product.name}
                </h3>
                {Array.isArray(product.description) ? (
                    <div className="mb-5">
                        <ul
                            className="text-gray-600 leading-relaxed text-sm md:text-base space-y-1.5 list-none"
                            style={{
                                display: '-webkit-box',
                                WebkitLineClamp: 6,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                            }}
                        >
                            {product.description.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span
                                        className="mr-2.5 text-[#A67C52] flex-shrink-0 mt-0.5 font-bold"
                                        style={{
                                            fontFamily: "'Montserrat', sans-serif",
                                        }}
                                    >
                                        •
                                    </span>
                                    <span
                                        style={{
                                            fontFamily: "'Montserrat', sans-serif",
                                        }}
                                    >
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p
                        className="text-gray-600 leading-relaxed text-sm md:text-base mb-5 overflow-hidden text-ellipsis"
                        style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 6,
                            WebkitBoxOrient: 'vertical',
                        }}
                    >
                        {product.description}
                    </p>
                )}
                <button
                    onClick={onOrderClick}
                    className="mt-auto w-full border border-gray-300 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
                    style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: '600',
                    }}
                >
                    Заказать
                </button>
            </div>
            </div>

            {/* Модальное окно для просмотра изображения через Portal */}
            {isModalOpen &&
                createPortal(
                    <div
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-2 md:p-4 transition-opacity duration-300"
                        onClick={handleBackdropClick}
                        style={{ animation: 'fadeIn 0.3s ease-in-out' }}
                    >
                        {/* Кнопка закрытия */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleCloseModal();
                            }}
                            className="absolute top-2 right-2 md:top-4 md:right-4 z-10 bg-white/90 hover:bg-white text-gray-900 p-2 md:p-2.5 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-90 active:scale-95"
                            aria-label="Закрыть"
                        >
                            <X className="w-5 h-5 md:w-6 md:h-6" />
                        </button>

                        {/* Изображение */}
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-auto h-auto object-contain rounded-lg shadow-2xl"
                            style={{
                                maxWidth: 'calc(100vw - 1rem)',
                                maxHeight: 'calc(100vh - 1rem)',
                                animation: 'zoomIn 0.3s ease-in-out',
                            }}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>,
                    document.body,
                )}
        </>
    );
};

