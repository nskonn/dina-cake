import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Phone,
  MessageCircle,
  Send,
  Cake,
  Users,
  Star,
  Heart,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Scale,
  Palette,
  Clock,
  CreditCard,
  CheckCircle2,
  Instagram,
} from "lucide-react";
import { ProductCard } from "../components/ProductCard";
import { ReviewCard } from "../components/ReviewCard";
import { ContactModal } from "../components/ContactModal";
import Slider from "react-slick";

export function Home() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState("Торты");
  const [selectedSubcategory, setSelectedSubcategory] =
    useState("Все");

  const stats = [
    { label: "Заказов", value: "200+", icon: Cake },
    { label: "Видов изделий", value: "20+", icon: Heart },
    { label: "Довольных клиентов", value: "180+", icon: Users },
    { label: "Средняя оценка", value: "5.0", icon: Star },
  ];

  const products = [
    {
      title: "Элегантный торт",
      description:
        "Идеально для свадеб и торжественных событий",
      price: "5000 ₽",
      image:
        "https://images.unsplash.com/photo-1672081211046-f494525f9a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwY2FrZXxlbnwxfHx8fDE3NjI3MTE4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Свадебный торт",
      description:
        "Многоярусные композиции для вашего особенного дня",
      price: "8000 ₽",
      image:
        "https://images.unsplash.com/photo-1535254973040-607b474cb50d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2FrZXxlbnwxfHx8fDE3NjI1OTQzMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Шоколадный торт",
      description: "Насыщенный вкус для истинных ценителей",
      price: "3500 ₽",
      image:
        "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlfGVufDF8fHx8MTc2MjYxNTc0NHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Праздничный торт",
      description: "Яркое оформление для дней рождений",
      price: "4000 ₽",
      image:
        "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNha2V8ZW58MXx8fHwxNzYyNjk2NTc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Капкейки",
      description: "Миниатюрные десерты для любого события",
      price: "250 ₽/шт",
      image:
        "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXBjYWtlc3xlbnwxfHx8fDE3NjI3MTE4MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Макаруны",
      description: "Французские миндальные печенья",
      price: "150 ₽/шт",
      image:
        "https://images.unsplash.com/photo-1606939279993-2a51faa8be74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNhcm9uc3xlbnwxfHx8fDE3NjI2MTU3NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const recentWorks = [
    {
      cakeName: 'Свадебный торт "Нежность"',
      image:
        "https://images.unsplash.com/photo-1535254973040-607b474cb50d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2FrZXxlbnwxfHx8fDE3NjI1OTQzMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Трехъярусный торт с живыми цветами и кремовыми розами",
    },
    {
      cakeName: "Шоколадное наслаждение",
      image:
        "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlfGVufDF8fHx8MTc2MjYxNTc0NHww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Многослойный торт с бельгийским шоколадом",
    },
    {
      cakeName: "Праздник детства",
      image:
        "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNha2V8ZW58MXx8fHwxNzYyNjk2NTc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Яркий торт для детского дня рождения",
    },
    {
      cakeName: "Клубничная мечта",
      image:
        "https://images.unsplash.com/photo-1602663491496-73f07481dbea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwY2FrZXxlbnwxfHx8fDE3NjI2NjQyNzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Легкий бисквит со свежей клубникой и сливочным кремом",
    },
    {
      cakeName: "Набор капкейков",
      image:
        "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXBjYWtlc3xlbnwxfHx8fDE3NjI3MTE4MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Ассорти капкейков для корпоративного мероприятия",
    },
    {
      cakeName: "Десертный стол",
      image:
        "https://images.unsplash.com/photo-1669630367800-b2c3ae70528e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0cnklMjBkZXNzZXJ0fGVufDF8fHx8MTc2MjY5Mjg5OHww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Композиция из пирожных и тортиков",
    },
  ];

  const reviews = [
    {
      cakeName: "Свадебный торт",
      review:
        "Восхитительный торт! Гости не переставали восхищаться его вкусом и внешним видом. Дина - настоящий профессионал своего дела!",
      image:
        "https://images.unsplash.com/photo-1535254973040-607b474cb50d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2FrZXxlbnwxfHx8fDE3NjI1OTQzMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      cakeName: "Шоколадный торт",
      review:
        "Заказывала торт на день рождения мужа. Он был в восторге! Идеальный баланс сладости и шоколадного вкуса.",
      image:
        "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlfGVufDF8fHx8MTc2MjYxNTc0NHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      cakeName: "Детский торт",
      review:
        "Ребенок был в полном восторге от торта! Красивое оформление и очень вкусно. Обязательно закажу еще!",
      image:
        "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNha2V8ZW58MXx8fHwxNzYyNjk2NTc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const contactInfo = {
    phone: "+7 (999) 123-45-67",
    whatsapp: "+79991234567",
    telegram: "dinascake",
    instagram: "dinascake",
  };

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
      <div style={{ bottom: "30px" }}>
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
      subtitle: "МУССОВЫЙ",
      price: "2 800 руб.",
      portion: "6 порций",
      portionPrice: "485 руб.",
      image:
        "https://images.unsplash.com/photo-1593782724339-3d04ba0b7bda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWtlJTIwd2hpdGUlMjBwbGF0ZXxlbnwxfHx8fDE3NjI3MTQ3NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: 'Тарталетка "Айва-Апельсин"',
      subtitle: "",
      price: "310 руб.",
      portion: "шт",
      portionPrice: "",
      image:
        "https://images.unsplash.com/photo-1589402932101-9672b5778f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0cnklMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzYyNzE0NzU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: 'Эклер "Пекан"',
      subtitle: "",
      price: "250 руб.",
      portion: "",
      portionPrice: "",
      image:
        "https://images.unsplash.com/photo-1737700088028-fae0666feb83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwZWxlZ2FudCUyMHBsYXRlfGVufDF8fHx8MTc2MjcxNDc1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
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
                fontWeight: "500",
                letterSpacing: "0.02em",
              }}
            >
              ОСЕННИЕ НОВИНКИ
            </h1>
            <p className="text-gray-600 text-sm">
              в продаже с 1 октября
            </p>
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
                          fontFamily:
                            "'Montserrat', sans-serif",
                          fontWeight: "600",
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
                        <span className="text-xl">
                          {product.price}
                        </span>
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
      <section className="py-20 bg-[#F5E8DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2
              className="text-gray-900 text-4xl md:text-5xl"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "500",
                letterSpacing: "0.02em",
              }}
            >
              КАТАЛОГ
            </h2>
          </div>

          {/* Категории */}
          <div className="flex gap-6 mb-8 overflow-x-auto pb-2 scrollbar-hide border-b border-gray-300">
            {["Торты", "Бенто-торты", "Капкейки", "Трайфл"].map(
              (category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setSelectedSubcategory("Все");
                  }}
                  className={`whitespace-nowrap pb-4 transition-colors ${
                    selectedCategory === category
                      ? "border-b-2 border-gray-900 text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {category}
                </button>
              ),
            )}
          </div>

          {/* Подкатегории для Тортов */}
          {selectedCategory === "Торты" && (
            <div className="flex flex-wrap gap-6 mb-8 pb-2 border-b border-gray-300">
              {[
                "Все",
                "CHUKEPC",
                "ВИШНЁВЫЙ ЛОМТИК",
                "ФЕРРЕРО",
                "Капитан Кукис (классический)",
                "Капитан Кукис (кофейный)",
                "Фисташка-малина",
                "Молочная девочка",
                "Ягодное облако",
                "Красный бархат",
                "Пряная морковь",
                "Мак-лимон",
                "МЕдОВИК (классический)",
                "Медовик - малина",
              ].map((subcategory) => (
                <button
                  key={subcategory}
                  onClick={() =>
                    setSelectedSubcategory(subcategory)
                  }
                  className={`whitespace-nowrap pb-4 transition-colors text-sm ${
                    selectedSubcategory === subcategory
                      ? "border-b-2 border-gray-900 text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {subcategory}
                </button>
              ))}
            </div>
          )}

          {/* Продукты */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Торт «Ананас-лайм» муссовый",
                description:
                  "Муссовый торт на основе ананасового йогурта и натура��ьных сливок с бисквитом из сгущенного молока и мятно-лаймовой прослойкой. Украшен дольками свежего ананаса, глазурью манго-маракуйя и ароматной цедрой лайма.",
                price: "2 900 р.",
                image:
                  "https://images.unsplash.com/photo-1543509338-c6faf7aeb69c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGNyZWFtJTIwY2FrZXxlbnwxfHx8fDE3NjI3MTUwNDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
                badge: "Новинка",
              },
              {
                name: "«Манго-кейк»",
                description:
                  "Воздушный бисквит пропитанный сахарным сиропом с коньяком, с прослойкой малинового конфи, экзотического крема манго-маракуйя и сливочно-малиновой начинки. Крем торта сделан на основе творожного сыра, сыра Маскарпоне и натуральных сливок",
                price: "4 100 р.",
                image:
                  "https://images.unsplash.com/photo-1730672558646-c65c4784dd16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZWxsb3clMjBjYWtlJTIwZGVzc2VydHxlbnwxfHx8fDE3NjI3MTUwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
                badge: "Сезонное",
              },
              {
                name: "«Творожное суфле» в глазури",
                description:
                  "Торт из воздушной мягкой меренги с нежным творогом на тонких коржах на основе белого сгущенного молока. Покрыт глазурью гурмэ из темного шоколада. Торт рассчитан на 8 порций.",
                price: "2 200 р.",
                image:
                  "https://images.unsplash.com/photo-1761637604976-40612bc4544c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwcm91bmR8ZW58MXx8fHwxNzYyNzE1MDQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
                badge: "Новинка",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="group cursor-pointer overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-200 rounded-xl"
              >
                {/* Изображение */}
                <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#F5E8DC] to-[#E8C5C5] relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

                  {/* Бейдж */}
                  {product.badge && (
                    <div className="absolute top-4 right-4 bg-white/50 backdrop-blur-sm px-4 py-2 shadow-lg text-white">
                      {product.badge}
                    </div>
                  )}

                  {/* Цена */}
                  <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm px-4 py-2 shadow-lg">
                    <p
                      className="text-white"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: "600",
                      }}
                    >
                      {product.price}
                    </p>
                  </div>
                </div>

                {/* Информация */}
                <div className="p-6">
                  {/* Название */}
                  <h3
                    className="text-gray-900 text-lg md:text-xl mb-3"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: "600",
                    }}
                  >
                    {product.name}
                  </h3>

                  {/* Описание */}
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-5">
                    {product.description}
                  </p>

                  {/* Кнопка заказа */}
                  <button
                    onClick={() => setModalOpen(true)}
                    className="w-full border border-gray-300 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: "600",
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
              onClick={() => navigate("/catalog")}
              className="bg-[#A67C52] text-white px-8 py-3 hover:bg-[#8B6640] transition-colors rounded-lg"
            >
              Показать больше
            </button>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-20 bg-[#F5E8DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-gray-900 mb-4"
              style={{
                fontSize: "48px",
                lineHeight: "1.2",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "700",
              }}
            >
              Отзывы наших клиентов
            </h2>
            <p
              className="text-gray-600 max-w-2xl mx-auto"
              style={{ fontSize: "20px", lineHeight: "1.6" }}
            >
              Мы гордимся каждым отзывом и стараемся делать ваши
              праздники незабываемыми
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        </div>
      </section>

      {/* Как сделать заказ */}
      <section className="py-20 bg-[#C5D9D8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-gray-900 mb-4"
              style={{
                fontSize: "48px",
                lineHeight: "1.2",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "500",
              }}
            >
              Как сделать заказ
            </h2>
            <p
              className="text-gray-600 max-w-2xl mx-auto"
              style={{ fontSize: "20px", lineHeight: "1.6" }}
            >
              Простой процесс оформления заказа в несколько
              шагов
            </p>
          </div>

          {/* Шаги оформления */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Шаг 1 */}
            <div className="bg-white border-l-4 border-[#A67C52] p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#A67C52] text-white rounded-sm flex items-center justify-center">
                    <Calendar className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-[#A67C52]"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: "700",
                      }}
                    >
                      ШАГ 1
                    </span>
                    <div className="h-px flex-1 bg-[#E8C5C5]"></div>
                  </div>
                  <h3
                    className="text-gray-900 mb-2"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: "600",
                    }}
                  >
                    Определитесь с датой
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Выберите дату мероприятия и сообщите нам
                    заранее
                  </p>
                </div>
              </div>
            </div>

            {/* Шаг 2 */}
            <div className="bg-white border-l-4 border-[#A67C52] p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#A67C52] text-white rounded-sm flex items-center justify-center">
                    <Cake className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-[#A67C52]"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: "700",
                      }}
                    >
                      ШАГ 2
                    </span>
                    <div className="h-px flex-1 bg-[#E8C5C5]"></div>
                  </div>
                  <h3
                    className="text-gray-900 mb-2"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: "600",
                    }}
                  >
                    Выберите начинку
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Подберите идеальную начинку из нашего
                    каталога
                  </p>
                </div>
              </div>
            </div>

            {/* Шаг 3 */}
            <div className="bg-white border-l-4 border-[#A67C52] p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#A67C52] text-white rounded-sm flex items-center justify-center">
                    <Scale className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-[#A67C52]"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: "700",
                      }}
                    >
                      ШАГ 3
                    </span>
                    <div className="h-px flex-1 bg-[#E8C5C5]"></div>
                  </div>
                  <h3
                    className="text-gray-900 mb-2"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: "600",
                    }}
                  >
                    Укажите желаемый вес
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Рассчитаем количество порций для ваших
                    гостей
                  </p>
                </div>
              </div>
            </div>

            {/* Шаг 4 */}
            <div className="bg-white border-l-4 border-[#A67C52] p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#A67C52] text-white rounded-sm flex items-center justify-center">
                    <Palette className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-[#A67C52]"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: "700",
                      }}
                    >
                      ШАГ 4
                    </span>
                    <div className="h-px flex-1 bg-[#E8C5C5]"></div>
                  </div>
                  <h3
                    className="text-gray-900 mb-2"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: "600",
                    }}
                  >
                    Опишите декор
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Расскажите о пожеланиях или пришлите фото
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Условия оплаты */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 shadow-sm border-t-4 border-[#E8C5C5]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CreditCard className="w-8 h-8 text-[#A67C52]" />
                </div>
                <div>
                  <h3
                    className="text-gray-900 mb-3"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: "600",
                    }}
                  >
                    Условия оплаты
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#A67C52] flex-shrink-0 mt-0.5" />
                      <p
                        className="text-gray-700"
                        style={{
                          fontSize: "20px",
                          lineHeight: "1.6",
                        }}
                      >
                        Предоплата 50% для подтверждения заказа
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#A67C52] flex-shrink-0 mt-0.5" />
                      <p
                        className="text-gray-700"
                        style={{
                          fontSize: "20px",
                          lineHeight: "1.6",
                        }}
                      >
                        100% оплата для срочных заказов
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#A67C52] text-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Clock className="w-8 h-8" />
                </div>
                <div>
                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: "600",
                    }}
                  >
                    Сроки оформления
                  </h3>
                  <p
                    style={{
                      fontSize: "20px",
                      lineHeight: "1.6",
                    }}
                  >
                    Минимум 2-3 дня до планируемого мероприятия
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-sm opacity-90">
                      Чем раньше вы оформите заказ, тем больше
                      возможностей для реализации ваших идей
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Кнопка заказа */}
          <div className="text-center">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-3 bg-[#A67C52] text-white px-8 py-4 hover:bg-[#8B6640] transition-colors shadow-lg hover:shadow-xl"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "600",
              }}
            >
              <Send className="w-5 h-5" />
              Оформить заказ сейчас
            </button>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="py-20 bg-[#F5E8DC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-gray-900 mb-4"
              style={{
                fontSize: "48px",
                lineHeight: "1.2",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "700",
              }}
            >
              Контакты
            </h2>
            <p
              className="text-gray-600 max-w-2xl mx-auto"
              style={{ fontSize: "20px", lineHeight: "1.6" }}
            >
              Свяжитесь с нами удобным способом, и мы ответим на
              все ваши вопросы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex flex-col items-center gap-4 p-6 bg-white rounded-2xl hover:shadow-lg transition-shadow group"
            >
              <div className="bg-[#A67C52] text-white p-4 rounded-full group-hover:bg-[#8B6640] transition-colors">
                <Phone size={24} />
              </div>
              <div className="text-center">
                <div className="text-gray-500 text-sm mb-1">
                  Телефон
                </div>
                <div className="text-gray-900">
                  {contactInfo.phone}
                </div>
              </div>
            </a>

            <a
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-6 bg-white rounded-2xl hover:shadow-lg transition-shadow group"
            >
              <div className="bg-[#A67C52] text-white p-4 rounded-full group-hover:bg-[#8B6640] transition-colors">
                <MessageCircle size={24} />
              </div>
              <div className="text-center">
                <div className="text-gray-500 text-sm mb-1">
                  WhatsApp
                </div>
                <div className="text-gray-900">
                  {contactInfo.phone}
                </div>
              </div>
            </a>

            <a
              href={`https://t.me/${contactInfo.telegram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-6 bg-white rounded-2xl hover:shadow-lg transition-shadow group"
            >
              <div className="bg-[#A67C52] text-white p-4 rounded-full group-hover:bg-[#8B6640] transition-colors">
                <Send size={24} />
              </div>
              <div className="text-center">
                <div className="text-gray-500 text-sm mb-1">
                  Telegram
                </div>
                <div className="text-gray-900">
                  @{contactInfo.telegram}
                </div>
              </div>
            </a>

            <a
              href={`https://instagram.com/${contactInfo.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-6 bg-white rounded-2xl hover:shadow-lg transition-shadow group"
            >
              <div className="bg-[#A67C52] text-white p-4 rounded-full group-hover:bg-[#8B6640] transition-colors">
                <Instagram size={24} />
              </div>
              <div className="text-center">
                <div className="text-gray-500 text-sm mb-1">
                  Instagram
                </div>
                <div className="text-gray-900">
                  @{contactInfo.instagram}
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-[#1b1b1b] text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* О нас */}
            <div>
              <h3
                className="mb-4"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: "700",
                }}
              >
                Dina's Cake
              </h3>
              <p className="text-white/80 leading-relaxed">
                Создаем авторские кондитерские изделия с душой и
                любовью к деталям
              </p>
            </div>

            {/* Контакты */}
            <div>
              <h3
                className="mb-4"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: "700",
                }}
              >
                Контакты
              </h3>
              <div className="space-y-2 text-white/80">
                <p>{contactInfo.phone}</p>
                <p>@{contactInfo.telegram}</p>
                <p>@{contactInfo.instagram}</p>
              </div>
            </div>

            {/* Социальные сети */}
            <div>
              <h3
                className="mb-4"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: "700",
                }}
              >
                Мы в социальных сетях
              </h3>
              <div className="flex gap-4">
                <a
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
                >
                  <MessageCircle size={20} />
                </a>
                <a
                  href={`https://t.me/${contactInfo.telegram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
                >
                  <Send size={20} />
                </a>
                <a
                  href={`https://instagram.com/${contactInfo.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Разделитель */}
          <div className="h-px bg-white/20 mb-6"></div>

          {/* Копирайт */}
          <div className="text-center text-white/60 text-sm">
            <p>© 2025 Dina's Cake. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <ContactModal
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  );
}

export default Home;