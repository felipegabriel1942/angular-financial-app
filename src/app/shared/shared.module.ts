import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormControlValidationDirective } from './directives/form-control-validation.directive';
import { FormButtonSubmitDirective } from './directives/form-button-submit.directive';

import { ToastrModule } from 'ngx-toastr';
import { TransactionCardComponent } from './components/transaction-card/transaction-card.component';

@NgModule({
  declarations: [
    FormControlValidationDirective,
    FormButtonSubmitDirective,
    TransactionCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    BsDatepickerModule.forRoot(),
    ToastrModule.forRoot({progressBar: true, preventDuplicates: true})
  ],
  exports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BsDatepickerModule,
    FormControlValidationDirective,
    FormButtonSubmitDirective,
    ToastrModule,
    TransactionCardComponent
  ]
})
export class SharedModule { }
