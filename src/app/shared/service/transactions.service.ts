import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  transactionsCategoryList = [
    {type: 'expense', description: 'Transporte'},
    {type: 'expense', description: 'Alimentação'},
    {type: 'expense', description: 'Lazer'},
    {type: 'expense', description: 'Vestuário'},
    {type: 'revenue', description: 'Salário'},
    {type: 'revenue', description: 'Investimentos'}
  ];

  saveTransaction(transaction: Transaction) {
    let transactions = new Array<Transaction>();

    if (localStorage.getItem('transactions')) {
      transactions = JSON.parse(localStorage.getItem('transactions')) as Array<Transaction>;
    }

    transactions.push(transaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }


  getTransactions() {
    return JSON.parse(localStorage.getItem('transactions')) as Array<Transaction>;
  }
}
