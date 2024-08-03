import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { catchError, first, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { AuthService } from '../providers/auth.service';

export function emailExistsValidator(
  authService: AuthService
): AsyncValidatorFn {
  return (control: AbstractControl) => {
    if (!control.valueChanges) {
      return of(null);
    } else {
      return authService.findByEmail(control.value).pipe(
        map((user) => (user ? { emailExists: true } : null)),
        catchError(err => of(null))
      );
    }
  };
}
