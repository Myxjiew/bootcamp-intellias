import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BlogFormModule } from '../blog-form/blog-form.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, BlogFormModule, MatDialogModule],
  exports: [HeaderComponent],
  bootstrap: []
})
export class HeaderModule {}