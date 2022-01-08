import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [CommonModule, RouterModule],
  exports: [SpinnerComponent],
})
export class SpinnerModule {}
