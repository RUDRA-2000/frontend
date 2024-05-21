import { Component } from '@angular/core';
import { Transaction } from '../model/transaction';
import { TransactionService } from './transaction.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent {
  accountId:number=0;
  transactions: Transaction[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;

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
  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  getPaginatedTransactions(): Transaction[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.transactions.slice(startIndex, startIndex + this.itemsPerPage);
  }

  getPaginationArray(): number[] {
    const pageCount = Math.ceil(this.transactions.length / this.itemsPerPage);
    return Array.from({ length: pageCount }, (_, index) => index + 1);
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.getAccountTransactions();
    }
  }
}