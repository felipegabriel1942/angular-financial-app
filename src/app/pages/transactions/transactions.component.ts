import { Component, OnInit, OnDestroy } from '@angular/core';
import { TransactionsService } from 'src/app/shared/service/transactions.service';
import { Transaction } from 'src/app/shared/models/transaction.model';
import { itemStateTrigger } from 'src/app/shared/animations/animations';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
  animations: [
    itemStateTrigger
  ]
})
export class TransactionsComponent implements OnInit, OnDestroy {

  faPlusCircle = faPlusCircle;
  transactionsList = new Array<Transaction>();
  subscriptions = new Array<Subscription>();

  constructor(private transactionsService: TransactionsService,
              private router: Router) { }

  ngOnInit() {
    this.transactionsList = this.transactionsService.getTransactions();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => subs.unsubscribe());
  }


  newTransaction() {
    this.router.navigateByUrl('transacoes/transacao');
  }

  deleteTransaction(index: number) {
    this.transactionsList.splice(index, 1);
  }

}
