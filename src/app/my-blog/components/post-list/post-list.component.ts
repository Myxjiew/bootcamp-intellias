import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from '@shared/interfaces/blog-item.interface';
import { BlogService } from '@shared/services/blog.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit, OnDestroy {
  public posts: Post[] = [];
  private destroyStream = new Subject<void>();

  public constructor(private readonly blogService: BlogService) {}

  public ngOnInit(): void {
    this.blogService
      .getPosts()
      .pipe(takeUntil(this.destroyStream))
      .subscribe((res) => {
        this.posts = res;
      });
  }

  public ngOnDestroy(): void {
    this.destroyStream.next();
    this.destroyStream.complete();
  }
}
