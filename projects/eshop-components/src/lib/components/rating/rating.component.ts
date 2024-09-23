import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/**
 * @description
 * This component is responsible for displaying a rating.
 *
 * @property {number} rating - The rating value.
 * @property {number} count - The number of ratings.
 *
 * @example
 * <shop-rating [rating]="4.5" [count]="100"></shop-rating>
 */

@Component({
  selector: 'shop-rating',
  templateUrl: './rating.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingComponent {
  @Input({ required: true }) rating!: number;
  @Input({ required: true }) count!: number;
}
