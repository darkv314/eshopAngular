import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../state-managment/state/app.state';
import {
  ADD_PRODUCT,
  SET_PRODUCTS,
} from '../../state-managment/actions/product/product.action';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  products$?: Observable<Product[]>;

  constructor(
    private _productsService: ProductService,
    private _store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.products$ = this._productsService.getProducts();

    this.products$.subscribe((products) => {
      this._store.dispatch(SET_PRODUCTS({ products }));
    });
  }
}
