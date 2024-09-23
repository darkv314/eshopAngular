import { NgModule } from '@angular/core';
import { EshopModule } from 'eshop-components';
import {
  CommentContainerDirective,
  ProductComponent,
} from './product.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
  },
];

@NgModule({
  declarations: [ProductComponent, CommentContainerDirective],
  imports: [
    CommonModule,
    EshopModule.forRoot({ currency: '$' }),
    RouterModule.forChild(routes),
  ],
  providers: [],
})
export class ProductModule {}
