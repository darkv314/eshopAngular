import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { CURRENCY_CONFIG, CurrencyConfig } from '../../tokens/currency-token';

/**
 * @description
 * This component is responsible for displaying the currency.
 * It uses the `CURRENCY_CONFIG` injection token to get the currency configuration ('Bs'. or '$').
 * @example
 * <shop-currency>
 *    100
 * </shop-currency>
 *
 * This Will display the currency symbol and the value 100.
 */

@Component({
  selector: 'shop-currency',
  templateUrl: './currency.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyComponent implements OnInit {
  currency = '';

  constructor(
    @Inject(CURRENCY_CONFIG) private currencyConfig: CurrencyConfig
  ) {}

  ngOnInit(): void {
    this.currency = this.currencyConfig.currency;
  }
}
