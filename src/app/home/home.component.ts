import { Component, Input, OnInit } from '@angular/core';
import { DeviceNavigationService } from '../services/device-navigation.service';
import { NavigationService } from '../services/navigation.service';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  devices: [];

  @Input() currentPage: number = 1;

  constructor(
    private deviceServices: DeviceService,
    private navigationServices: NavigationService
  ) {}
  ngOnInit() {
    this.deviceServices.getDevices().subscribe((data) => {
      this.devices = data;
    });
  }

  toReadings(deviceId: number) {
    this.navigationServices.sendMessage(3, deviceId);
  }

  toEdit(deviceId: number) {
    this.navigationServices.sendMessage(2, deviceId);
  }
}
