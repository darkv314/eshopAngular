import { Component, Directive, Inject, input, OnInit } from '@angular/core';
import { CURRENCY_CONFIG, CurrencyConfig } from '../tokens/currency-token';

@Directive({
  selector: 'card-img',
})
export class CardImgDirective {}

@Component({
  selector: 'shop-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  title = input.required<string>();
  price = input.required<number>();
  id = input.required<string>();
  currency = '';

  constructor(
    @Inject(CURRENCY_CONFIG) private currencyConfig: CurrencyConfig
  ) {}

  ngOnInit(): void {
    this.currency = this.currencyConfig.currency;
  }
}
