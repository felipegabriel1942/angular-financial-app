import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/shared/service/transactions.service';
import { Transaction } from 'src/app/shared/models/transaction.model';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactionsList = new Array<Transaction>();

  constructor(private transactionsService: TransactionsService) { }

  ngOnInit() {
    this.transactionsList = this.transactionsService.getTransactions();
  }

}
