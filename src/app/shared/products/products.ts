export interface Product {
    id: number,
    src: string,
    alt: string,
    name: string,
    price: string,
    similar: number[],
}

export const productList: Product[] = [
    {
        id: 0,
        src: 'https://placehold.it/300x200.jpg',
        alt: '',
        name: 'Product One',
        price: '$000.00',
        similar: [1, 2, 3],
    },
    {
        id: 1,
        src: 'https://placehold.it/300x200.jpg',
        alt: '',
        name: 'Product Two',
        price: '$000.00',
        similar: [0, 2, 3],
    },
    {
        id: 2,
        src: 'https://placehold.it/300x200.jpg',
        alt: '',
        name: 'Product Three',
        price: '$000.00',
        similar: [0, 1, 3],
    },
    {
        id: 3,
        src: 'https://placehold.it/300x200.jpg',
        alt: '',
        name: 'Product Four',
        price: '$000.00',
        similar: [1, 2, 4],
    },
    {
        id: 4,
        src: 'https://placehold.it/300x200.jpg',
        alt: '',
        name: 'Product Five',
        price: '$000.00',
        similar: [1, 2, 3],
    },
    {
        id: 5,
        src: 'https://placehold.it/300x200.jpg',
        alt: '',
        name: 'Product Six',
        price: '$000.00',
        similar: [1, 2, 3],
    },
];