import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/**
 * @description
 * This component is responsible for displaying a comment
 *
 * @property {boolean} comment - The comment to display.
 *
 * @example
 * <shop-comment comment="This is a comment"></shop-comment>
 */

@Component({
  selector: 'shop-comment',
  templateUrl: './comment.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentComponent {
  @Input({ required: true }) comment = '';
}
