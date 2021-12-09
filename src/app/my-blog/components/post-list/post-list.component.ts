import { Component, OnDestroy, OnInit } from '@angular/core';
import { IPost } from '@shared/interfaces/blog-item.interface';
import { BlogService } from '@shared/services/blog.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass'],
})
export class PostListComponent implements OnInit, OnDestroy {
  public posts: IPost[] = [];
  private destroyStream = new Subject<void>();

  public constructor(private readonly blogService: BlogService) {}

  public ngOnInit(): void {
    this.blogService
      .receivePosts()
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
