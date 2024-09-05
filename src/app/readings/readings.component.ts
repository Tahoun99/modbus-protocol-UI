import { Component, Input, OnInit } from '@angular/core';
import { ReadingsService } from '../services/readings.service';
import { Device } from '../models/device-model';
import { DeviceNavigationService } from '../services/device-navigation.service';
import { NavigationService } from '../services/navigation.service';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.css'],
})
export class ReadingsComponent implements OnInit {
  device: Device;

  deviceData;
  filteredData;
  selectedType: string = 'all';
  maxValue: number = 0;
  minValue: number = 0;
  avgValue: number = 0;

  @Input() deviceId: number;

  constructor(
    private readingServices: ReadingsService,
    private deviceServices: DeviceService
  ) {}

  ngOnInit() {
    this.readingServices.getReadings(this.deviceId).subscribe((data) => {
      console.log(data);
      this.deviceData = data;

      this.deviceServices.getDevice(this.deviceId).subscribe((data) => {
        this.device = data;

        this.filterData();
      });
    });
  }

  filterData() {
    if (this.selectedType === 'all') {
      this.filteredData = this.deviceData;
    } else {
      this.filteredData = this.deviceData.filter(
        (item) => item.readingLKPId == +this.selectedType
      );
    }

    this.maxValue = 0;
    let sum = 0;
    this.minValue =
      this.filteredData.length > 0 ? this.filteredData[0].readingValue : 0;

    this.filteredData.forEach((element) => {
      console.log(element);
      this.maxValue = Math.max(this.maxValue, element.readingValue);
      this.minValue = Math.min(this.minValue, element.readingValue);

      sum += element.readingValue;
    });

    this.avgValue = sum / this.filteredData.length;
    this.avgValue = +this.avgValue.toFixed(4);
  }
}
