import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes, faHandHoldingUsd, faCarSide, faHamburger, faGamepad, faTshirt, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { Transaction } from '../../models/transaction.model';
import { TransactionEnum } from '../../enum/transaction.enum';
import { TransactionsService } from '../../service/transactions.service';

@Component({
  selector: 'app-transaction-card',
  templateUrl: './transaction-card.component.html',
  styleUrls: ['./transaction-card.component.css']
})
export class TransactionCardComponent implements OnInit {

  faTimes = faTimes;
  avatarIcon;

  @Input() transaction = new Transaction();
  @Output() transactionDeleted = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.setAvatarIcon();
  }

  setTransactionType() {
    if (this.transaction.type === TransactionEnum.Expense) {
      return 'Despesa';
    } else {
      return 'Receita';
    }
  }

  deleteTransaction() {
    this.transactionDeleted.emit();
  }

  get avatarClasses() {
    const avatarClasses = {};

    if (this.transaction.type === TransactionEnum.Expense) {
      avatarClasses['card-avatar-expense'] = true;
    } else {
      avatarClasses['card-avatar-revenue'] = true;
    }

    return avatarClasses;
  }

  setAvatarIcon() {
    if (this.transaction.category === 'Transporte') {
      this.avatarIcon = faCarSide;
    }

    if (this.transaction.category === 'Alimentação') {
      this.avatarIcon = faHamburger;
    }

    if (this.transaction.category === 'Lazer') {
      this.avatarIcon = faGamepad;
    }

    if (this.transaction.category === 'Vestuário') {
      this.avatarIcon = faTshirt;
    }

    if (this.transaction.category === 'Salário') {
      this.avatarIcon = faHandHoldingUsd;
    }

    if (this.transaction.category === 'Investimentos') {
      this.avatarIcon = faChartLine;
    }
  }

}
