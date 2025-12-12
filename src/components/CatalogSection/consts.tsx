import { CatalogCategory } from './model/enums';
import { Cherry, Gift, IceCream, Utensils, Box, ChefHat, Palette, Scale, Users, Cookie, PartyPopper } from 'lucide-react';

export const CATEGORY_INFO = {
    [CatalogCategory.Cakes]: {
        title: 'Бисквитные Торты',
        description:
            'Главное украшение вашего праздника. Подойдет для большой компании и торжественного чаепития.',
        specs: [
            {
                icon: PartyPopper,
                label: 'Идеально для',
                text: 'Дня рождения и свадеб',
            },
            {
                icon: Scale,
                label: 'Вес изделия',
                text: 'от 1 кг.',
            },
            {
                icon: Palette,
                label: 'Оформление',
                text: 'Сложный декор, ягоды, фигуры (расчитывается отдельно)',
            },
        ],
    },
    [CatalogCategory.BentoCakes]: {
        title: 'Бенто-торт',
        description:
            'Популярный мини-торт, рассчитанный на небольшую компанию. Идеален для подарка или сюрприза.',
        specs: [
            {
                icon: Users,
                label: 'Рассчитан на',
                text: '2-3 человек',
            },
            {
                icon: Scale,
                label: 'Вес изделия',
                text: '400-500г',
            },
            {
                icon: Palette,
                label: 'Оформление',
                text: 'Покрытие любого цвета, надпись и небольшой рисунок входят в стоимость',
            },
        ],
    },
    [CatalogCategory.MussBentoCakes]: {
        title: 'Муссовый Бенто',
        description:
            'Утонченная версия бенто-торта. Нежнейшая муссовая текстура, зеркальная глазурь или велюр. Тает во рту.',
        specs: [
            {
                icon: ChefHat,
                label: 'Текстура',
                text: 'Воздушный мусс на основе различных вкусов (арахис, кофе, ваниль и др.)',
            },
            {
                icon: Scale,
                label: 'Вес изделия',
                text: '400-500г',
            },
            {
                icon: Palette,
                label: 'Оформление',
                text: 'Зеркальная глазурь или шоколадный велюр',
            },
        ],
    },
    [CatalogCategory.Cupcakes]: {
        title: 'Капкейки',
        description:
            'Порционные мини-тортики с пышной шапочкой из крема. Удобный формат для фуршетов и угощения коллег.',
        specs: [
            {
                icon: Box,
                label: 'Заказ',
                text: 'Набор от 4 шт.',
            },
            {
                icon: Scale,
                label: 'Вес одной шт.',
                text: '~100-120г',
            },
            {
                icon: Palette,
                label: 'Оформление',
                text: 'Сахарные картинки и топперы оплачиваются отдельно.',
            },
        ],
    },
    [CatalogCategory.Trifle]: {
        title: 'Трайфлы',
        description:
            'Полноценный торт в удобном индивидуальном стаканчике. Слои сочного бисквита, нежного крема и начинки.',
        specs: [
            {
                icon: Utensils,
                label: 'Удобство',
                text: 'Порционный десерт',
            },
            {
                icon: Scale,
                label: 'Объем',
                text: '1 порция - 250 мл. От 4-х шт.',
            },
            {
                icon: Palette,
                label: 'Оформление',
                text: 'Сахарные картинки и топперы оплачиваются отдельно.',
            },
        ],
    },
    [CatalogCategory.Eskimo]: {
        title: 'Пирожное Эскимо',
        description:
            'Оригинальное пирожное в форме мороженого на палочке. Внутри — картошка или мусс, снаружи — хрустящий шоколад.',
        specs: [
            {
                icon: IceCream,
                label: 'Вид',
                text: 'В стоимость входит покрытие любого цвета, посыпки,\n' +
                    'бантики, золото, серебро',
            },
            {
                icon: Scale,
                label: 'Вес',
                text: '1 порция - 120 г. От 4-х шт.',
            },
            {
                icon: Palette,
                label: 'Оформление',
                text: 'Сложный дизайн, декор ягодами оплачивается отдельно',
            },
        ],
    },
    [CatalogCategory.Macarons]: {
        title: 'Макаронсы',
        description:
            'Изысканное миндальное печенье с разнообразными начинками на основе шоколадного ганаша.',
        specs: [
            {
                icon: Cookie,
                label: 'Основа',
                text: '100% миндальная мука (без глютена)',
            },
            {
                icon: Gift,
                label: 'Подарок',
                text: 'Красивая упаковка, идеально для комплимента',
            },
            {
                icon: Cherry,
                label: 'Вкусы',
                text: 'Более 10 начинок: от соленой',
            },
        ],
    },
};