import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlogHandlerModule } from '@shared/services/blog-handler.module';
import { AsideTagsComponent } from './components/aside-tags/aside-tags.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { PostListComponent } from './components/post-list/post-list.component';
import { RouterModule } from '@angular/router';
import { SpinnerModule } from '@shared/components/spinner/spinner.module';
import { TagComponent } from './components/tag/tag.component';

@NgModule({
  declarations: [
    AsideTagsComponent,
    BlogItemComponent,
    LayoutComponent,
    PostListComponent,
    TagComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BlogHandlerModule,
    MatIconModule,
    MatRippleModule,
    RouterModule,
    SpinnerModule,
  ],
  exports: [LayoutComponent],
  bootstrap: [],
})
export class MyBlogModule {}
