import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { LabsComponent } from './labs/labs.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NopagefoundComponent,
    DashboardComponent,
    HospitalsComponent,
    DoctorsComponent,
    LabsComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class PagesModule { }
