import { Component, OnInit } from '@angular/core';

import { Product, productList} from '../../shared/products/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public products: Product[] = productList;

  constructor() { }

  ngOnInit() {
  }

}
