import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../products/products';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input()
  public product: Product;

  constructor() { }

  ngOnInit() {
  }

}
