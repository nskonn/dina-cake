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
        customPaging: () => (
            <div className="mt-4 w-2 h-2 bg-gray-400 rounded-full hover:bg-gray-600 transition-colors cursor-pointer"></div>
        ),
    };

    const featuredProducts = [
        {
            name: 'Торт "Ананас-Лайм"',
            subtitle: 'МУССОВЫЙ',
            price: '2 800 руб.',
            portion: '6 порций',
            image: 'https://images.unsplash.com/photo-1593782724339-3d04ba0b7bda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWtlJTIwd2hpdGUlMjBwbGF0ZXxlbnwxfHx8fDE3NjI3MTQ3NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        },
        {
            name: 'Тарталетка "Айва-Апельсин"',
            subtitle: 'МУССОВЫЙ',
            price: '310 руб.',
            portion: 'шт',
            image: 'https://images.unsplash.com/photo-1589402932101-9672b5778f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0cnklMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzYyNzE0NzU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
        },
        {
            name: 'Эклер "Пекан"',
            subtitle: 'МУССОВЫЙ',
            price: '250 руб.',
            portion: '',
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
                        <h1
                            className="text-gray-900 mb-2 text-4xl md:text-5xl lg:text-6xl text-center md:text-left"
                            style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: '500',
                                letterSpacing: '0.02em',
                            }}
                        >
                            АВТОРСКИЕ ДЕСЕРТЫ
                        </h1>
                        <p className="text-gray-600 text-sm mt-6 text-center md:mt-0 md:text-left">
                            Изготовление на заказ десертов любой сложности. Качественные и
                            натуральные ингридиенты.
                        </p>
                    </div>

                    <Slider {...sliderSettings}>
                        {featuredProducts.map((product, index) => (
                            <div key={index} className="px-2">
                                <div className="grid md:grid-cols-2 gap-8 items-center bg-[#C5D9D8] rounded pb-4">
                                    {/* Левая часть - продукты на тарелках */}
                                    <div className="relative h-[350px] md:h-[500px] flex items-center justify-center">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-72 h-72 md:w-80 md:h-80 bg-gradient-to-br from-white/70 via-white/30 to-transparent rounded-full blur-3xl opacity-80"></div>
                                        </div>
                                        <div className="relative w-[260px] h-[320px] md:w-[320px] md:h-[420px] bg-white/80 backdrop-blur-xl rounded-[32px] border border-white/70 shadow-[0_25px_80px_rgba(0,0,0,0.15)] overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-white/30 pointer-events-none"></div>
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover scale-105"
                                            />
                                        </div>
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
                                        </div>

                                        {/*<button*/}
                                        {/*    onClick={() => setModalOpen(true)}*/}
                                        {/*    className="bg-[#A67C52] text-white px-8 py-3 hover:bg-[#8B6640] transition-colors"*/}
                                        {/*>*/}
                                        {/*    Заказать*/}
                                        {/*</button>*/}
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
            <ReviewsSection onOrderClick={() => setModalOpen(true)} />

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
