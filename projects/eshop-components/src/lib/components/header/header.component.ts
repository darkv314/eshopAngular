import {
  ChangeDetectionStrategy,
  Component,
  contentChild,
  Directive,
  Input,
  TemplateRef,
} from '@angular/core';

/**
 * @description
 * This component is responsible for displaying a header.
 * @property {string} title - The title of the header.
 * @property {string} header - The header type. Possible values are 'h1', 'h2' and 'h3'. The default value is 'h1'.
 * @property {boolean} center - If true, the title will be centered.
 * @example
 * <shop-header title="Welcome" header="h1" center="true"></shop-header>
 *
 */

@Component({
  selector: 'shop-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'title',
  },
})
export class HeaderComponent {
  @Input() header: 'h1' | 'h2' | 'h3' = 'h1';
  @Input() center: boolean = false;
  @Input({ required: true }) title!: string;
}
