import { CommonModule } from '@angular/common';
import { BlogFormComponent } from './blog-form.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogHandlerModule } from '../../services/blog-handler.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [BlogFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BlogHandlerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports: [BlogFormComponent],
  entryComponents: [BlogFormComponent],
  bootstrap: [],
})
export class BlogFormModule {}
