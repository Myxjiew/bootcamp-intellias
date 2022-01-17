import { Component, OnInit } from '@angular/core';
import { BlogService } from '@shared/services/blog.service';
import { TagService } from '@shared/services/tag.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  public toggle = false;

  public constructor(
    private readonly blogService: BlogService,
    private readonly tagService: TagService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const temp = this.activatedRoute.snapshot.queryParamMap.get('tag');
    this.blogService.feedPosts(temp || '');
    this.tagService.feedTags();
    setTimeout(() => {
      this.toggle = true;
    }, 1000);
  }
}
