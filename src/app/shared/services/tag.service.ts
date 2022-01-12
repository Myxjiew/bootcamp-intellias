import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateTagDTO, Tag } from '@shared/interfaces/tag.interface';
import { BehaviorSubject, Observable } from 'rxjs';

const tagMock: Tag[] = [];

@Injectable({
  providedIn: 'root',
})
export class TagService {
  private tagStream = new BehaviorSubject<Tag[]>(tagMock);
  constructor(private readonly http: HttpClient) {}

  public receiveTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>('api/tags');
  }

  public getTags(): Observable<Tag[]> {
    return this.tagStream.asObservable();
  }

  public feedTags(): void {
    this.receiveTags().subscribe((tags) => this.tagStream.next(tags));
  }

  public updateStream(tag: Tag): void {
    if (tag) {
      this.tagStream.next([...this.tagStream.getValue(), tag]);
    }
  }

  public deleteFromStream(tag: Tag): void {
    if (tag) {
      this.tagStream.next(
        this.tagStream.getValue().filter((el) => el._id !== tag._id)
      );
    }
  }

  public receiveTag(id: string): Observable<Tag[]> {
    return this.http.get<Tag[]>(`/api/tags/${id}`);
  }

  public sendTag(tag: CreateTagDTO) {
    return this.http.post<Tag>('/api/tags', tag);
  }

  public deleteTag(id: string): Observable<{ _id: string }> {
    return this.http.delete<{ _id: string }>(`/api/tags/${id}`);
  }
}
