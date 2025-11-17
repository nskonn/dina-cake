export enum CatalogCategory {
    Cakes = 'Торты',
    BentoCakes = 'Бенто-торты',
    Cupcakes = 'Капкейки',
    Trifle = 'Трайфл',
    Eskimo = 'Эскимо',
    CakePops = 'Кейк-попс',
}

export enum CakesSubcategory {
    All = 'Все',
    Chukepc = 'CHUKEPC',
    CherrySlice = 'ВИШНЁВЫЙ ЛОМТИК',
    Ferrero = 'ФЕРРЕРО',
    CaptainCookiesClassic = 'Капитан Кукис (классический)',
    CaptainCookiesCoffee = 'Капитан Кукис (кофейный)',
    PistachioRaspberry = 'Фисташка-малина',
    MilkGirl = 'Молочная девочка',
    BerryCloud = 'Ягодное облако',
    RedVelvet = 'Красный бархат',
    SpicedCarrot = 'Пряная морковь',
    PoppyLemon = 'Мак-лимон',
    HoneyClassic = 'МЕдОВИК (классический)',
    HoneyRaspberry = 'Медовик - малина',
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
    LemonRaspberry = 'Лимон-малина',
    SpicedCarrot = 'Пряная морковь',
}

export enum TrifleSubcategory {
    All = 'Все',
    Snickers = 'Сникерс',
    CherrySlice = 'Вишневый ломтик',
    PoppyLemon = 'Мак-лимон',
    SpicedCarrot = 'Пряная морковь',
    VanillaRaspberry = 'Ваниль-малина',
    VanillaStrawberry = 'Ваниль-клубника',
}

export enum EskimoSubcategory {
    All = 'Все',
    Snickers = 'Сникерс',
    CherrySlice = 'Вишневый ломтик',
    PoppyLemon = 'Мак-лимон',
    SpicedCarrot = 'Пряная морковь',
    VanillaRaspberry = 'Ваниль-малина',
    VanillaStrawberry = 'Ваниль-клубника',
}

export enum CakePopsSubcategory {
    All = 'Все',
    Poppy = 'Маковый',
    Vanilla = 'Ванильный',
    Chocolate = 'Шоколадный',
}

export const CATEGORY_DISPLAY_ORDER: CatalogCategory[] = [
    CatalogCategory.Cakes,
    CatalogCategory.BentoCakes,
    CatalogCategory.Cupcakes,
    CatalogCategory.Trifle,
    CatalogCategory.Eskimo,
    CatalogCategory.CakePops,
];

export const CATEGORY_SUBCATEGORIES: Record<CatalogCategory, string[]> = {
    [CatalogCategory.Cakes]: Object.values(CakesSubcategory),
    [CatalogCategory.BentoCakes]: Object.values(BentoCakesSubcategory),
    [CatalogCategory.Cupcakes]: Object.values(CupcakesSubcategory),
    [CatalogCategory.Trifle]: Object.values(TrifleSubcategory),
    [CatalogCategory.Eskimo]: Object.values(EskimoSubcategory),
    [CatalogCategory.CakePops]: Object.values(CakePopsSubcategory),
};

