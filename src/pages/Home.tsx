import { useState, Children, cloneElement } from 'react';
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
    };

    const featuredProducts = [
        {
            name: 'Торт Медовик',
            subtitle: 'КЛАССИЧЕСКИЙ',
            price: '2 800 руб.',
            portion: '6 порций',
            image: 'https://images.unsplash.com/photo-1593782724339-3d04ba0b7bda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWtlJTIwd2hpdGUlMjBwbGF0ZXxlbnwxfHx8fDE3NjI3MTQ3NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        },
        {
            name: 'Тарталетка "Айва"',
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
                            натуральные ингредиенты.
                        </p>
                    </div>

                    <Slider {...sliderSettings}>
                        {featuredProducts.map((product, index) => (
                            <div key={index} className="px-2">
                                <div className="grid md:grid-cols-2 gap-10 items-center bg-gradient-to-br from-[#f7f1ea] via-white to-[#dfece9] rounded-3xl p-6 md:p-10 border border-white/60">
                                    {/* Визуальная часть */}
                                    <div className="relative h-[320px] md:h-[460px] flex items-center justify-center">
                                        <div className="absolute inset-0">
                                            <div className="absolute top-4 left-6 w-20 h-20 border border-white/50 rounded-full opacity-70"></div>
                                            <div className="absolute bottom-6 right-4 w-16 h-16 border border-white/40 rounded-full opacity-60 hidden sm:block"></div>
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#fcdfee]/70 via-transparent to-[#d6edff]/60 blur-3xl opacity-80"></div>
                                        </div>
                                        <div className="relative w-[250px] h-[300px] md:w-[320px] md:h-[400px] rounded-[40px] overflow-hidden border border-white/80 bg-white/85 backdrop-blur-2xl shadow-[0_25px_80px_rgba(10,13,50,0.25)]">
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-white/20 pointer-events-none"></div>
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover scale-110"
                                            />
                                        </div>
                                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-2/3 h-12 bg-black/10 blur-3xl rounded-full"></div>
                                    </div>

                                    {/* Текстовая часть */}
                                    <div className="space-y-6 text-center md:text-left">
                                        <div>
                                            <h2
                                                className="text-3xl md:text-4xl text-gray-900 mb-3"
                                                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
                                            >
                                                {product.name}
                                            </h2>
                                            {product.subtitle && (
                                                <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
                                                    {product.subtitle}
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                                            <div>
                                                <p className="text-3xl font-semibold text-[#A67C52]">{product.price}</p>
                                            </div>
                                        </div>
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
