import { CatalogCategory } from './enums';

export type CatalogProduct = {
    name: string;
    description: string;
    price: string;
    image: string;
    badge: string;
    category: CatalogCategory;
    subcategory: string;
};

