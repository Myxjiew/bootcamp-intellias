import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IModal } from 'src/interfaces/modal.interface';
import { BlogService } from 'src/services/blog.service';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.sass'],
})
export class BlogFormComponent implements OnInit {
  modalForm = this.fb.group({
    author: ['', Validators.required],
    title: ['', Validators.required],
    content: ['', Validators.required]
  });
  constructor(
    private matDialogRef: MatDialogRef<BlogFormComponent>,
    private blogService: BlogService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: IModal
  ) {}

  ngOnInit(): void {}

  closeClick() {
    this.matDialogRef.close();
  }

  sendNewPost() {
    this.blogService.publishPost({...this.modalForm.value, likeCounter: 0});
    this.matDialogRef.afterClosed();
    this.matDialogRef.close();
  }
}
