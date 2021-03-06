import { AbstractControl } from '@angular/forms';

export function forbiddenLanguageValidator(nameRe: RegExp) {
	return (control: AbstractControl): { [key: string]: any } | null => {
		const forbidden = nameRe.test(control.value);
		return forbidden ? { forbiddenName: { value: control.value } } : null;
	};
}