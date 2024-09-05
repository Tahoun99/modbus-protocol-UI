import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-device-form',
  templateUrl: './add-edit-device.component.html',
  styleUrls: ['./add-edit-device.component.css']
})
export class DeviceFormComponent implements OnInit {
  device = {
    ip: '',
    port: '',
    name: '',
    model: '',
    installationDate: '',
    lifeTime: '',
    password: '',
    manufacturCountry: '',
    branch: ''
  };

  constructor(private deviceService: DeviceService) { }

  isNewDevice = true;

  onSubmit() {
    if (this.isNewDevice) {
      this.deviceService.addDevice(this.device).subscribe(
        (response) => {
          console.log('Device added successfully:', response);
        },
        (error) => {
          console.error('Error adding device:', error);
        }
      );
    } 
    // else {
    //   this.deviceService.updateDevice(this.device.id, this.device).subscribe(
    //     (response) => {
    //       console.log('Device updated successfully:', response);
    //     },
    //     (error) => {
    //       console.error('Error updating device:', error);
    //     }
    //   );
    // }
  
    console.log('Form submitted:', this.device);
  }


  ngOnInit() {
  }
}


