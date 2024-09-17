import { Component, Directive, input } from '@angular/core';

@Directive({
  selector: 'card-img',
})
export class CardImgDirective {}

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
