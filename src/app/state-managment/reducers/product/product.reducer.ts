import { createReducer, on } from '@ngrx/store';
import { ProductState } from '../../state/product/product.state';
import {
  ADD_PRODUCT,
  SET_PRODUCTS,
} from '../../actions/product/product.action';
import { Product } from '../../../pages/models/product.model';

const productsInitialState: ProductState = {
  products: [],
};

export const PRODUCT_REDUCER = createReducer(
  productsInitialState,
  on(ADD_PRODUCT, (state, product: Product) => {
    return {
      ...state,
      products: [...state.products, product],
    };
  }),

  on(SET_PRODUCTS, (state, props: { products: Product[] }) => {
    console.log('Setting products');
    return {
      ...state,
      products: props.products,
    };
  })
);
