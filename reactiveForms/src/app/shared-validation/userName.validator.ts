//we can write this logic in app componet but we write in different file for reuse purpose

import { AbstractControl } from "@angular/forms";

//let define validator function the function accepts one parameter which is the form control being validated
//the validator functions teturn either 2 values when the validation fails it returns an object where the key is of type string and value is of type any and if validation pass it retuns null
export function forbiddenNameValidator(control: AbstractControl): { [key: string]: any } | null {

  const forbidden = /admin/.test(control.value);
  // // Return an object with a validation error   // If the control's value is valid, return null
  return forbidden ? { 'forbiddenName': { value: control.value } } : null;

}


/*
 In the context of Angular validators, the key-value parameter refers to an object that represents a validation error. The key is a string that represents the error identifier, and the value can be any value associated with that error.

When a validation error occurs, Angular expects the validator function to return an object with the validation error information. The key-value pair in this object is used to identify and describe the specific validation error.
*/
