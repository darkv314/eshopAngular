import {
  Component,
  contentChild,
  Directive,
  input,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'shop-header',
  templateUrl: './header.component.html',
  host: {
    class: 'title',
  },
})
export class HeaderComponent {
  header = input<'h1' | 'h2' | 'h3'>('h1');
  center = input<boolean>(false);
  title = input.required<string>();
}
