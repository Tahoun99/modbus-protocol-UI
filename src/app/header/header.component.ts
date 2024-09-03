// import { Component, EventEmitter, OnInit, Output } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css'],
// })
// export class HeaderComponent implements OnInit {
//   @Output() messageEvent = new EventEmitter<number>();

//   constructor() {}

//   ngOnInit() {}

//   changePage(pageNumber: number) {
//     this.messageEvent.emit(pageNumber);
//     console.log(pageNumber);
//   }
// }

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav>
      <button (click)="changePage(1)">Home</button>
      <button (click)="changePage(2)">Readings</button>
      <button (click)="changePage(3)">Device Form</button>
    </nav>
  `,
})
export class HeaderComponent {
  @Output() changePagea = new EventEmitter<number>();

  changePage(page: number) {
    console.log(`from header component: ${page}`);
    this.changePagea.emit(page);
  }
}
