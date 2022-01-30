export interface newProductInterface {
    id: number;
    name: string;
    slug: string;
    category: string;
    topText: string;
}

export interface newProductDataInterface {
    id: number;
    name: string;
    topText: string;
    headline: string;
    buttonText: string;
    buttonRoute: string;
}

export interface promotionsInterface {
    id: number;
    name: string;
    slug: string;
    category: string;
    image: string;
    headline?: string;
}