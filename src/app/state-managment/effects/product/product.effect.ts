import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../../../pages/services/product.service';
import {
  LOAD_PRODUCT,
  LOAD_PRODUCT_SUCCESS,
} from '../../actions/product/product.action';
import { catchError, EMPTY, exhaustMap, map } from 'rxjs';

export const loadProduct = createEffect(
  (actions$ = inject(Actions), productService = inject(ProductService)) => {
    return actions$.pipe(
      ofType(LOAD_PRODUCT),
      exhaustMap(({ productId }) =>
        productService.getProduct(productId).pipe(
          map((product) => LOAD_PRODUCT_SUCCESS({ product })),
          catchError(() => EMPTY)
        )
      )
    );
  },
  { functional: true }
);
