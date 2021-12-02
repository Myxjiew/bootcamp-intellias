import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.sass'],
})
export class BlogItemComponent implements OnInit {
  constructor() {}

  toggle: boolean = false;
  likeCounter: number = 0;
  posts = [
    {
      author: 'John Dow',
      date: new Date(),
      title: 'NATURAL LANGUAGE INTERFACE ACCESSIBILITY',
      content: 'Spoken interaction with mobile devices and consumer',
    },
    {
      author: 'John Dow',
      date: new Date(),
      title: 'Accessibility of Remote Meetings',
      content: 'The impact of COVID-19 has been a substantial increase',
    },
  ];
  mockedText: string = 'Read more...';

  toggleLike(): void {
    this.toggle = !this.toggle;
    this.likeCounter ? (this.likeCounter = 0) : (this.likeCounter = 1);
  }

  ngOnInit(): void {}
}
