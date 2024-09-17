import { Component, Inject, OnInit } from '@angular/core';
import { CURRENCY_CONFIG, CurrencyConfig } from '../../tokens/currency-token';

@Component({
  selector: 'shop-currency',
  templateUrl: './currency.component.html',
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
