import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IModal } from '@shared/interfaces/modal.interface';
import { BlogService } from '@shared/services/blog.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss'],
})
export class BlogFormComponent {
  modalForm = this.fb.group({
    author: [
      '',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('[a-zA-Z ]*'),
      ],
    ],
    title: ['', [Validators.required, Validators.minLength(6)]],
    content: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(
    private matDialogRef: MatDialogRef<BlogFormComponent>,
    private blogService: BlogService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: IModal
  ) {}

  public closeClick() {
    this.matDialogRef.close();
  }

  public sendNewPost() {
    this.blogService
      .sendPost(
        Object.assign(this.modalForm.value, {
          author: '61cb086fcd5ea4403ed5fd19',
          date: new Date(),
          likes: 0,
        })
      )
      .subscribe((data) => this.blogService.publishPost(data));
    this.matDialogRef.close();
    window.location.reload();
  }
}
