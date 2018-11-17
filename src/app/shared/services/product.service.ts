import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from '../../shared/interfaces/product';

const PRODUCTS: Product[] = [
  {
      id: 0,
      name: 'Remington 90" Sofa',
      price: '$000.00',
      similar: [1, 2, 3],
      details: [
          'Overall Dimensions: 86"w x 36"d x 28"h',
          'Collection: Carnegie',
          'Colors: Rider Black (osb), Weathered Oak',
          'Materials: Top Grain Leather, Solid Ash',
          'Weight: 130 lbs',
      ],
      images: [
          {
              large: 'assets/images/Remington-Black-Sofa-and-Indra-Coffee-Table-with-Willow-Ru.jpg',
              thumb: 'assets/images/Remington-Black-Sofa-and-Indra-Coffee-Table-with-Willow-Ru.jpg',
              alt: '',
          },
          {
              large: 'Remington_Sofa_-_Black_2048x.png',
              thumb: 'Remington_Sofa_-_Black_2048x.png',
          },
          {
              large: '',
              thumb: '',
              alt: '',
          },
          {
              large: '',
              thumb: '',
          },
          {
              large: '',
              thumb: '',
          },
          {
              large: '',
              thumb: '',
          }
      ]
  },
  {
      id: 1,
      name: 'Delwin Square Outdoor Coffee Table',
      price: '$000.00',
      similar: [0, 2, 3],
      details: [
          'Dimensions: W: 35.43" D: 35.43" H: 14.76"',
          'Collection: Solano',
          'Category: Living Room',
          'Type: Coffee Tables',
          'Colors: Weathered Grey',
          'Materials: Teak',
          'Weight: 55.12 lb',
          'Volume: 15.89 cu ft',
      ],
      images: [
          {
              large: '/assets/images/delano-ottoman/Sherwood-outdoor-sofa-and-Delwin-square-coffee-table.jpg',
              thumb: '/assets/images/delano-ottoman/Sherwood-outdoor-sofa-and-Delwin-square-coffee-table.jpg',
              alt: '',
          },
      ]
  },
  {
      id: 2,
      name: 'Holton Dining Chair',
      price: '$000.00',
      similar: [0, 1, 3],
      images: [
          {
              large: '/assets/images/holton-chair/theroux138454_1.jpg',
              thumb: '/assets/images/holton-chair/theroux138454_1.jpg',
              alt: '',
          },
      ]
  },
  {
      id: 3,
      name: 'Kelby Sideboard',
      price: '$000.00',
      similar: [1, 2, 4],
      images: [
          {
              large: '/assets/images/kelby-sideboard/Kelby-mango-sideboard-and-jess-engle-art.jpg',
              thumb: '/assets/images/kelby-sideboard/Kelby-mango-sideboard-and-jess-engle-art.jpg',
              alt: '',
          },
      ]
  },
  {
      id: 4,
      name: 'Olivia Square Coffee Table',
      price: '$000.00',
      similar: [1, 2, 3],
      images: [
          {
              large: '/assets/images/MAXX-SOFA-AND-OLIVIA-SQUARE-COFFEE-TABLE-WITH-JACK-LEATHER-ROCKER-AND-ZADIE-BOOKSHELF.jpg',
              thumb: '/assets/images/MAXX-SOFA-AND-OLIVIA-SQUARE-COFFEE-TABLE-WITH-JACK-LEATHER-ROCKER-AND-ZADIE-BOOKSHELF.jpg',
              alt: '',
          },
      ]
  },
  {
      id: 5,
      name: 'Olive Ace Chair',
      price: '$000.00',
      similar: [1, 2, 3],
      images: [
          {
              large: '/assets/images/Langham-channeled-sectional-and-olive-Ace-chair-and-Shannon-oval-coffee-table.jpg',
              thumb: '/assets/images/Langham-channeled-sectional-and-olive-Ace-chair-and-Shannon-oval-coffee-table.jpg',
              alt: '',
          }
      ]
  },
];

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public get products(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  public getProductById(id): Observable<Product> {
    return of(PRODUCTS[id]);
  }

}
