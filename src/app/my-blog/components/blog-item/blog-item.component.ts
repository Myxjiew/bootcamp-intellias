import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IPost } from '@shared/interfaces/blog-item.interface';
import { RADIUS, COLOR } from 'src/app/constants/post.constants';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogItemComponent {
  @Input() public post!: IPost;

  public radius = RADIUS;
  public color = COLOR;

  public readonly mockedText = 'Read more...';

  public handleClick(post: IPost): void {
    post.toggle = !post.toggle;
    if (post.toggle) {
      post.likes++;
    } else if (!post.toggle && post.likes > 0) {
      post.likes--;
    }
  }
}
