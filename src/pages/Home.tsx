import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContactModal } from '../components/ContactModal';
import { Footer } from '../components/Footer';
import { CatalogSection } from '../components/CatalogSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { OrderStepsSection } from '../components/OrderStepsSection';
import { ContactsSection } from '../components/ContactsSection';
import ZBunner from '../assets/cake/ZBunner.jpg';

export function Home() {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <section className="relative bg-[#F3EFE9] py-16 md:py-20 overflow-hidden">
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
                            src={ZBunner}
                        />
                    </div>

                </div>
            </section>

            {/* Каталог */}
            <section id="catalog">
                <CatalogSection onOrderClick={() => setModalOpen(true)} />
            </section>

            {/* Отзывы */}
            <section id="reviews">
                <ReviewsSection onOrderClick={() => setModalOpen(true)} />
            </section>

            {/* Как сделать заказ */}
            <section id="order-steps">
                <OrderStepsSection onOrderClick={() => setModalOpen(true)} />
            </section>

            {/* Контакты */}
            <section id="contacts">
                <ContactsSection />
            </section>

            <Footer />

            {modalOpen && (<ContactModal open={modalOpen} onOpenChange={setModalOpen} />)}
        </div>
    );
}

export default Home;
