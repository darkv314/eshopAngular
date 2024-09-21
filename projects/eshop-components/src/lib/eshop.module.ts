import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { CommentInputComponent } from './components/comment-input/comment-input.component';
import { CommentComponent } from './components/comment/comment.component';
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
    CommentInputComponent,
    CommentComponent,
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
    CommentInputComponent,
    CommentComponent,
  ],
  imports: [CommonModule, RouterLink, RouterLinkActive, FormsModule],
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
