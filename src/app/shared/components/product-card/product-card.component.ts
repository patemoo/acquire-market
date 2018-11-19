import { Component, HostBinding, OnInit, Input } from '@angular/core';

import { Product, ProductImage } from '../../interfaces/product';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() @HostBinding('class.cart-view')
  public cartView: boolean = false;

  @Input()
  public product: Product;

  public image: ProductImage;

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit() {
    this.image = this.product && this.product.images && this.product.images[0];
  }

  public removeFromCart(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.cartService.removeFromCart(this.product);
  }

}
