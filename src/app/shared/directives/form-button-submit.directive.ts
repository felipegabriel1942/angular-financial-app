import { Directive, Input, HostListener } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[formButtonSubmit]'
})
export class FormButtonSubmitDirective {

  @Input() submittedForm: FormGroup;

  @HostListener('click')
  handleClickEvent() {
    this.markAsTouched(this.submittedForm);

  }

  private markAsTouched(formGroup: FormGroup) {
    formGroup.markAsTouched();
    formGroup.updateValueAndValidity();

    (Object as any).values(formGroup.controls).forEach(
      control => {

        control.markAsTouched();
        control.updateValueAndValidity({ onlySelf: false, emitEvent: true});

        if (control.controls) {
          this.markAsTouched(control);
        }
    });
  }
}
