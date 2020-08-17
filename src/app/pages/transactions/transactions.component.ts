import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/shared/service/transactions.service';
import { Transaction } from 'src/app/shared/models/transaction.model';
import { itemStateTrigger } from 'src/app/shared/animations/animations';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
  animations: [
    itemStateTrigger
  ]
})
export class TransactionsComponent implements OnInit {

  transactionsList = new Array<Transaction>();

  constructor(private transactionsService: TransactionsService) { }

  ngOnInit() {
    this.transactionsList = this.transactionsService.getTransactions();
  }

}
