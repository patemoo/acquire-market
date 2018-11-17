export interface ProductImage {
    large: string;
    thumb: string;
    alt?: string;
}

export interface Product {
    id: number,
    name: string,
    price: string,
    similar?: number[],
    details?: string[],
    images?: ProductImage[],

}