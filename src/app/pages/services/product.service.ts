import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public instanceId: number;
  constructor(private _http: HttpClient) {
    this.instanceId = +Math.random().toFixed(4);
  }

  public printInstanceId(): void {
    console.warn('[HTTPService] - ID: ', this.instanceId);
  }

  getProducts() {
    return this._http.get<Product[]>('https://fakestoreapi.com/products');
  }

  getProduct(id: string) {
    return this._http.get<Product>(`https://fakestoreapi.com/products/${id}`);
  }
}
