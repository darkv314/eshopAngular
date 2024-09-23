import { Component, Input } from '@angular/core';

@Component({
  selector: 'shop-rating',
  templateUrl: './rating.component.html',
})
export class RatingComponent {
  @Input({ required: true }) rating!: number;
  @Input({ required: true }) count!: number;
}
