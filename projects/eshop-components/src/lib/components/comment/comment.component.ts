import { Component, Input } from '@angular/core';

/**
 * @description
 * This component is responsible for displaying a customizable shop button.
 * You can project content into the button using the `ng-content` within the component tag.
 *
 * @property {boolean} wfull - If true, the button will take the full width of its container.
 *
 * @event onClick - This event is emitted when the button is clicked. Emits an empty value (`void`).
 *
 * @example
 * <shop-button
 *   [wfull]="true"
 *   (onClick)="handleClick()">
 *   Add Comment
 * </shop-button>
 */

@Component({
  selector: 'shop-comment',
  templateUrl: './comment.component.html',
})
export class CommentComponent {
  @Input({ required: true }) comment = '';
}
