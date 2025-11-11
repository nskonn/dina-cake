import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContactModal } from '../components/ContactModal';
import Slider from 'react-slick';
import { Footer } from '../components/Footer';
import { CatalogSection } from '../components/CatalogSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { OrderStepsSection } from '../components/OrderStepsSection';
import { ContactsSection } from '../components/ContactsSection';

export function Home() {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);

    // Carousel settings
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        appendDots: (dots: React.ReactNode) => (
            <div style={{ bottom: '30px' }}>
                <ul className="flex justify-center gap-2"> {dots} </ul>
            </div>
        ),
        customPaging: () => (
            <div className="w-2 h-2 bg-gray-400 rounded-full hover:bg-gray-600 transition-colors cursor-pointer"></div>
        ),
    };

    const featuredProducts = [
        {
            name: 'Торт "Ананас-Лайм"',
            subtitle: 'МУССОВЫЙ',
            price: '2 800 руб.',
            portion: '6 порций',
            portionPrice: '485 руб.',
            image: 'https://images.unsplash.com/photo-1593782724339-3d04ba0b7bda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWtlJTIwd2hpdGUlMjBwbGF0ZXxlbnwxfHx8fDE3NjI3MTQ3NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        },
        {
            name: 'Тарталетка "Айва-Апельсин"',
            subtitle: '',
            price: '310 руб.',
            portion: 'шт',
            portionPrice: '',
            image: 'https://images.unsplash.com/photo-1589402932101-9672b5778f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0cnklMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzYyNzE0NzU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
        },
        {
            name: 'Эклер "Пекан"',
            subtitle: '',
            price: '250 руб.',
            portion: '',
            portionPrice: '',
            image: 'https://images.unsplash.com/photo-1737700088028-fae0666feb83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwZWxlZ2FudCUyMHBsYXRlfGVufDF8fHx8MTc2MjcxNDc1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        },
    ];

    return (
        <div>
            {/* Hero Section - Carousel */}
            <section className="relative bg-[#F5E8DC] py-16 md:py-20 overflow-hidden">
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8 md:mb-12">
                        <p className="text-gray-600 text-sm mb-2 tracking-wide">
                            СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ
                        </p>
                        <h1
                            className="text-gray-900 mb-2 text-4xl md:text-5xl lg:text-6xl"
                            style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: '500',
                                letterSpacing: '0.02em',
                            }}
                        >
                            ОСЕННИЕ НОВИНКИ
                        </h1>
                        <p className="text-gray-600 text-sm">в продаже с 1 октября</p>
                    </div>

                    <Slider {...sliderSettings}>
                        {featuredProducts.map((product, index) => (
                            <div key={index} className="px-2">
                                <div className="grid md:grid-cols-2 gap-8 items-center bg-[#C5D9D8]">
                                    {/* Левая часть - продукты на тарелках */}
                                    <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
                                        {/* Главное изображение */}
                                        <div className="relative">
                                            {/* Тень под тарелкой */}
                                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[280px] h-[40px] bg-gray-900/10 rounded-full blur-xl"></div>

                                            {/* Деревянная подставка */}
                                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[140px] h-[80px] bg-gradient-to-b from-[#8B6F47] to-[#6B5635] rounded-full"></div>

                                            {/* Белая тарелка */}
                                            <div className="relative bg-white rounded-full w-[280px] h-[280px] shadow-2xl flex items-center justify-center">
                                                <div className="w-[250px] h-[250px] rounded-full overflow-hidden">
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Дополнительные продукты (только на первом слайде) */}
                                        {index === 0 && (
                                            <>
                                                <div className="absolute left-[5%] bottom-[15%] hidden md:block">
                                                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90px] h-[60px] bg-gradient-to-b from-[#8B6F47] to-[#6B5635] rounded-full"></div>
                                                    <div className="relative bg-white rounded-full w-[180px] h-[180px] shadow-xl">
                                                        <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-100 to-orange-50"></div>
                                                    </div>
                                                </div>
                                                <div className="absolute right-[8%] bottom-[25%] hidden lg:block">
                                                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90px] h-[60px] bg-gradient-to-b from-[#8B6F47] to-[#6B5635] rounded-full"></div>
                                                    <div className="relative bg-white rounded-full w-[180px] h-[180px] shadow-xl">
                                                        <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-100 to-amber-50"></div>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    {/* Правая часть - информация */}
                                    <div className="text-center md:text-left space-y-6">
                                        <div>
                                            <h2
                                                className="text-2xl md:text-3xl mb-2"
                                                style={{
                                                    fontFamily: "'Montserrat', sans-serif",
                                                    fontWeight: '600',
                                                }}
                                            >
                                                {product.name}
                                            </h2>
                                            {product.subtitle && (
                                                <p className="text-sm text-gray-600 tracking-wider">
                                                    {product.subtitle}
                                                </p>
                                            )}
                                        </div>

                                        <div className="space-y-1">
                                            <p className="text-gray-900">
                                                <span className="text-sm">Цена: </span>
                                                <span className="text-xl">{product.price}</span>
                                            </p>
                                            {product.portion && (
                                                <p className="text-sm text-gray-600">
                                                    {product.portion}
                                                    {product.portionPrice &&
                                                        ` • Кусок: ${product.portionPrice}`}
                                                </p>
                                            )}
                                        </div>

                                        <button
                                            onClick={() => setModalOpen(true)}
                                            className="bg-[#A67C52] text-white px-8 py-3 hover:bg-[#8B6640] transition-colors"
                                        >
                                            Заказать
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>

            {/* Каталог */}
            <CatalogSection onOrderClick={() => setModalOpen(true)} />

            {/* Отзывы */}
            <ReviewsSection />

            {/* Как сделать заказ */}
            <OrderStepsSection onOrderClick={() => setModalOpen(true)} />

            {/* Контакты */}
            <ContactsSection />

            <Footer />

            <ContactModal open={modalOpen} onOpenChange={setModalOpen} />
        </div>
    );
}

export default Home;
