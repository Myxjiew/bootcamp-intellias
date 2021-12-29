import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@my-blog/components/layout/layout.component';
import { PostPageComponent } from '@my-blog/post-page/post-page.component';

const routes: Routes = [
  { path: '', component: LayoutComponent },
  { path: 'posts/:id', component: PostPageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
