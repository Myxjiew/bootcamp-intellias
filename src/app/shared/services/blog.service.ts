import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '@shared/interfaces/blog-item.interface';
import { BehaviorSubject, Observable, take } from 'rxjs';

const postsMock: IPost[] = [];

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private postStream = new BehaviorSubject<IPost[]>(postsMock);
  constructor(private readonly http: HttpClient) {}

  public receivePosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>('/api/posts');
  }

  public publishPost(post: IPost): void {
    this.postStream.next([...this.postStream.getValue(), post]);
  }
}
