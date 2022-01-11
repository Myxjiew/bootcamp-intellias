import { Component, OnInit } from '@angular/core';
import { BlogService } from '@shared/services/blog.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  public toggle = false;

  public constructor(private readonly blogService: BlogService) {}

  ngOnInit() {
    this.blogService.feedPosts();
    setTimeout(() => {
      this.toggle = true;
    }, 1000);
  }
}
