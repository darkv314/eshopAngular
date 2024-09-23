// product.facade.ts
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../state-managment/state/app.state';
import { Product } from '../../models/product.model';
import {
  ADD_PRODUCT_COMMENTS,
  LOAD_PRODUCT,
  LOAD_PRODUCTS,
} from '../../../state-managment/actions/product/product.action';
import {
  GET_PRODUCT,
  GET_PRODUCTS,
} from '../../../state-managment/selectors/product/product.selector';

@Injectable({
  providedIn: 'root',
})
export class ProductsFacade {
  constructor(private _store: Store<AppState>) {}

  addProductComments(productId: string, comments: string[]): void {
    this._store.dispatch(ADD_PRODUCT_COMMENTS({ productId, comments }));
  }

  getProducts(): Observable<Product[]> {
    return this._store.select(GET_PRODUCTS);
  }

  getProduct(id: string): Observable<Product | undefined> {
    return this._store.select(GET_PRODUCT(Number(id)));
  }

  loadProduct(id: string): void {
    this._store.dispatch(LOAD_PRODUCT({ productId: id }));
  }

  loadProducts(): void {
    this._store.dispatch(LOAD_PRODUCTS());
  }
}
