import { NgModule } from '@angular/core';
import { EshopModule } from 'eshop-components';
import { ProductComponent } from './product.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
  },
];

@NgModule({
  declarations: [ProductComponent],
  imports: [
    EshopModule.forRoot({ currency: '$' }),
    RouterModule.forChild(routes),
  ],
  providers: [],
})
export class ProductModule {}
