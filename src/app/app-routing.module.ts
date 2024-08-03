import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { HospitalsComponent } from './pages/hospitals/hospitals.component';
import { LabsComponent } from './pages/labs/labs.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { AuthGuard } from './guards/auth.guard';
import { AnonymousGuard } from './guards/anonymous.guard';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'account', component: ProfileComponent, canActivate: [AuthGuard]
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
      },
      { path: 'hospitals', component: HospitalsComponent },
      { path: 'doctors', component: DoctorsComponent },
      { path: 'labs', component: LabsComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ],
  },
  { path: 'login', component: LoginComponent, canActivate: [AnonymousGuard] },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AnonymousGuard],
  },
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
