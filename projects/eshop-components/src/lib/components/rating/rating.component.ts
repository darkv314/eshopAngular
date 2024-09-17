import { Component, input } from '@angular/core';

@Component({
  selector: 'shop-rating',
  templateUrl: './rating.component.html',
})
export class RatingComponent {
  rating = input.required<number>();
  count = input.required<number>();
}
