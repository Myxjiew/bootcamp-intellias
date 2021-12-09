import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlogService } from './blog.service';

@NgModule({
  imports: [CommonModule],
  providers: [BlogService],
  bootstrap: []
})
export class BlogHandlerModule {}