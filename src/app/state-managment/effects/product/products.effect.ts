import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import {
  map,
  exhaustMap,
  catchError,
  distinctUntilChanged,
} from 'rxjs/operators';
import { ProductService } from '../../../pages/services/product.service';
import {
  LOAD_PRODUCT,
  LOAD_PRODUCT_SUCCESS,
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
} from '../../actions/product/product.action';

export const loadProducts = createEffect(
  (actions$ = inject(Actions), productService = inject(ProductService)) => {
    return actions$.pipe(
      ofType(LOAD_PRODUCTS),
      exhaustMap(() =>
        productService.getProducts().pipe(
          distinctUntilChanged(),
          map((products) =>
            LOAD_PRODUCTS_SUCCESS({
              products,
            })
          ),
          catchError(() => EMPTY)
        )
      )
    );
  },
  { functional: true }
);
