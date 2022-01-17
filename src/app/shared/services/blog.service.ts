import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '@shared/interfaces/blog-item.interface';
import { BehaviorSubject, Observable } from 'rxjs';

const postsMock: Post[] = [];

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private postStream = new BehaviorSubject<Post[]>(postsMock);
  constructor(private readonly http: HttpClient) {}

  public receivePosts(query = ''): Observable<Post[]> {
    const reqURL = query ? `?tags=${query}` : '';
    return this.http.get<Post[]>(`/api/posts${reqURL}`);
  }

  public receivePost(id: string): Observable<Post> {
    return this.http.get<Post>(`/api/posts/${id}`);
  }

  public sendPost(post: Post) {
    return this.http.post<Post>('/api/posts', post);
  }

  public updatePost(id: string, post: Post): Observable<Post> {
    return this.http.patch<Post>(`/api/posts/${id}`, post);
  }

  public deletePost(id: string): Observable<{ _id: string }> {
    return this.http.delete<{ _id: string }>(`/api/posts/${id}`);
  }

  public updateStream(post: Post, action: 'add' | 'remove'): void {
    if (post) {
      if (action === 'remove') {
        this.postStream.next(
          this.postStream.getValue().filter((el) => el._id !== post._id)
        );
      } else {
        this.postStream.next([...this.postStream.getValue(), post]);
      }
    }
  }

  public getPosts(): Observable<Post[]> {
    return this.postStream.asObservable();
  }

  public feedPosts(query = ''): void {
    this.receivePosts(query).subscribe((posts) => this.postStream.next(posts));
  }
}
