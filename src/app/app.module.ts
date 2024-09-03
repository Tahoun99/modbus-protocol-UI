import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ReadingsComponent } from './readings/readings.component';
import { DeviceFormComponent } from './add-edit-device/add-edit-device.component';
import { NavigationService } from './services/navigation.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReadingsComponent,
    DeviceFormComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [NavigationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
