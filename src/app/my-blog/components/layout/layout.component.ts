import { Component, OnInit } from '@angular/core';
import { BlogService } from '@shared/services/blog.service';
import { TagService } from '@shared/services/tag.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  public toggle = false;

  public constructor(
    private readonly blogService: BlogService,
    private readonly tagService: TagService
  ) {}

  ngOnInit() {
    this.blogService.feedPosts();
    this.tagService.feedTags();
    setTimeout(() => {
      this.toggle = true;
    }, 1000);
  }
}
