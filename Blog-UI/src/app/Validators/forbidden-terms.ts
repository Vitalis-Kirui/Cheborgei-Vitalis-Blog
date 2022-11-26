import { AbstractControl, ValidatorFn } from "@angular/forms";


export function forbiddenTermsValidator(terms: RegExp): ValidatorFn { 

    return (control: AbstractControl): { [key: string]: any } | null => {
    const forbiddenterms = terms.test(control.value)

    return forbiddenterms ? { 'forbiddenterm': { value: control.value } } : null;
}

};