import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { BlogFormComponent } from './blog-form/blog-form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  constructor(public matDialog: MatDialog) {}

  openForm(): void {
    this.matDialog.open(BlogFormComponent);
  }
}