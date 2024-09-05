import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DeviceService } from './services/device.service';
import { Device } from './models/device-model';
import { NavigationService } from './services/navigation.service';
import { Subscription } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { BranchService } from './services/branch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  devices: Device[];
  currentPage: number = 1;
  wantedDeviceId: number;
  private navigationSubs: Subscription;

  constructor(
    private branchServices: BranchService,
    private navigationServices: NavigationService
  ) {}

  ngOnInit() {
    this.navigationSubs = this.navigationServices.message$.subscribe((data) => {
      this.wantedDeviceId = data.deviceId;
      this.currentPage = data.pageNumber;
    });

    // this.branchServices.getBranch().subscribe((data) => {
    //   console.log(data);
    // });
  }

  ngOnDestroy() {
    this.navigationSubs.unsubscribe();
  }

  private handleRequestError(err): void {
    console.log(err);
  }
}
