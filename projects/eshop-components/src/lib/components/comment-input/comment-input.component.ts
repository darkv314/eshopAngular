import { Component, output } from '@angular/core';

@Component({
  selector: 'shop-comment-input',
  templateUrl: './comment-input.component.html',
})
export class CommentInputComponent {
  addComment = output<string>();
  commentMessage = '';

  onAddComment(): void {
    this.addComment.emit(this.commentMessage);
    this.commentMessage = '';
  }
}
