import { ChangeDetectionStrategy, Component, output } from '@angular/core';

/**
 * @description
 * This component is responsible for displaying a comment input.
 *
 * @event addComment - This event is emitted when a comment is added. Emits the comment message (`string`).
 *
 * @example
 * <shop-comment-input (addComment)="handleAddComment($event)"></shop-comment-input>
 */

@Component({
  selector: 'shop-comment-input',
  templateUrl: './comment-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentInputComponent {
  addComment = output<string>();
  commentMessage = '';

  onAddComment(): void {
    this.addComment.emit(this.commentMessage);
    this.commentMessage = '';
  }
}
