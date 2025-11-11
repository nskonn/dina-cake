import { ReviewCard } from './ReviewCard';

export function ReviewsSection() {
  const reviews = [
    {
      cakeName: 'Свадебный торт',
      review:
        'Восхитительный торт! Гости не переставали восхищаться его вкусом и внешним видом. Дина - настоящий профессионал своего дела!',
      image:
        'https://images.unsplash.com/photo-1535254973040-607b474cb50d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2FrZXxlbnwxfHx8fDE3NjI1OTQzMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      cakeName: 'Шоколадный торт',
      review:
        'Заказывала торт на день рождения мужа. Он был в восторге! Идеальный баланс сладости и шоколадного вкуса.',
      image:
        'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlfGVufDF8fHx8MTc2MjYxNTc0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      cakeName: 'Детский торт',
      review:
        'Ребенок был в полном восторге от торта! Красивое оформление и очень вкусно. Обязательно закажу еще!',
      image:
        'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNha2V8ZW58MXx8fHwxNzYyNjk2NTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section className="py-20 bg-[#F5E8DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-gray-900 mb-4"
            style={{
              fontSize: '48px',
              lineHeight: '1.2',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: '500',
            }}
          >
            ОТЗЫВЫ
          </h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto"
            style={{ fontSize: '20px', lineHeight: '1.6' }}
          >
            Мы гордимся каждым отзывом и стараемся делать ваши праздники
            незабываемыми
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}


