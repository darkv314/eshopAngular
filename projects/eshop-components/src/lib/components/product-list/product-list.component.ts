import {
  Component,
  ContentChild,
  Directive,
  Input,
  TemplateRef,
} from '@angular/core';

@Directive({
  selector: '[product-ref]',
})
export class ProductRefDirective<T> {
  constructor(public template: TemplateRef<{ $implicit: T }>) {}
}

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent<T extends { id: number }> {
  @Input() products: T[] | null = null;
  @ContentChild(ProductRefDirective, { read: TemplateRef<{ $implicit: T }> })
  productTemplate!: TemplateRef<{ $implicit: T }>;
}
