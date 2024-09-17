import { NgModule } from '@angular/core';
import { EshopModule } from 'eshop-components';
import { ProductComponent } from './product.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import * as productEffect from '../../state-managment/effects/product/product.effect';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
  },
];

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    EshopModule.forRoot({ currency: '$' }),
    RouterModule.forChild(routes),
  ],
  providers: [],
})
export class ProductModule {}
