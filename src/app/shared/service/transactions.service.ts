import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  transactionsList = new Array<Transaction>();
  transactionsCategoryList = [
    {type: 'expense', description: 'Transporte'},
    {type: 'expense', description: 'Alimentação'},
    {type: 'expense', description: 'Lazer'},
    {type: 'expense', description: 'Vestuário'},
    {type: 'revenue', description: 'Salário'},
    {type: 'revenue', description: 'Investimentos'}
  ];
}
