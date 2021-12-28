import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BlogService } from './blog.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [BlogService],
})
export class BlogHandlerModule {}
