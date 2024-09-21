import {
  Component,
  ComponentFactoryResolver,
  Directive,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { distinctUntilChanged, Observable, Subject, takeUntil } from 'rxjs';
import { Product } from '../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { on, Store } from '@ngrx/store';
import { AppState } from '../../state-managment/state/app.state';
import { GET_PRODUCT } from '../../state-managment/selectors/product/product.selector';
import {
  ADD_PRODUCT_COMMENTS,
  LOAD_PRODUCT,
} from '../../state-managment/actions/product/product.action';
import { CommentComponent } from 'eshop-components';

@Directive({
  selector: '[commentContainer]',
})
export class CommentContainerDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  host: {
    class: 'min-h-dvh bg-gray-100',
  },
})
export class ProductComponent implements OnInit {
  product$?: Observable<Product | undefined>;
  private _destroy$ = new Subject<void>();
  newComments: string[] = [];
  paramValue: string = '';
  @ViewChild(CommentContainerDirective)
  commentContainer!: CommentContainerDirective;

  constructor(
    private _store: Store<AppState>,
    private _route: ActivatedRoute,
    private _componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    this.paramValue = this._route.snapshot.params['productId'];
    this._store.dispatch(LOAD_PRODUCT({ productId: this.paramValue }));
    this.product$ = this._store.select(GET_PRODUCT(Number(this.paramValue)));
  }

  ngAfterViewInit(): void {
    this.product$
      ?.pipe(
        takeUntil(this._destroy$),
        distinctUntilChanged((prev, curr) => this.isEqual(prev, curr))
      )
      .subscribe((product) => {
        if (product) {
          product.comments?.forEach((comment) => {
            this.createComment(comment);
          });
        }
      });
  }

  createComment(comment: string): void {
    const commentComponentFactory =
      this._componentFactoryResolver.resolveComponentFactory(CommentComponent);
    const commentComponent =
      this.commentContainer.viewContainerRef.createComponent(
        commentComponentFactory
      );
    commentComponent.instance.comment = comment;
  }

  onAddComment(comment: string): void {
    this.createComment(comment);
    this.newComments.push(comment);
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
    this._store.dispatch(
      ADD_PRODUCT_COMMENTS({
        productId: this.paramValue,
        comments: this.newComments,
      })
    );
  }

  isEqual(prev: Product | undefined, curr: Product | undefined): boolean {
    return JSON.stringify(prev) === JSON.stringify(curr);
  }
}
