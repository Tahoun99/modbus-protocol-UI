import { Component, OnInit } from '@angular/core';

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

  onSubmit() {
    // Handle form submission here
    console.log('Form submitted:', this.device);
  }

  constructor() { }

  ngOnInit() {
  }
}
