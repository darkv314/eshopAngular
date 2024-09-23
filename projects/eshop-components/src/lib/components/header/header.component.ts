import {
  Component,
  contentChild,
  Directive,
  Input,
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
  @Input() header: 'h1' | 'h2' | 'h3' = 'h1';
  @Input() center: boolean = false;
  @Input({ required: true }) title!: string;
}
