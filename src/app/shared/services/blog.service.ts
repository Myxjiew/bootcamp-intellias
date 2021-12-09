import { Injectable } from '@angular/core';
import { IPost } from '@shared/interfaces/blog-item.interface';
import { BehaviorSubject, Observable } from 'rxjs';

const postsMock: IPost[] = [
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
    likeCounter: 1
  },
];

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private postStream = new BehaviorSubject<IPost[]>(postsMock);
  
  public receivePosts(): Observable<IPost[]> {
    return this.postStream.asObservable();
  }

  public publishPost(post: IPost): void {
    this.postStream.next([...this.postStream.getValue(), post]);
  }

}
