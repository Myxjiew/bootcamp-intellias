import { Injectable } from '@angular/core';
import { IPost } from 'src/interfaces/blog-item.interface';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private subject = new Subject<IPost>();

  public constructor() { 
    
  }

  public initPosts(): void {
    [
      {
        author: 'John Dow',
        date: new Date(),
        title: 'NATURAL LANGUAGE INTERFACE ACCESSIBILITY',
        content: 'Spoken interaction with mobile devices and consumer',
        toggle: false,
        likeCounter: 0
      },
      {
        author: 'John Dow',
        date: new Date(),
        title: 'Accessibility of Remote Meetings',
        content: 'The impact of COVID-19 has been a substantial increase',
        toggle: false,
        likeCounter: 0
      },
    ].forEach(post => this.subject.next(post));
  }
  
  public receivePosts(): Observable<IPost> {
    return this.subject.asObservable();
  }

  public publishPost(post: IPost): void {
    this.subject.next(post);
  }


}
