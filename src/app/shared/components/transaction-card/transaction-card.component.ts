import { Component, OnInit, Input } from '@angular/core';
import { faSave, faTimes, faThumbsUp, faThumbsDown, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import { Transaction } from '../../models/transaction.model';
import { TransactionEnum } from '../../enum/transaction.enum';

@Component({
  selector: 'app-transaction-card',
  templateUrl: './transaction-card.component.html',
  styleUrls: ['./transaction-card.component.css']
})
export class TransactionCardComponent implements OnInit {

  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faHandHoldingUsd = faHandHoldingUsd;
  faTimes = faTimes;

  @Input() transaction = new Transaction();

  constructor() { }

  ngOnInit() {
  }

  setTransactionType() {
    if (this.transaction.type === TransactionEnum.Expense) {
      return 'Despesa';
    } else {
      return 'Receita';
    }
  }

  deleteTransaction() {
    console.log('Deletou...');
  }

  avatarClass() {

  }

}
