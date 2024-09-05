import { Component, Input, OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-device-form',
  templateUrl: './add-edit-device.component.html',
  styleUrls: ['./add-edit-device.component.css'],
})
export class DeviceFormComponent implements OnInit {
  device = {
    ip: '',
    port: '',
    type: '',
    name: '',
    model: '',
    userName: '',
    passWord: '',
    // installation_Date: '2024-05-12T10:45:50.6332225',
    Life_Time: '',
    Maunfacturer: '',
    Made_In_Counry: '',
    state: 0,
    branchId: 0,
  };
  isNewDevice = true;

  @Input() deviceId: number = 0;

  constructor(private deviceService: DeviceService) {}

  ngOnInit() {
    if (!this.deviceId) {
      this.isNewDevice = true;
      return;
    }

    this.isNewDevice = false;

    this.deviceService.getDevice(this.deviceId).subscribe((data) => {
      console.log(data);
    });
  }

  // onSubmit() {
  //   if (this.isNewDevice) {
  //     if (this.validateDevice(this.device)) {
  //       console.log(this.device);
  //       this.deviceService.addDevice(this.device).subscribe(
  //         (response) => {
  //           console.log('Device added successfully:', response);
  //         },
  //         (error) => {
  //           console.error('Error adding device:', error);
  //         }
  //       );
  //     } else {
  //       console.error('Invalid device data');
  //     }
  //   }
  //   // else {
  //   //   if (this.validateDevice(this.device) && typeof this.device.id === 'number') {
  //   //     this.deviceService.updateDevice(this.device.id, this.device).subscribe(
  //   //       (response) => {
  //   //         console.log('Device updated successfully:', response);
  //   //       },
  //   //       (error) => {
  //   //         console.error('Error updating device:', error);
  //   //       }
  //   //     );
  //   //   } else {
  //   //     console.error('Invalid device data or missing device ID');
  //   //   }
  //   // }

  //   console.log('Form submitted:', this.device);
  // }

  onSubmit() {
    if (this.isNewDevice) {
      if (this.validateDevice(this.device)) {
        console.log(this.device);
        this.deviceService.addDevice(this.device).subscribe(
          (response) => {
            console.log('Device added successfully:', response);
          },
          (error) => {
            console.error('Error adding device:', error);
          }
        );
      } else {
        console.error('Invalid device data');
      }
    }
    //   else {
    //     if (this.validateDevice(this.device) && typeof this.device.id === 'number') {
    //       this.deviceService.updateDevice(this.device.id, this.device).subscribe(
    //         (response) => {
    //           console.log('Device updated successfully:', response);
    //         },
    //         (error) => {
    //           console.error('Error updating device:', error);
    //         }
    //       );
    //     } else {
    //       console.error('Invalid device data or missing device ID');
    //     }
    //   }

    //   console.log('Form submitted:', this.device);
  }

  validateDevice(device: any): boolean {
    if (
      typeof device.ip === 'string' &&
      typeof device.port === 'string' &&
      typeof device.type === 'string' &&
      typeof device.name === 'string' &&
      (device.model === undefined || typeof device.model === 'string') &&
      (device.userName === undefined || typeof device.userName === 'string') &&
      (device.passWord === undefined || typeof device.passWord === 'string') &&
      typeof device.Life_Time === 'string' &&
      typeof device.Maunfacturer === 'string' &&
      typeof device.Made_In_Counry === 'string' &&
      typeof device.state === 'number' &&
      (device.branchId === undefined || typeof device.branchId === 'number')
    ) {
      return true;
    }
    return false;
  }
}
