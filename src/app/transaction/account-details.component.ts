import { Component } from '@angular/core';
import { Transaction } from '../model/transaction';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent {
  accountId: number=0;
  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService) { }

  getAccountTransactions() {
    this.transactionService.getAccountTransactions(this.accountId)
    .subscribe({
      next: (data: Transaction[]) => {
          this.transactions = data;
          
        },
      error: (error:any) => {
          console.error(error);
        }
  });
  }
}