import { Component, input, output } from '@angular/core';

@Component({
  selector: 'shop-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  wfull = input(true);
  onClick = output<void>();
}
