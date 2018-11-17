import { Component, OnInit, Input } from '@angular/core';

import { Product, ProductImage } from '../../interfaces/product';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input()
  public product: Product;

  public image: ProductImage;

  constructor() { }

  ngOnInit() {
    this.image = this.product && this.product.images && this.product.images[0];
  }

}
