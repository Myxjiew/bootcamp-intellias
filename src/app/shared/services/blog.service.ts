import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '@shared/interfaces/blog-item.interface';
import { BehaviorSubject, Observable } from 'rxjs';

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

  public receivePost(id: string): Observable<IPost> {
    return this.http.get<IPost>(`/api/posts/${id}`);
  }

  public sendPost(post: IPost) {
    return this.http.post<IPost>('/api/posts', post);
  }

  public updatePost(id: string, post: IPost): Observable<IPost> {
    return this.http.patch<IPost>(`/api/posts/${id}`, post);
  }

  public deletePost(id: string): Observable<IPost> {
    return this.http.delete<IPost>(`/api/posts/${id}`);
  }

  public publishPost(post: IPost): void {
    this.postStream.next([...this.postStream.getValue(), post]);
  }
}
