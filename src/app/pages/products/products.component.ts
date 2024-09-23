import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../state-managment/state/app.state';
import { LOAD_PRODUCTS } from '../../state-managment/actions/product/product.action';
import { GET_PRODUCTS } from '../../state-managment/selectors/product/product.selector';
import { ProductsFacade } from '../services/facades/products.facade';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
  products$?: Observable<Product[]>;

  constructor(private _productsFacade: ProductsFacade) {}

  ngOnInit(): void {
    this.products$ = this._productsFacade.getProducts();
    this._productsFacade.loadProducts();
  }
}
