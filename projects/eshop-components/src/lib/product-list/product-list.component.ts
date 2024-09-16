import {
  Component,
  contentChild,
  Directive,
  input,
  Signal,
  TemplateRef,
} from '@angular/core';

@Directive({
  selector: '[product-ref]',
})
export class ProductRefDirective {}

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent<T extends { id: number }> {
  products = input<T[] | null>(null);
  productTemplate: Signal<TemplateRef<{ $implicit: T }>> =
    contentChild.required(ProductRefDirective, {
      read: TemplateRef<{
        $implicit: T;
      }>,
    });
  ngOnInit(): void {
    this.productTemplate.call({ $implicit: this.products });
  }
}
