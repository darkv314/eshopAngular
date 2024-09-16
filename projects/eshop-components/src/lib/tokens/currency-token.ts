import { InjectionToken } from '@angular/core';

export interface CurrencyConfig {
  currency: 'Bs.' | '$';
}

export const CURRENCY_CONFIG = new InjectionToken<CurrencyConfig>(
  'CURRENCY_CONFIG'
);
