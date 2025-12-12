import { useState } from 'react';
import { ContactModal } from '../components/ContactModal';
import { Footer } from '../components/Footer';
import { CatalogSection } from '../components/CatalogSection';

export function Catalog() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
      <div>
          {/* Hero каталога */}
          <section className="pt-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="">
                      <h2
                          className="text-gray-900 text-4xl md:text-5xl md:mb-4"
                          style={{
                              fontFamily: "'Montserrat', sans-serif",
                              fontWeight: '500',
                              letterSpacing: '0.02em',
                          }}
                      >
                          КАТАЛОГ
                      </h2>
                      <p
                          className="text-gray-600 max-w-2xl"
                          style={{ fontSize: '20px', lineHeight: '1.6' }}
                      >
                          Полный ассортимент наших кондитерских изделий
                      </p>
                  </div>
              </div>
          </section>

          <CatalogSection onOrderClick={() => setModalOpen(true)} />

          {/* Призыв к действию */}
          <section className="py-20 bg-[#A67C52] text-white">
              <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <h2
                      className="mb-6"
                      style={{
                          fontSize: '48px',
                          lineHeight: '1.2',
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: '500',
                      }}
                  >
                      Не нашли подходящий вариант?
                  </h2>
                  <p className="text-white/90 mb-8" style={{ fontSize: '20px', lineHeight: '1.6' }}>
                      Мы создаем торты на заказ по вашим индивидуальным пожеланиям. Свяжитесь с
                      нами, и мы обсудим ваш уникальный проект!
                  </p>
                  <button
                      onClick={() => setModalOpen(true)}
                      className="bg-white text-[#A67C52] px-8 py-3 rounded-full hover:bg-[#F5E8DC] transition-colors inline-block"
                  >
                      Связаться с нами
                  </button>
              </div>
          </section>

          <Footer />

          {modalOpen && (<ContactModal open={modalOpen} onOpenChange={setModalOpen} />)}
      </div>
  );
}
