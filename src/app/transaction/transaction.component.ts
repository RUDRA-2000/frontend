import { Component } from '@angular/core';
import { Transaction } from '../model/transaction';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  transactionId: number=0;
  transaction: Transaction=new Transaction();

  constructor(private transactionService: TransactionService) { }

  getTransactionDetails() {
    this.transactionService.getTransaction(this.transactionId)
      .subscribe({
        next:(data: Transaction[]) => {
          console.log(data);
          this.transaction = data[0];
        },
        error:(error) => {
          console.error(error);
        }
  });
  }
}