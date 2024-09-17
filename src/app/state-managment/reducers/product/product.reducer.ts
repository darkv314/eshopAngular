import { createReducer, on } from '@ngrx/store';
import { ProductState } from '../../state/product/product.state';
import {
  ADD_PRODUCT_COMMENT,
  LOAD_PRODUCT_SUCCESS,
  LOAD_PRODUCTS_SUCCESS,
} from '../../actions/product/product.action';
import { AppState } from '../../state/app.state';

const productsInitialState: ProductState = {
  products: [],
};

export const PRODUCT_REDUCER = createReducer(
  productsInitialState,
  on(LOAD_PRODUCT_SUCCESS, (state: ProductState, { product }) => {
    return {
      ...state,
      products: [...state.products, product],
    };
  }),
  on(LOAD_PRODUCTS_SUCCESS, (state: ProductState, { products }) => {
    const existingCommentsMap = state.products.reduce((acc, product) => {
      acc.set(product.id, product.comments || []);
      return acc;
    }, new Map<number, string[]>());

    return {
      ...state,
      products: products.map((product) => ({
        ...product,
        comments: existingCommentsMap.get(product.id) || [],
      })),
    };
  }),
  on(ADD_PRODUCT_COMMENT, (state: ProductState, { productId, comment }) => {
    const updatedProducts = state.products.map((product) =>
      product.id === Number(productId)
        ? { ...product, comments: [...(product.comments || []), comment] }
        : product
    );
    return {
      ...state,
      products: updatedProducts,
    };
  })
);
