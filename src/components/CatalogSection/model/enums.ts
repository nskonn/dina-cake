export enum CatalogCategory {
    Cakes = 'Торты',
    BentoCakes = 'Бенто-торты',
    MussBentoCakes = 'Муссовые Бенто-торты',
    Cupcakes = 'Капкейки',
    Trifle = 'Трайфл',
    Eskimo = 'Эскимо',
    Macarons = 'Макаронсы',
}

export enum CakesSubcategory {
    All = 'Все',
    Chukepc = 'Сникерс',
    CherrySlice = 'ВИШНЁВЫЙ ЛОМТИК',
    Ferrero = 'ФЕРРЕРО',
    CaptainCookiesClassic = 'Капитан Кукис (классический)',
    CaptainCookiesCoffee = 'Капитан Кукис (кофейный)',
    PistachioRaspberry = 'Фисташка - Малина',
    MilkGirl = 'Молочная девочка',
    BerryCloud = 'Ягодное облако',
    RedVelvet = 'Красный бархат',
    SpicedCarrot = 'Пряная морковь',
    PoppyLemon = 'Мак - Лимон',
    HoneyClassic = 'Медовик (классический)',
    HoneyRaspberry = 'Медовик - Малина',
}

export enum BentoCakesSubcategory {
    All = 'Все',
    Snickers = 'Сникерс',
    RedVelvetStrawberry = 'Красный бархат (клубника)',
    RedVelvetMangoPassion = 'Красный бархат (манго-маракуйя)',
    PoppyLemon = 'Мак-лимон',
    VanillaStrawberry = 'Ваниль-клубника',
    VanillaRaspberry = 'Ваниль малина',
    CherrySlice = 'Вишневый ломтик',
}

export enum CupcakesSubcategory {
    All = 'Все',
    Snickers = 'Сникерс',
    ChocolateCombo = 'Шоколадное комбо',
    CherryChocolate = 'Вишня в шоколаде',
    LemonRaspberry = 'Лимон - Малина',
    SpicedCarrot = 'Пряная морковь',
}

export enum TrifleSubcategory {
    All = 'Все',
    Snickers = 'Сникерс',
    CherrySlice = 'Вишневый ломтик',
    PoppyLemon = 'Мак - Лимон',
    SpicedCarrot = 'Пряная морковь',
    VanillaRaspberry = 'Ваниль - Малина',
    VanillaStrawberry = 'Ваниль - Клубника',
}

export enum EskimoSubcategory {
    All = 'Все',
    Snickers = 'Сникерс',
    CherrySlice = 'Вишневый ломтик',
    PoppyLemon = 'Мак - Лимон',
    SpicedCarrot = 'Пряная морковь',
    VanillaRaspberry = 'Ваниль - Малина',
    VanillaStrawberry = 'Ваниль - Клубника',
}

export enum MacaronsSubcategory {
    All = 'Все',
    Snickers = 'Сникерс',
    CherrySlice = 'Вишневый ломтик',
    PoppyLemon = 'Мак - Лимон',
    SpicedCarrot = 'Пряная морковь',
    VanillaRaspberry = 'Ваниль - Малина',
    VanillaStrawberry = 'Ваниль - Клубника',
}

export enum MussBentoCakesSubcategory {
    All = 'Все',
    Exotic = 'Экзотик',
    Tiramisu = 'Тирамису',
    BanoffeePie = 'Баннофи-пай',
    CaptainCookies = 'Капитан Кукис',
    PoppyLemon = 'Мак-лимон',
    Raffaello = 'Рафаэлло',
    PistachioChocolate = 'Фисташка-шоколад',
    BerryBoom = 'Ягодный бум',
}

export const CATEGORY_DISPLAY_ORDER: CatalogCategory[] = [
    CatalogCategory.Cakes,
    CatalogCategory.BentoCakes,
    CatalogCategory.MussBentoCakes,
    CatalogCategory.Cupcakes,
    CatalogCategory.Trifle,
    CatalogCategory.Eskimo,
    // CatalogCategory.Macarons,
];

export const CATEGORY_SUBCATEGORIES: Record<CatalogCategory, string[]> = {
    [CatalogCategory.Cakes]: Object.values(CakesSubcategory),
    [CatalogCategory.BentoCakes]: Object.values(BentoCakesSubcategory),
    [CatalogCategory.MussBentoCakes]: Object.values(MussBentoCakesSubcategory),
    [CatalogCategory.Cupcakes]: Object.values(CupcakesSubcategory),
    [CatalogCategory.Trifle]: Object.values(TrifleSubcategory),
    [CatalogCategory.Eskimo]: Object.values(EskimoSubcategory),
    [CatalogCategory.Macarons]: Object.values(MacaronsSubcategory),
};

