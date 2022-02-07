import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '@shared/interfaces/blog-item.interface';
import { BlogService } from '@shared/services/blog.service';
import { COLOR, RADIUS } from 'src/app/constants/post.constants';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
})
export class PostPageComponent implements OnInit {
  public post!: Post;
  public radius = RADIUS;
  public color = COLOR;
  public toggle = false;

  constructor(
    private readonly blogService: BlogService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  public handleClick(post: Post): void {
    post.toggle = !post.toggle;
    post.toggle ? post.likes++ : post.likes--;
  }

  public ngOnInit(): void {
    setTimeout(() => {
      this.toggle = true;
    }, 1000);

    const id = this.route.snapshot.paramMap.get('id') || '';
    this.blogService.receivePost(id).subscribe((post) => {
      if (!post) {
        this.router.navigate(['']);
      } else {
        this.post = post;
      }
      console.log(this.post);
    });
  }
}
