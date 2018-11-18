import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import { Product } from '../../shared/interfaces/product';
import { ProductService } from '../../shared/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public products: Product[];

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.productService.products.pipe(take(1)).subscribe(products => {
      this.products = products;
    });
  }

}
