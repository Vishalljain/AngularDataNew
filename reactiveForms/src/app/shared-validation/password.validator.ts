import { AbstractControl } from "@angular/forms";
//remember the control parameter does not refer to an indivaidual form control instaed it refers to the form group encompassing different fileds being validated

export function PasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {

  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (password?.pristine || confirmPassword?.pristine) {
    return null;//because when reload the confirm pw will be always password is invalid so to ensure we use this if condition
  }

  return password && confirmPassword && password.value !== confirmPassword.value ? { 'mistmatch': true } : null;

}

/*
 if (password && confirmPassword && password.value !== confirmPassword.value) {
  return { 'mistmatch': true };
} else {
  return null;
}
*/
/*
 In Angular, the term "pristine" refers to the state of a form control or form itself when it hasn't been modified by the user. It indicates that the
 value has not been touched or changed since the form control was initially rendered or reset.*/
