import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IPost } from '@shared/interfaces/blog-item.interface';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogItemComponent {
  @Input() public post!: IPost;

  public readonly mockedText = 'Read more...';

  public handleClick(post: IPost): void {
    post.toggle = !post.toggle;
    if (post.toggle) {
      post.likeCounter++;
    } else if (!post.toggle && post.likeCounter > 0) {
      post.likeCounter--
    }
  }

}
