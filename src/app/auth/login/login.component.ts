import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup = this.fb.group({
    email: [, [Validators.required, Validators.email]],
    password: [, Validators.required],
    recordarme: [],
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  onLoginSubmit(forma: FormGroup) {
    if (forma.valid) {
      this.authService.login(forma.value).subscribe({
        next: (responseLogin) => {
          Swal.fire({
            title: 'Bienvenido ' + responseLogin.nombre,
            text: 'Hemos registrado el inicio de tu sesion',
            icon: 'success',
          });
          this.router.navigate(['/dashboard']);
        },
      });
    } else {
      Swal.fire({
        title: 'Los datos son incorrectos',
        text: 'Verifique las credenciales y vuelva a intentarlo',
        icon: 'error'
      })
    }
  }
}
