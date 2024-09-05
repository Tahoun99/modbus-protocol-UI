import { Component, Input, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.css'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Input() currentPage: number = 1;

  constructor(private navigationServices: NavigationService) {}

  ngOnInit() {}

  changePage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.navigationServices.sendMessage(pageNumber);
  }
}
