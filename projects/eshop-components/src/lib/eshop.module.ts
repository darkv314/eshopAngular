import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent, CardImgDirective } from './card/card.component';
import { CURRENCY_CONFIG, CurrencyConfig } from './tokens/currency-token';
import {
  ProductListComponent,
  ProductRefDirective,
} from './product-list/product-list.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    CardComponent,
    CardImgDirective,
    ProductListComponent,
    ProductRefDirective,
  ],
  exports: [
    ButtonComponent,
    HeaderComponent,
    CardComponent,
    CardImgDirective,
    ProductListComponent,
    ProductRefDirective,
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
