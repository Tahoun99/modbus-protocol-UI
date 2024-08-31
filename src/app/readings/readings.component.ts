import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReadingsService } from '../services/readings.service';
import { Device } from '../models/device-model';

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.css'],
})
export class ReadingsComponent implements OnInit {
  device: Device = {
    id: 1,
    ip: '123',
    port: '123',
  };

  deviceData: Device[];
  filteredData: Device[];
  selectedType: string = 'all';

  constructor(private readingServices: ReadingsService) {}

  ngOnInit() {
    this.readingServices.getReadings(1).subscribe((data) => {
      console.log(data);
      this.deviceData = data;
      this.filterData();
    });
  }

  filterData() {
    if (this.selectedType === 'all') {
      this.filteredData = this.deviceData;
    } else {
      this.filteredData = this.deviceData.filter(
        (item) => item.type === this.selectedType
      );
    }
  }
}
