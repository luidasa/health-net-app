import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private authService: AuthService,
    private router: Router
  ) { }

  logout() {
    this.authService.logout()
    this.router.navigate(['/login'])
    Swal.fire({
      title: "Hasta la vista",
      text: "Agradecemos su interes en nuestro servicio, y esperamos que pronto regrese.",
      icon: "info"
    })
  }

}
