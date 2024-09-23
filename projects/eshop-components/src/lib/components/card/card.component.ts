import { Component, Directive, Input } from '@angular/core';

/**
 * @description
 * This element directive is responsible for projecting the image of the product card.
 *
 * @example
 * <shop-card ...>
 *   <card-img>
 *     <img src="product1.jpg" alt="Product 1" />
 *   </card-img>
 * </shop-card>
 */

@Directive({
  selector: 'card-img',
})
export class CardImgDirective {}

/**
 * @description
 * This component is responsible for displaying a product card, showing the title,
 * price and an image of the product.
 *
 * You can project the image of the card using the "card-img" element directive.
 *
 * Input properties:
 * @property {string} title - The title of the product.
 * @property {number} price - The price of the product.
 * @property {string} id - The ID of the product.
 *
 * @example
 * <shop-card title="Product 1" price="100" id="1">
 *   <card-img>
 *     <img src="product1.jpg" alt="Product 1" />
 *   </card-img>
 * </shop-card>
 */
@Component({
  selector: 'shop-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) price!: number;
  @Input({ required: true }) id!: string;
}
