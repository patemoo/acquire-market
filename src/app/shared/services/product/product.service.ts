import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from '../../../shared/interfaces/product';

const PRODUCTS: Product[] = [
  {
      id: 0,
      name: 'Remington 90" Sofa',
      price: '$000.00',
      description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos facilis, 
        iusto necessitatibus animi ab nemo natus magni voluptate atque aperiam 
        tempore et cumque at. Deserunt officia velit veniam quidem? Doloremque?
      `,
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
              large: 'assets/images/remington-sofa/Remington_Sofa_-_Black_2048x.png',
              thumb: 'assets/images/remington-sofa/Remington_Sofa_-_Black_2048x.png',
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
      description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Commodi eum quibusdam ipsam eligendi magnam perferendis 
        excepturi voluptatem nemo at, aliquid aut reiciendis delectus quam. 
        Veritatis quisquam delectus alias odio ex?
      `,
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
      description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Molestiae maiores totam enim, recusandae quod explicabo 
        dolorem consequuntur veniam quia odit numquam, 
        at ad excepturi voluptates iusto fugit iure, minima hic.
      `,
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
      description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Eius praesentium nihil magni odit nisi aperiam laudantium 
        esse molestias est doloremque deleniti fuga quod 
        minima unde optio tenetur at, nostrum odio!
      `,
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
      description: `
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Eveniet eos, similique ea repellendus eaque corporis error 
        placeat debitis ex quidem temporibus obcaecati earum magni 
        vero a dolorum totam possimus deleniti.
      `,
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
      description: `
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptate ea praesentium dolorem adipisci quia, soluta ex 
        maiores reprehenderit omnis quo cum voluptatibus nisi 
        at totam autem ad odio, corrupti odit!
      `,
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
