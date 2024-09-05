import { Component, OnDestroy, OnInit } from '@angular/core';
import { DeviceService } from './services/device.service';
import { Device } from './models/device-model';
import { NavigationService } from './services/navigation.service';
import { Subscription } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  devices: Device[];
  currentPage: number = 1;
  private navigationSubs: Subscription;

  constructor(
    private deviceServices: DeviceService,
    private navigationServices: NavigationService
  ) {}

  gotor() {
    this.currentPage = 3;
  }

  ngOnInit() {
    this.navigationSubs = this.navigationServices.message$.subscribe(
      (pageNamber) => {
        console.log(`From app: ${pageNamber}`);
        this.currentPage = pageNamber;
      }
    );

    // this.deviceServices.getDevices().subscribe(
    //   (data) => {
    //     console.log(data);
    //     this.devices = data;
    //   },
    //   (err) => this.handleRequestError(err)
    // );
  }

  ngOnDestroy() {
    this.navigationSubs.unsubscribe();
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
