import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  items: number[];

  constructor() {
    this.items = Array.from({ length: 8 }, (e, i) => i++);
  }

  ngOnInit(): void {}
}
