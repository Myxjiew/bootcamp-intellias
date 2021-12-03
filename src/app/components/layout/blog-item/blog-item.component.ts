import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/interfaces/blog-item.interface';
import { BlogService } from 'src/services/blog.service';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.sass'],
})
export class BlogItemComponent implements OnInit {
  public constructor(private readonly blogService: BlogService) {}

  public readonly mockedText = 'Read more...';
  public posts: IPost[] = [];

  public handleClick(post: any): void {
    post.toggle = !post.toggle;
    post.likeCounter ? post.likeCounter = 0 : post.likeCounter = 1;
  }

  public ngOnInit(): void {
    this.blogService.receivePosts().subscribe(res => this.posts.push(res));
    this.blogService.initPosts();
  }

}
