import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlogHandlerModule } from '@shared/services/blog-handler.module';
import { AsideTagsComponent } from './components/aside-tags/aside-tags.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PostListComponent } from './components/post-list/post-list.component';
import { RouterModule } from '@angular/router';
import { SpinnerModule } from '@shared/components/spinner/spinner.module';

@NgModule({
  declarations: [
    AsideTagsComponent,
    BlogItemComponent,
    LayoutComponent,
    PostListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BlogHandlerModule,
    MatIconModule,
    MatRippleModule,
    MatChipsModule,
    MatFormFieldModule,
    RouterModule,
    SpinnerModule,
  ],
  exports: [LayoutComponent],
  bootstrap: [],
})
export class MyBlogModule {}
