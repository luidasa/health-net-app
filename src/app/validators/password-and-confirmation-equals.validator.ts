import { FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordAndConfirmationEqualsValidator(): ValidatorFn {

  return (form: any) => {

    const password = form.get('password').value;

    const confirmation = form.get('repassword').value;

    if (password && confirmation) {
      return password === confirmation ? null : { confirmationFail: true };
    }

    return {confirmationFail: true};
  };
}
