import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BlogItemComponent } from './components/layout/blog-item/blog-item.component';
import { AsideTagsComponent } from './components/layout/aside-tags/aside-tags.component';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogItemComponent,
    AsideTagsComponent,
    LayoutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
