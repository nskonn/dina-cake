import React, { useState, Children, cloneElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContactModal } from '../components/ContactModal';
import Slider from 'react-slick';
import { Footer } from '../components/Footer';
import { CatalogSection } from '../components/CatalogSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { OrderStepsSection } from '../components/OrderStepsSection';
import { ContactsSection } from '../components/ContactsSection';
import cake2 from '../assets/cake/cake3.jpg';

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
            <section className="relative bg-[#F5E8DC] py-16 md:py-20 overflow-hidden">
                {/* Подложка */}
                <div className="md:hidden absolute top-1/2 transform -translate-y-1/2 bg-white opacity-30 z-10 p-10 w-full h-full"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="hidden md:block absolute left-[6px] top-1/2 transform -translate-y-1/2 bg-white opacity-30 z-10 p-10 w-full h-full md:w-[600px] md:h-[350px]"></div>
                    <div className="absolute z-20 mb-8 md:mb-12 p-14 rounded-2xl top-1/2 transform -translate-y-1/2">
                        <h1
                            className=" text-[#753c01] relative z-20 mb-3 md:mb-6 text-4xl leading-20 md:text-5xl lg:text-6xl text-center md:text-left"
                            style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: '500',
                                lineHeight: '1.2',
                                letterSpacing: '0.15em',
                            }}
                        >
                            АВТОРСКИЕ <br /> ДЕСЕРТЫ
                        </h1>
                        <p className="text-[#2b1604] z-20 relative text-sm md:text-lg mt-2 md:mt-6 text-center md:text-left">
                            Изготовление на заказ десертов любой сложности. <br />
                            Качественные и натуральные ингредиенты.
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <img
                            className="relative left-[75px] md:left-0 md:w-full md:h-full z-0 scale-170 md:scale-110"
                            src={cake2}
                        />
                    </div>

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
