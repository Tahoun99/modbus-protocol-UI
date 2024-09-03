import { Component, Input, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Input() currentPage: number = 1;

  constructor(private navigationServices: NavigationService) {}

  ngOnInit() {}

  changePage(pageNumber: number) {
    console.log(`From header component: ${pageNumber}`);

    this.currentPage = pageNumber;
    this.navigationServices.sendMessage(pageNumber);
  }
}
