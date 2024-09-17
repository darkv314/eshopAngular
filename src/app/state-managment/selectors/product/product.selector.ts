import { createSelector } from '@ngrx/store';
import { AppState } from '../../state/app.state';

export const GET_PRODUCTS = createSelector(
  (appState: AppState) => appState.productsState,
  (productsState) => productsState.products
);

export const GET_PRODUCT = (productId: number) =>
  createSelector(
    (appState: AppState) => appState.productsState,
    (productsState) =>
      productsState.products.find((product) => product.id === productId)
  );
