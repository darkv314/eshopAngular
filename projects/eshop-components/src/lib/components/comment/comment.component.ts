import { Component, Input } from '@angular/core';

@Component({
  selector: 'shop-comment',
  templateUrl: './comment.component.html',
})
export class CommentComponent {
  @Input({ required: true }) comment = '';
}
