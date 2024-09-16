import { AppState } from '../state/app.state';
import { PRODUCT_REDUCER } from './product/product.reducer';
import { Action, ActionReducerMap } from '@ngrx/store';

export const APP_REDUCER: ActionReducerMap<AppState, Action> = {
  productsState: PRODUCT_REDUCER,
};
