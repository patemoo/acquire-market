import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product, productList } from '../../shared/products/products';

import { filter } from 'rxjs/operators';

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
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot 
              && this.activatedRoute.snapshot.params 
              && this.activatedRoute.snapshot.params.id;

    this.product = productList[this.id];

    console.log(this.activatedRoute);


    this.router.events.pipe(
      // filter(event => event === '' ),
    ).subscribe(event => {
      console.log(event, this.activatedRoute.snapshot 
        && this.activatedRoute.snapshot.params 
        && this.activatedRoute.snapshot.params.id);
    });
  }

}
