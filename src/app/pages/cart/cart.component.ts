import { Component, OnInit } from '@angular/core';

import { CartService } from '../../shared/services/cart/cart.service';
import { Product, ProductImage} from '../../shared/interfaces/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cartItems: Product[];

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

}
