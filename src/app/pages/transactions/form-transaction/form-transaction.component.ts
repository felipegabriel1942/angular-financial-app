import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TransactionEnum } from 'src/app/shared/enum/transaction.enum';
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons';
import { TransactionsService } from 'src/app/shared/service/transactions.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Transaction } from 'src/app/shared/models/transaction.model';

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
  transactionsCategoryList = [];
  datepickerConfig = { isAnimated: true, dateInputFormat: 'DD/MM/YYYY' };

  constructor(private transactionsService: TransactionsService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit() {

    this.transactionForm = new FormGroup({
      description: new FormControl('', Validators.required),
      value: new FormControl(null, Validators.required),
      date: new FormControl(new Date(), Validators.required),
      type: new FormControl(TransactionEnum.Revenue, Validators.required),
      category: new FormControl('', Validators.required),
      observation: new FormControl('')
    });

    this.filterCategoryList();
  }

  saveForm() {
    if (this.transactionForm.invalid) {
      this.toastr.warning('Preencha todos os campos obrigatórios.');

    } else {
      this.toastr.success('Transação salva.');
      const newTransaction = new Transaction();
      Object.assign(newTransaction, this.transactionForm.value);
      newTransaction.id = new Date().getMilliseconds();
      this.transactionsService.saveTransaction(newTransaction);
      this.navigateBackToTransactions();
    }
  }

  filterCategoryList() {

    const typeSelected = this.transactionForm.get('type').value;
    this.resetField('category');

    this.transactionsCategoryList = this.transactionsService.transactionsCategoryList.filter(
      category => category.type === typeSelected
    );
  }

  resetField(field: string, value = '') {
    const categoryField = this.transactionForm.get(field);
    categoryField.reset();
    categoryField.setValue(value);
    categoryField.markAsUntouched();
    categoryField.setErrors(null);
  }

  navigateBackToTransactions() {
    this.router.navigateByUrl('transacoes');
  }
}
