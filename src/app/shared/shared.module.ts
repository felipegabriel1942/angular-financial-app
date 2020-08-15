import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormControlValidationDirective } from './directives/form-control-validation.directive';
import { FormValidationDirective } from './directives/form-validation.directive';
import { FormButtonSubmitDirective } from './directives/form-button-submit.directive';


@NgModule({
  declarations: [
    FormControlValidationDirective,
    FormValidationDirective,
    FormButtonSubmitDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    BsDatepickerModule.forRoot()
  ],
  exports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BsDatepickerModule,
    FormControlValidationDirective,
    FormValidationDirective,
    FormButtonSubmitDirective
  ]
})
export class SharedModule { }
