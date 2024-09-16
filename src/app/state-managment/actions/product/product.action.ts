import { createAction, props } from '@ngrx/store';
import { Product } from '../../../pages/models/product.model';

export const ADD_PRODUCT = createAction(
  '[Product] - ADD_PRODUCT',
  props<Product>()
);

export const SET_PRODUCTS = createAction(
  '[Product] - SET_PRODUCTS',
  props<{ products: Product[] }>()
);
