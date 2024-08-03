import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import Swal from 'sweetalert2';

import { AuthService } from 'src/app/providers/auth.service';
import { createPasswordStrengthValidator } from 'src/app/validators/create-password-strength.validator';
import { passwordAndConfirmationEqualsValidator } from 'src/app/validators/password-and-confirmation-equals.validator';
import { phoneExistsValidator } from 'src/app/validators/unique-phone.validator';
import { emailExistsValidator } from 'src/app/validators/unique-email.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = this.fb.group({
    nombre: [, Validators.required],
    email: [, {
      validators: [Validators.required, Validators.email],
      asyncValidators: [emailExistsValidator(this.authService)],
      updateOn: 'change'
    }],
    telefono: [
      ,
      {
        validators : [Validators.required, Validators.minLength(10), Validators.maxLength(10)],
        asyncValidators: [phoneExistsValidator(this.authService)],
        updateOn: 'change'
      },
    ],
    password: [,
      {
        validators: [Validators.required, Validators.minLength(6), createPasswordStrengthValidator()]
      }],
    repassword: [, [Validators.required, Validators.minLength(6)]],
  }, {
    validators: [passwordAndConfirmationEqualsValidator()]
  });

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmitRegister() {

    if (this.registerForm.valid) {
      this.authService.signup(this.registerForm.value).subscribe({
        next: (resp) => {
          Swal.fire({
            title: 'Resgistro de usuario realizado',
            text: 'Gracias por su registro. Le hemos enviado un correo electronico con las instrucciones para activar su usuario.',
            icon: 'success',
          });
        },
        error: (err) => {
          console.log(err);
          Swal.fire({
            title: 'Error al registrar el usuario!',
            text: err.error.msg,
            icon: 'error',
          });
        },
      });
    } else {
      console.log(this.registerForm.status, this.registerForm.controls);

      Swal.fire({
        title: 'Error!',
        text: 'Los datos del formulario son incorrectos.',
        icon: 'error',
      });
    }
  }

  //#region propiedades

  public get nombre(): FormControl {
    return this.registerForm.get('nombre') as FormControl;
  }

  public get email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  public get telefono(): FormControl {
    return this.registerForm.get('telefono') as FormControl;
  }

  public get password(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }

  public get repassword(): FormControl {
    return this.registerForm.get('repassword') as FormControl;
  }

  //#endregion
}
