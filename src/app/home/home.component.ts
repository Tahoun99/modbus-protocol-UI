import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  devices = [
    { name: 'Device 1' },
    { name: 'Device 2' },
    { name: 'Device 3' },
    { name: 'Device 4' },
    { name: 'Device 5' },
    { name: 'Device 6' }
  ];

  // Add methods for editing and viewing readings if necessary
}
