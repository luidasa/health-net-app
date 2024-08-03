import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PagesModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
