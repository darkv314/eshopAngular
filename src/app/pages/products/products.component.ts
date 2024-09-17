import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../state-managment/state/app.state';
import { LOAD_PRODUCTS } from '../../state-managment/actions/product/product.action';
import { GET_PRODUCTS } from '../../state-managment/selectors/product/product.selector';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  products$?: Observable<Product[]>;

  constructor(private _store: Store<AppState>) {}

  ngOnInit(): void {
    this.products$ = this._store.select(GET_PRODUCTS);
    this._store.dispatch(LOAD_PRODUCTS());
  }
}
