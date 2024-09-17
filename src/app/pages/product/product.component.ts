import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../state-managment/state/app.state';
import { GET_PRODUCT } from '../../state-managment/selectors/product/product.selector';
import {
  ADD_PRODUCT_COMMENT,
  LOAD_PRODUCT,
} from '../../state-managment/actions/product/product.action';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  host: {
    class: 'min-h-dvh flex flex-col',
  },
})
export class ProductComponent implements OnInit {
  product$?: Observable<Product | undefined>;
  paramValue: string = '';

  constructor(
    private _store: Store<AppState>,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.paramValue = this._route.snapshot.params['productId'];
    this._store.dispatch(LOAD_PRODUCT({ productId: this.paramValue }));
    this.product$ = this._store.select(GET_PRODUCT(Number(this.paramValue)));
  }

  onClick() {
    this._store.dispatch(
      ADD_PRODUCT_COMMENT({
        productId: this.paramValue,
        comment: 'New Comment',
      })
    );
  }
}
