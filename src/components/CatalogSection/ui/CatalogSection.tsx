import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CatalogCategory, CATEGORY_DISPLAY_ORDER, CATEGORY_SUBCATEGORIES } from '../model/enums';
import { FeaturedProductCard } from '../../../entity/Product';
import {
    BENTO_CATALOG,
    CAKE_CATALOG,
    CUPCAKES_CATALOG,
    ESCIMO_CATALOG, MACARONS_CATALOG,
    MUSS_BENTO_CATALOG,
    TRIFLE_CATALOG,
} from '../../../data/catalog_data';
import { CatalogProduct } from '../model/types';

export type CatalogSectionProps = {
    onOrderClick: () => void;
};

export function CatalogSection({ onOrderClick }: CatalogSectionProps) {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState<CatalogCategory>(
        CatalogCategory.Cakes,
    );
    const [selectedSubcategory, setSelectedSubcategory] = useState<string>(
        CATEGORY_SUBCATEGORIES[CatalogCategory.Cakes][0],
    );

    const handleCategoryChange = (category: CatalogCategory) => {
        setSelectedCategory(category);
        setSelectedSubcategory(CATEGORY_SUBCATEGORIES[category][0]);
    };

    const renderSubcategories = (category: CatalogCategory) => {
        const subcategories = CATEGORY_SUBCATEGORIES[category] ?? [];

        if (subcategories.length === 0) {
            return null;
        }

        return (
            <div className="flex gap-3 sm:gap-4 lg:gap-5 mb-6 sm:mb-8 pb-4 md:pb-6 sm:pb-2 border-b border-gray-300 overflow-x-auto sm:overflow-visible flex-wrap scrollbar-hide -mx-2 px-2 sm:mx-0 sm:px-0">
                {subcategories.map(subcategory => (
                    <button
                        key={subcategory}
                        onClick={() => setSelectedSubcategory(subcategory)}
                        className={`shrink-0 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-colors border ${
                            selectedSubcategory === subcategory
                                ? 'bg-gray-900 border-gray-900 text-white shadow-sm'
                                : 'bg-white/80 border-gray-200 text-gray-600 hover:text-gray-900'
                        }`}
                    >
                        {subcategory}
                    </button>
                ))}
            </div>
        );
    };

    const filteredProducts = (() => {
        const subcategories = CATEGORY_SUBCATEGORIES[selectedCategory];
        const allValue = subcategories?.[0];

        // Выбираем нужный каталог в зависимости от категории
        let currentCatalog: CatalogProduct[] = CAKE_CATALOG;
        if (selectedCategory === CatalogCategory.MussBentoCakes) {
            currentCatalog = MUSS_BENTO_CATALOG;
        } else if (selectedCategory === CatalogCategory.Eskimo) {
            currentCatalog = ESCIMO_CATALOG;
        } else if (selectedCategory === CatalogCategory.BentoCakes) {
            currentCatalog = BENTO_CATALOG;
        } else if (selectedCategory === CatalogCategory.Trifle) {
            currentCatalog = TRIFLE_CATALOG;
        } else if (selectedCategory === CatalogCategory.Cupcakes) {
            currentCatalog = CUPCAKES_CATALOG;
        } else if (selectedCategory === CatalogCategory.Macarons) {
            currentCatalog = MACARONS_CATALOG;
        }
        return currentCatalog.filter(product => {
            if (product.category !== selectedCategory) {
                return false;
            }

            if (!allValue || selectedSubcategory === allValue) {
                return true;
            }

            return product.subcategory === selectedSubcategory;
        });
    })();

    return (
        <section className="py-20 bg-[#F5E8DC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-12">
                    <h2
                        className="text-gray-900 text-4xl md:text-5xl"
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: '500',
                            letterSpacing: '0.02em',
                        }}
                    >
                        КАТАЛОГ
                    </h2>
                </div>

                <div className="flex gap-6 mb-4 md:mb-6 overflow-x-auto pb-2 scrollbar-hide border-b border-gray-300">
                    {CATEGORY_DISPLAY_ORDER.map(category => (
                        <button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={`whitespace-nowrap pb-4 transition-colors ${
                                selectedCategory === category
                                    ? 'font-bold border-gray-900 text-gray-900'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {![
                    CatalogCategory.Trifle,
                    CatalogCategory.Cupcakes,
                ].includes(selectedCategory) && renderSubcategories(selectedCategory)}

                {/*{selectedCategory === CatalogCategory.BentoCakes && (*/}
                {/*    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">*/}
                {/*        <FeaturedProductCard*/}
                {/*            key={BENTO_CATALOG[0].name}*/}
                {/*            product={BENTO_CATALOG[0]}*/}
                {/*            onOrderClick={onOrderClick}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*)}*/}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {/*    {filteredProducts.length === 0 && (*/}
                    {/*        <div className="col-span-full rounded-xl border border-dashed border-gray-300 bg-white/60 p-8 text-center text-gray-600">*/}
                    {/*            В этой подкатегории пока нет товаров, но мы уже работаем над обновлением*/}
                    {/*            каталога ✨*/}
                    {/*        </div>*/}
                    {/*    )}*/}

                    {filteredProducts.map(product => (
                        <FeaturedProductCard
                            key={product.name}
                            product={product}
                            onOrderClick={onOrderClick}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
