import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Directive,
  Input,
  TemplateRef,
} from '@angular/core';

@Directive({
  selector: '[productRef]',
})
export class ProductRefDirective<T> {
  constructor(public template: TemplateRef<{ $implicit: T }>) {}
}

/**
 * @description
 * This component is responsible for displaying a list of products.
 * It uses the `ProductRefDirective` directive to get the product template.
 * The product template is projected using the `ng-template` element.
 *
 * @property {Product[]} products - The list of products to display.
 *
 * @example
 * <product-list [products]="products">
 *   <ng-template productRef let-product>
 *     <div>{{ product.name }}</div>
 *   </ng-template>
 * </product-list>
 */

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent<T> {
  @Input() products: T[] | null = null;
  @ContentChild(ProductRefDirective<T>, { read: TemplateRef })
  productTemplate!: TemplateRef<{ $implicit: T }>;
}
