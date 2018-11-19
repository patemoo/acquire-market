import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

import { CartService } from './shared/services/cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit, OnDestroy {

  public cartCount: number;

  private subscription: Subscription;

  constructor(
    private cartService: CartService,
  ) {}

  ngOnInit():void {
    
    this.subscription = this.cartService.getCartCount.subscribe((count) => {
      this.cartCount = count
    })
  }

  public onActivate(event): void {
    document.body.scrollTop = 0;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
