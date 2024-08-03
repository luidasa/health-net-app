import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { of } from 'rxjs';
import { catchError, first, map } from 'rxjs/operators';

import { AuthService } from '../providers/auth.service';

export function phoneExistsValidator(
  authService: AuthService
): AsyncValidatorFn {
  return (control: AbstractControl) => {
    if (!control.valueChanges) {
      return of(null);
    } else {
      const telefono = control.value;
      console.log(telefono);

      return authService.findByPhone(control.value).pipe(
        map((user) => (user ? { phoneExists: true } : null)),
        catchError((err) => of(null))
      );
    }
  };
}
