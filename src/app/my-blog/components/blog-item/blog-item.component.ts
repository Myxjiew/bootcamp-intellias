import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Post } from '@shared/interfaces/blog-item.interface';
import { BlogService } from '@shared/services/blog.service';
import { RADIUS, COLOR } from 'src/app/constants/post.constants';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogItemComponent {
  @Input() public post!: Post;

  constructor(private blogService: BlogService) {}

  public radius = RADIUS;
  public color = COLOR;

  public readonly mockedText = 'Read more...';

  public handleClick(post: Post): void {
    post.toggle = !post.toggle;
    post.toggle ? post.likes++ : post.likes--;
  }

  public deleteCurrentPost(post: Post): void {
    this.blogService
      .deletePost(post._id)
      .subscribe((data) => this.blogService.updateStream(post, 'remove'));
  }
}
