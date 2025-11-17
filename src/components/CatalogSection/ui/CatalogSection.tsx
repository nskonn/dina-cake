import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    CatalogCategory,
    CATEGORY_DISPLAY_ORDER,
    CATEGORY_SUBCATEGORIES,
    CakesSubcategory,
    BentoCakesSubcategory,
    CupcakesSubcategory,
    TrifleSubcategory,
    EskimoSubcategory,
    CakePopsSubcategory,
} from '../model/enums';

export type CatalogSectionProps = {
    onOrderClick: () => void;
};

type Product = {
    name: string;
    description: string;
    price: string;
    image: string;
    badge: string;
    category: CatalogCategory;
    subcategory: string;
};

const FEATURED_PRODUCTS: Product[] = [
    {
        name: 'Торт «Ананас-лайм» муссовый',
        description:
            'Муссовый торт на основе ананасового йогурта и натуральных сливок с бисквитом из сгущенного молока и мятно-лаймовой прослойкой. Украшен дольками свежего ананаса, глазурью манго-маракуйя и ароматной цедрой лайма.',
        price: '2 900 р.',
        image:
            'https://images.unsplash.com/photo-1543509338-c6faf7aeb69c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGNyZWFtJTIwY2FrZXxlbnwxfHx8fDE3NjI3MTUwNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Новинка',
        category: CatalogCategory.Cakes,
        subcategory: CakesSubcategory.BerryCloud,
    },
    {
        name: '«Манго-кейк»',
        description:
            'Воздушный бисквит пропитанный сахарным сиропом с коньяком, с прослойкой малинового конфи, экзотического крема манго-маракуйя и сливочно-малиновой начинки. Крем торта сделан на основе творожного сыра, сыра Маскарпоне и натуральных сливок.',
        price: '4 100 р.',
        image:
            'https://images.unsplash.com/photo-1730672558646-c65c4784dd16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZWxsb3clMjBjYWtlJTIwZGVzc2VydHxlbnwxfHx8fDE3NjI3MTUwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Сезонное',
        category: CatalogCategory.Cakes,
        subcategory: CakesSubcategory.RedVelvet,
    },
    {
        name: '«Творожное суфле» в глазури',
        description:
            'Торт из воздушной мягкой меренги с нежным творогом на тонких коржах на основе белого сгущенного молока. Покрыт глазурью гурмэ из темного шоколада. Торт рассчитан на 8 порций.',
        price: '2 200 р.',
        image:
            'https://images.unsplash.com/photo-1761637604976-40612bc4544c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwcm91bmR8ZW58MXx8fHwxNzYyNzE1MDQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
        badge: 'Новинка',
        category: CatalogCategory.Cakes,
        subcategory: CakesSubcategory.MilkGirl,
    },
    {
        name: 'Бенто «Сникерс»',
        description:
            'Мини-торт с шоколадным бисквитом, карамельным кремом и хрустящей прослойкой из арахиса. Идеальный десерт на двоих.',
        price: '1 200 р.',
        image:
            'https://images.unsplash.com/photo-1481391032119-d89fee407e44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        badge: 'Бестселлер',
        category: CatalogCategory.BentoCakes,
        subcategory: BentoCakesSubcategory.Snickers,
    },
    {
        name: 'Капкейки «Шоколадное комбо»',
        description:
            'Набор из шести капкейков с шоколадным бисквитом, ганашем и кремом на основе сыра маскарпоне.',
        price: '1 650 р.',
        image:
            'https://images.unsplash.com/photo-1481391032119-d89fee407e44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        badge: 'Хит',
        category: CatalogCategory.Cupcakes,
        subcategory: CupcakesSubcategory.ChocolateCombo,
    },
    {
        name: 'Трайфл «Ваниль-клубника»',
        description:
            'Слоёный десерт в стаканчике с ванильным бисквитом, свежей клубникой и нежным крем-сыром.',
        price: '450 р.',
        image:
            'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        badge: 'Лето',
        category: CatalogCategory.Trifle,
        subcategory: TrifleSubcategory.VanillaStrawberry,
    },
    {
        name: 'Эскимо «Мак-лимон»',
        description:
            'Авторское эскимо на палочке с маковым бисквитом, лимонным курдом и белым шоколадом.',
        price: '320 р.',
        image:
            'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        badge: 'Новое',
        category: CatalogCategory.Eskimo,
        subcategory: EskimoSubcategory.PoppyLemon,
    },
    {
        name: 'Кейк-попсы «Ванильные»',
        description:
            'Нежные шарики из ванильного бисквита на палочке, покрытые белым шоколадом и хрустящей посыпкой.',
        price: '150 р.',
        image:
            'https://images.unsplash.com/photo-1505253668822-42074d58a7f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        badge: 'Для праздника',
        category: CatalogCategory.CakePops,
        subcategory: CakePopsSubcategory.Vanilla,
    },
];

export function CatalogSection({ onOrderClick }: CatalogSectionProps) {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState<CatalogCategory>(CatalogCategory.Cakes);
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
                        className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors border ${
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

        return FEATURED_PRODUCTS.filter(product => {
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
                                    ? 'border-b-2 border-gray-900 text-gray-900'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {renderSubcategories(selectedCategory)}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {filteredProducts.length === 0 && (
                        <div className="col-span-full rounded-xl border border-dashed border-gray-300 bg-white/60 p-8 text-center text-gray-600">
                            В этой подкатегории пока нет товаров, но мы уже работаем над обновлением
                            каталога ✨
                        </div>
                    )}

                    {filteredProducts.map(product => (
                        <div
                            key={product.name}
                            className="group cursor-pointer h-full overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-200 rounded-xl flex flex-col"
                        >
                            <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#F5E8DC] to-[#E8C5C5] relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                                <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm px-4 py-2 rounded shadow-lg">
                                    <p
                                        className="text-white"
                                        style={{
                                            fontFamily: "'Montserrat', sans-serif",
                                            fontWeight: '600',
                                        }}
                                    >
                                        {product.price} кг.
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
                    ))}
                </div>

                <div className="text-center">
                    <button
                        onClick={() => navigate('/catalog')}
                        className="bg-[#A67C52] text-white px-8 py-3 hover:bg-[#8B6640] transition-colors rounded-lg"
                    >
                        Показать больше
                    </button>
                </div>
            </div>
        </section>
    );
}

