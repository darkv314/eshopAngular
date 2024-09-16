import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  host: {
    class: 'min-h-dvh flex flex-col',
  },
})
export class ProductComponent implements OnInit {
  product$?: Observable<Product>;
  paramValue: string = '';

  constructor(
    private _productsService: ProductService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.paramValue = this._route.snapshot.params['productId'];
    this.product$ = this._productsService.getProduct(this.paramValue);
  }
}
