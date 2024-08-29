import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface DeviceData {
  dateTime: Date;
  type: string;
  value: number;
}

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.css']
})
export class ReadingsComponent implements OnInit {

  deviceName: string = 'Device Name'; // You can dynamically set this based on the device
  deviceData: DeviceData[] = [
    {
      dateTime: new Date(),
      type: 'voltage',
      value: 0
    },
    {
      dateTime: new Date(),
      type: 'current',
      value: 0
    },
    {
      dateTime: new Date(),
      type: 'watt',
      value: 0
    }
  ];
  filteredData: DeviceData[] = [];
  selectedType: string = 'all';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.filterData()
    // this.fetchDeviceData();
  }

  // fetchDeviceData() {
  //   // Replace with your actual backend API endpoint
  //   const apiUrl = 'https://your-backend-api.com/device/data';

  //   this.http.get<DeviceData[]>(apiUrl).subscribe(data => {
  //     this.deviceData = data;
  //     this.filterData();
  //   }, error => {
  //     console.error('Error fetching device data', error);
  //   });
  // }

  filterData() {
    if (this.selectedType === 'all') {
      this.filteredData = this.deviceData;
    } else {
      this.filteredData = this.deviceData.filter(item => item.type === this.selectedType);
    }
  }

  // deviceName: string = 'Device Name'; // You can dynamically set this based on the device
  // deviceData = [
  //   {
  //     dateTime: Date.now(),
  //     voltage: 0,
  //     current: 0,
  //     watt: 0
  //   }
  // ];

  // constructor(private http: HttpClient) {}

  // ngOnInit() {
  //   this.fetchDeviceData();
  // }

  // fetchDeviceData() {
  //   // Replace with your actual backend API endpoint
  //   const apiUrl = 'https://your-backend-api.com/device/data';
  // }

}
