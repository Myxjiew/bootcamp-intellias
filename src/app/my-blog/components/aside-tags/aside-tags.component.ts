import { Component, OnDestroy, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { Tag } from '@shared/interfaces/tag.interface';
import { TagService } from '@shared/services/tag.service';
import { Subject, takeUntil } from 'rxjs';
import { BlogService } from '@shared/services/blog.service';

@Component({
  selector: 'app-aside-tags',
  templateUrl: './aside-tags.component.html',
  styleUrls: ['./aside-tags.component.scss'],
})
export class AsideTagsComponent implements OnInit, OnDestroy {
  public readonly separatorKeysCodes = [ENTER, COMMA] as const;
  private destroyStream = new Subject<void>();

  public constructor(
    private readonly tagService: TagService,
    private readonly blogService: BlogService
  ) {}

  public addOnBlur = true;
  public tags: Tag[] = [];

  public addTag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      const dataTag = { tagName: value };
      this.tagService
        .sendTag(dataTag)
        .subscribe((data) => this.tagService.updateStream(data));
    }
    event.chipInput!.clear();
  }

  public filterByTag(query: string = ''): void {
    this.blogService.feedPosts(query);
  }

  public removeTag(tag: Tag): void {
    this.tagService
      .deleteTag(tag._id)
      .subscribe((data) => this.tagService.deleteFromStream(tag));
  }

  public ngOnInit(): void {
    this.tagService
      .getTags()
      .pipe(takeUntil(this.destroyStream))
      .subscribe((res) => {
        this.tags = res;
      });
  }

  public ngOnDestroy(): void {
    this.destroyStream.next();
    this.destroyStream.complete();
  }
}
