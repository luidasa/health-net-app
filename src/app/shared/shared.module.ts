import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
