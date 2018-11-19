import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from '../../interfaces/product'
import { observable } from 'rxjs/internal/symbol/observable';
import { findIndex } from 'rxjs/internal/operators/findIndex';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public observer;

  private cart: Product[] = [];
  private count: number = 0;

  constructor() { 
  }

  public getCartCount = Observable.create((observer) => {
    this.observer = observer;
  });

  public getCartItems(): Product[] {
    return this.cart;
  }

  public addToCart(product: Product): void {
    (<any>this.cart).push(product);
    this.count += 1;
    this.observer.next(this.count);
  }

  public removeFromCart(product: Product): void {
    this.count -= 1;
    let index = (<any>this.cart).findIndex(item => {
      return item.id == product.id;
    });
    (<any>this.cart).splice(index, 1)
    this.observer.next(this.count);
  }

}
