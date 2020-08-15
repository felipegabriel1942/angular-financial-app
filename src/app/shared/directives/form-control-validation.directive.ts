import { Directive, OnInit, OnDestroy, ElementRef, HostListener, HostBinding } from '@angular/core';
import { NgControl, ValidationErrors } from '@angular/forms';
import { ValidationMessageService } from '../service/validation-message.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[formControlValidation]'
})
export class FormControlValidationDirective implements OnInit, OnDestroy {

  controlSubscription: Subscription;

  constructor(private elRef: ElementRef,
              private control: NgControl,
              private validationMessageService: ValidationMessageService
              ) { }

  ngOnInit() {
    this.controlSubscription = this.control.statusChanges.subscribe((status) => {

      status === 'INVALID' ? this.showError() : this.removeError();

    });

  }
  ngOnDestroy() {
    this.controlSubscription.unsubscribe();
  }

  @HostListener('blur', ['$event'])
  handleBlurEvent() {
    if (this.control.value == null || this.control.value === '') {
      this.control.errors ? this.showError() : this.removeError();
    }
  }

  @HostBinding('class.invalid-field')
  get isFieldInvalid() {
    return this.control.errors != null && this.control.touched;
  }

  showError() {
    this.removeError();
    const valErrors: ValidationErrors = this.control.errors;
    const firstKey = Object.keys(valErrors)[0];
    const errorMessage = this.validationMessageService.getValidationMessage(firstKey);
    const errorMessageId = this.control.name + '-error-message';
    const errorSpan = `<small style="color:red;" id="${errorMessageId}">${errorMessage}</small>`;
    this.elRef.nativeElement.parentElement.insertAdjacentHTML('beforeend', errorSpan);
  }

  removeError() {
    const errorMessageId = this.control.name + '-error-message';
    const errorElement = document.getElementById(errorMessageId);
    if (errorElement) { errorElement.remove(); }
  }

}
