import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, productList } from '../../shared/products/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public product: Product;
  public productList = productList;

  private id: string;
  private index: number;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot 
              && this.activatedRoute.snapshot.params 
              && this.activatedRoute.snapshot.params.id;

    this.product = productList[this.id];
  }

}
