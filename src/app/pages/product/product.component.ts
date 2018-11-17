import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { take } from 'rxjs/operators'

import { Product } from '../../shared/interfaces/product';
import { ProductService } from '../../shared/services/product.service'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  public product: Product;
  public products: Product[];

  public showDetails = false;

  private id: string;
  private index: number;

  private subscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {

    this.productService.products.pipe(take(1)).subscribe(products => {
      this.products = products;
    });

    this.subscription = this.activatedRoute.paramMap
      .subscribe(data => {
        this.showDetails = false;
        this.id = (<any>data).params.id;

        this.productService.getProductById(this.id).pipe(take(1)).subscribe(product => {
          this.product = product;
          document.body.scrollTop = 0;
        });
      });
  }

  public toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
