import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EshopModule } from 'eshop-components';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ProductService } from './pages/services/product.service';
import { StoreModule } from '@ngrx/store';
import { APP_REDUCER } from './state-managment/reducers/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import * as productEffects from './state-managment/effects/product/product.effect';
import * as productsEffects from './state-managment/effects/product/products.effect';
@NgModule({
  declarations: [AppComponent, ProductsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EshopModule.forRoot({ currency: '$' }),
    StoreModule.forRoot(APP_REDUCER, {
      runtimeChecks: {
        strictActionTypeUniqueness: true,
      },
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
    }),
    EffectsModule.forRoot(productsEffects, productEffects),
  ],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
