import { Component, Input } from '@angular/core';
import { DeviceNavigationService } from '../services/device-navigation.service';
import { NavigationService } from '../services/navigation.service';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  devices = [
    { name: 'Device 1', id: 1 },
    { name: 'Device 2', id: 2 },
    { name: 'Device 3', id: 3 },
    { name: 'Device 4', id: 4 },
    { name: 'Device 5', id: 5 },
    { name: 'Device 6', id: 6 },
  ];

  @Input() currentPage: number = 1;

  constructor(
    private deviceServices: DeviceService,
    private navigationServices: NavigationService
  ) {}

  toReadings(deviceId: number) {
    this.navigationServices.sendMessage(3, deviceId);
  }
}
