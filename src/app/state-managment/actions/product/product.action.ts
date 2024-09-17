import { createAction, props } from '@ngrx/store';
import { Product } from '../../../pages/models/product.model';

export const LOAD_PRODUCT = createAction(
  '[Product] - LOAD_PRODUCT',
  props<{ productId: string }>()
);

export const LOAD_PRODUCT_SUCCESS = createAction(
  '[Product] - LOAD_PRODUCT_SUCCESS',
  props<{ product: Product }>()
);

export const ADD_PRODUCT_COMMENT = createAction(
  '[Product] - ADD_PRODUCT_COMMENT',
  props<{ productId: string; comment: string }>()
);

export const LOAD_PRODUCTS = createAction(
  '[Multiple Products] - LOAD_PRODUCTS'
);

export const LOAD_PRODUCTS_SUCCESS = createAction(
  '[Multiple Products] - LOAD_PRODUCTS_SUCCESS',
  props<{ products: Product[] }>()
);
