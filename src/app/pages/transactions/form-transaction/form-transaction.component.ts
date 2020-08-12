import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TransactionEnum } from 'src/app/shared/enum/transaction.enum';
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form-transaction',
  templateUrl: './form-transaction.component.html',
  styleUrls: ['./form-transaction.component.css']
})
export class FormTransactionComponent implements OnInit {

  faSave = faSave;
  faTimes = faTimes;
  TransactionEnum = TransactionEnum;
  transactionForm: FormGroup;
  revenueBtnSelected = true;
  expenseBtnSelected = false;

  constructor() { }

  ngOnInit() {

    this.transactionForm = new FormGroup({
      description: new FormControl(''),
      value: new FormControl(null),
      date: new FormControl(new Date()),
      type: new FormControl(TransactionEnum.Expense),
      category: new FormControl({value: '', disabled: true}),
      observation: new FormControl('')
    });

  }

  saveForm() {
    console.log(this.transactionForm.value);
  }

  typeButtonSelected(typeButton: string) {
    this.transactionForm.get('type').setValue(typeButton);
    this.expenseBtnSelected = typeButton === TransactionEnum.Expense;
    this.revenueBtnSelected = typeButton === TransactionEnum.Renevue;

  }

}
