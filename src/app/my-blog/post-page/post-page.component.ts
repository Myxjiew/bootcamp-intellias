import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from '@shared/interfaces/blog-item.interface';
import { BlogService } from '@shared/services/blog.service';
import { COLOR, RADIUS } from 'src/app/constants/post.constants';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.sass'],
})
export class PostPageComponent implements OnInit {
  public post!: IPost;
  public radius = RADIUS;
  public color = COLOR;

  constructor(
    private readonly blogService: BlogService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  public handleClick(post: IPost): void {
    post.toggle = !post.toggle;
    if (post.toggle) {
      post.likes++;
    } else if (!post.toggle && post.likes > 0) {
      post.likes--;
    }
  }

  public ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.blogService.receivePost(id).subscribe((post) => {
      if (!post) {
        this.router.navigate(['']);
      } else {
        this.post = post;
      }
    });
  }
}
