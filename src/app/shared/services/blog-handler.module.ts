import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BlogService } from './blog.service';
import { TagService } from './tag.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [BlogService, TagService],
})
export class BlogHandlerModule {}
