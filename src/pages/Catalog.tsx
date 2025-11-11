import { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { ContactModal } from '../components/ContactModal';

export function Catalog() {
  const [modalOpen, setModalOpen] = useState(false);

  const allProducts = [
    {
      title: 'Элегантный торт',
      description: 'Идеально для свадеб и торжественных событий',
      price: '5000 ₽',
      image: 'https://images.unsplash.com/photo-1672081211046-f494525f9a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwY2FrZXxlbnwxfHx8fDE3NjI3MTE4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Свадебный торт',
      description: 'Многоярусные композиции для вашего особенного дня',
      price: '8000 ₽',
      image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2FrZXxlbnwxfHx8fDE3NjI1OTQzMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Шоколадный торт',
      description: 'Насыщенный вкус для истинных ценителей',
      price: '3500 ₽',
      image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlfGVufDF8fHx8MTc2MjYxNTc0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Праздничный торт',
      description: 'Яркое оформление для дней рождений',
      price: '4000 ₽',
      image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNha2V8ZW58MXx8fHwxNzYyNjk2NTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Капкейки',
      description: 'Миниатюрные десерты для любого события',
      price: '250 ₽/шт',
      image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXBjYWtlc3xlbnwxfHx8fDE3NjI3MTE4MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Макаронс',
      description: 'Французские пирожные в ассортименте',
      price: '150 ₽/шт',
      image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNhcm9uc3xlbnwxfHx8fDE3NjI3MTE4MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Клубничный торт',
      description: 'Легкий бисквит со свежими ягодами',
      price: '4500 ₽',
      image: 'https://images.unsplash.com/photo-1602663491496-73f07481dbea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwY2FrZXxlbnwxfHx8fDE3NjI2NjQyNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Пирожные ассорти',
      description: 'Изысканные десерты для гурманов',
      price: '300 ₽/шт',
      image: 'https://images.unsplash.com/photo-1669630367800-b2c3ae70528e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0cnklMjBkZXNzZXJ0fGVufDF8fHx8MTc2MjY5Mjg5OHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Торт "Красный бархат"',
      description: 'Классический американский десерт',
      price: '3800 ₽',
      image: 'https://images.unsplash.com/photo-1672081211046-f494525f9a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwY2FrZXxlbnwxfHx8fDE3NjI3MTE4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Медовик',
      description: 'Традиционный торт с медовыми коржами',
      price: '3200 ₽',
      image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlfGVufDF8fHx8MTc2MjYxNTc0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Наполеон',
      description: 'Классический слоеный торт с кремом',
      price: '2800 ₽',
      image: 'https://images.unsplash.com/photo-1669630367800-b2c3ae70528e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0cnklMjBkZXNzZXJ0fGVufDF8fHx8MTc2MjY5Mjg5OHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Чизкейк Нью-Йорк',
      description: 'Нежный сырный торт с ягодным соусом',
      price: '4200 ₽',
      image: 'https://images.unsplash.com/photo-1602663491496-73f07481dbea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwY2FrZXxlbnwxfHx8fDE3NjI2NjQyNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div>
      {/* Hero каталога */}
      <section className="bg-[#E8C5C5] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-gray-900 mb-4" style={{ fontSize: '96px', lineHeight: '1.1', fontFamily: "'Montserrat', sans-serif", fontWeight: '700', letterSpacing: '-0.02em' }}>Каталог изделий</h1>
            <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontSize: '20px', lineHeight: '1.6' }}>
              Полный ассортимент наших кондитерских изделий
            </p>
          </div>
        </div>
      </section>

      {/* Сетка продуктов */}
      <section className="py-16 bg-[#F5E8DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-20 bg-[#A67C52] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6" style={{ fontSize: '48px', lineHeight: '1.2', fontFamily: "'Montserrat', sans-serif", fontWeight: '500' }}>Не нашли подходящий вариант?</h2>
          <p className="text-white/90 mb-8" style={{ fontSize: '20px', lineHeight: '1.6' }}>
            Мы создаем торты на заказ по вашим индивидуальным пожеланиям.
            Свяжитесь с нами, и мы обсудим ваш уникальный проект!
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-white text-[#A67C52] px-8 py-3 rounded-full hover:bg-[#F5E8DC] transition-colors inline-block"
          >
            Связаться с нами
          </button>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-[#A67C52] mb-4" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '600' }}>Dina's cake</div>
          <p className="text-gray-400 text-sm">
            © 2025 Dina's cake. Все права защищены.
          </p>
        </div>
      </footer>

      <ContactModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
}
