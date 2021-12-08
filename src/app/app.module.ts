import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Custom
import { HeaderModule } from '@shared/components/header/header.module';
import { MyBlogModule } from '@my-blog/my-blog.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    MyBlogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
