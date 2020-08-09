import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionsComponent } from './transactions.component';
import { FormTransactionComponent } from './form-transaction/form-transaction.component';

const routes: Routes = [
  {path: '', component: TransactionsComponent},
  {path: 'transacao', component: FormTransactionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
