import React from 'react';

import type { CatalogProduct } from '../../../components/CatalogSection/model/types';

type FeaturedProductCardProps = {
    product: CatalogProduct;
    onOrderClick: () => void;
};

export const FeaturedProductCard: React.FC<FeaturedProductCardProps> = ({ product, onOrderClick }) => {
    return (
        <div className="group cursor-pointer h-full overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-200 rounded-xl flex flex-col">
            <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#F5E8DC] to-[#E8C5C5] relative">
                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-900">
                    {product.badge}
                </div>

                <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm px-4 py-2 rounded shadow-lg">
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
    );
};

