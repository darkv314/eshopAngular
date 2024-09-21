import { createReducer, on } from '@ngrx/store';
import { ProductState } from '../../state/product/product.state';
import {
  ADD_PRODUCT_COMMENTS,
  LOAD_PRODUCT_SUCCESS,
  LOAD_PRODUCTS_SUCCESS,
} from '../../actions/product/product.action';

const productsInitialState: ProductState = {
  products: [],
};

export const PRODUCT_REDUCER = createReducer(
  productsInitialState,
  on(LOAD_PRODUCT_SUCCESS, (state: ProductState, { product: newProduct }) => {
    return {
      ...state,
      products: state.products.length
        ? state.products.map((product) =>
            newProduct.id === product.id
              ? {
                  ...newProduct,
                  comments: product.comments || [],
                }
              : product
          )
        : [newProduct],
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
  on(ADD_PRODUCT_COMMENTS, (state: ProductState, { productId, comments }) => {
    const updatedProducts = state.products.map((product) =>
      product.id === Number(productId)
        ? { ...product, comments: [...(product.comments || []), ...comments] }
        : product
    );
    return {
      ...state,
      products: updatedProducts,
    };
  })
);
