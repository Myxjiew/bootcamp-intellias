import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BlogItemComponent } from './components/layout/blog-item/blog-item.component';
import { AsideTagsComponent } from './components/layout/aside-tags/aside-tags.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BlogFormComponent } from './components/header/blog-form/blog-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogItemComponent,
    AsideTagsComponent,
    LayoutComponent,
    BlogFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [BlogFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
