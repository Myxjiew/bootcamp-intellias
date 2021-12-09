import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlogHandlerModule } from '@shared/services/blog-handler.module';
import { AsideTagsComponent } from './components/aside-tags/aside-tags.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MatIconModule } from '@angular/material/icon';
import { PostListComponent } from './components/post-list/post-list.component';

@NgModule({
  declarations: [
    AsideTagsComponent,
    BlogItemComponent,
    LayoutComponent,
    PostListComponent,
  ],
  imports: [CommonModule, FormsModule, BlogHandlerModule, MatIconModule],
  exports: [LayoutComponent],
  bootstrap: [],
})
export class MyBlogModule {}
