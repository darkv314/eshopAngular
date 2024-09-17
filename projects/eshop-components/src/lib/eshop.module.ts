import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import {
  CardComponent,
  CardImgDirective,
} from './components/card/card.component';
import { CURRENCY_CONFIG, CurrencyConfig } from './tokens/currency-token';
import {
  ProductListComponent,
  ProductRefDirective,
} from './components/product-list/product-list.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CurrencyComponent } from './components/currency/currency.component';
import { RatingComponent } from './components/rating/rating.component';
@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    CardComponent,
    CardImgDirective,
    ProductListComponent,
    ProductRefDirective,
    CurrencyComponent,
    RatingComponent,
  ],
  exports: [
    ButtonComponent,
    HeaderComponent,
    CardComponent,
    CardImgDirective,
    ProductListComponent,
    ProductRefDirective,
    CurrencyComponent,
    RatingComponent,
  ],
  imports: [CommonModule, RouterLink, RouterLinkActive],
})
export class EshopModule {
  static forRoot(config: CurrencyConfig): ModuleWithProviders<EshopModule> {
    return {
      ngModule: EshopModule,
      providers: [
        {
          provide: CURRENCY_CONFIG,
          useValue: config,
        },
      ],
    };
  }
}
