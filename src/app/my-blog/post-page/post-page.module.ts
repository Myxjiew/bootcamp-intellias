import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostPageComponent } from './post-page.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { SpinnerModule } from '@shared/components/spinner/spinner.module';

@NgModule({
  declarations: [PostPageComponent],
  imports: [
    RouterModule,
    MatIconModule,
    MatRippleModule,
    CommonModule,
    SpinnerModule,
  ],
  exports: [PostPageComponent],
  bootstrap: [],
})
export class PostPageModule {}
