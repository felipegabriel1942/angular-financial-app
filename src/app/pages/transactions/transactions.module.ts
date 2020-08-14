import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsComponent } from './transactions.component';
import { FormTransactionComponent } from './form-transaction/form-transaction.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [TransactionsComponent, FormTransactionComponent],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    SharedModule
  ]
})
export class TransactionsModule { }
