import { Component, OnInit } from '@angular/core';
import { DeviceService } from './services/device.service';
import { Device } from './models/device-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  devices: Device[];

  constructor(private deviceServices: DeviceService) {}

  ngOnInit() {
    this.deviceServices.getDevices().subscribe(
      (data) => {
        console.log(data);
        this.devices = data;
      },
      (err) => this.handleRequestError(err)
    );
  }

  addDevice() {
    const dummyData = {
      ip: '888',
      port: '111',
      last_Reading_Time: '2024-08-31T18:27:03.904Z',
      type: 'string',
      name: 'string',
      model: 'string',
      userName: 'string',
      passWord: 'string',
      installation_Date: '2024-08-31T18:27:03.904Z',
      life_Time: 'string',
      maunfacturer: 'string',
      made_In_Counry: 'string',
      state: 0,
      branchId: 1,
    };

    this.deviceServices.addDevice(dummyData).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => this.handleRequestError(err)
    );
  }

  getDev(id: number) {
    this.deviceServices.getDevice(id).subscribe(
      (data) => {
        console.log(data);
      },

      (err) => this.handleRequestError(err)
    );
  }

  private handleRequestError(err): void {
    console.log(err);
  }
}
