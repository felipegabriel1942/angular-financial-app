import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TransactionEnum } from 'src/app/shared/enum/transaction.enum';
import { faSave, faTimes, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { TransactionsService } from 'src/app/shared/service/transactions.service';

@Component({
  selector: 'app-form-transaction',
  templateUrl: './form-transaction.component.html',
  styleUrls: ['./form-transaction.component.css']
})
export class FormTransactionComponent implements OnInit {

  faSave = faSave;
  faTimes = faTimes;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  TransactionEnum = TransactionEnum;
  transactionForm: FormGroup;
  revenueBtnSelected = true;
  expenseBtnSelected = false;
  transactionsCategoryList = [];

  constructor(private transactionsService: TransactionsService) { }

  ngOnInit() {

    this.transactionForm = new FormGroup({
      description: new FormControl(''),
      value: new FormControl(null),
      date: new FormControl(new Date()),
      type: new FormControl(TransactionEnum.Revenue),
      category: new FormControl(''),
      observation: new FormControl('')
    });
    this.transactionsCategoryList = this.filterCategoryList();
  }

  saveForm() {
    this.transactionsService.transactionsList.push(this.transactionForm.value);
  }

  typeButtonSelected(typeButton: string) {
    this.transactionForm.get('type').setValue(typeButton);
    this.expenseBtnSelected = typeButton === TransactionEnum.Expense;
    this.revenueBtnSelected = typeButton === TransactionEnum.Revenue;
    this.transactionsCategoryList = this.filterCategoryList();

  }

  filterCategoryList() {
    if (this.expenseBtnSelected) {
      return this.transactionsService.transactionsCategoryList.filter(category => category.type === TransactionEnum.Expense);
    } else {
      return this.transactionsService.transactionsCategoryList.filter(category => category.type === TransactionEnum.Revenue);
    }
  }
}
