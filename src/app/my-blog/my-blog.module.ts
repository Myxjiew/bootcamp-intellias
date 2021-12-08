import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlogHandlerModule } from '@shared/services/blog-handler.module';
import { AsideTagsComponent } from './components/aside-tags/aside-tags.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [AsideTagsComponent, BlogItemComponent, LayoutComponent],
  imports: [CommonModule, FormsModule, BlogHandlerModule],
  exports: [LayoutComponent],
  bootstrap: []
})
export class MyBlogModule {}