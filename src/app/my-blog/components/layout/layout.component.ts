import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { IPost } from '@shared/interfaces/blog-item.interface';
import { BlogService } from '@shared/services/blog.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass'],
})
export class LayoutComponent implements OnInit, OnDestroy {
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
