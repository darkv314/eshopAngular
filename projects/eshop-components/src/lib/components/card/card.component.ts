import { Component, Directive, input } from '@angular/core';

@Directive({
  selector: 'card-img',
})
export class CardImgDirective {}

/**
 * @description
 * This component is responsible for displaying a customizable product card.
 * It accepts inputs for product details and emits events when actions are taken.
 *
 * @example
 * <app-product-card
 *   [product]="productData"
 *   (onAddToCart)="handleAddToCart($event)">
 * </app-product-card>
 */
@Component({
  selector: 'shop-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  title = input.required<string>();
  price = input.required<number>();
  id = input.required<string>();
}
