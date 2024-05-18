import { Component } from '@angular/core';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'app-transfer-funds',
  templateUrl: './transfer-funds.component.html',
  styleUrls: ['./transfer-funds.component.css']
})
export class TransferFundsComponent {
  sourceAccountId: number=0;
  destinationAccountId: number=0;
  amount: number=0;
  transferSuccess: boolean = false;
  transferError: string = '';

  constructor(private transactionService: TransactionService) { }

  transferFunds() {
    this.transactionService.transferFunds(this.sourceAccountId, this.destinationAccountId, this.amount)
      .subscribe(
        (data) => {
          this.transferSuccess = true;
          this.transferError = '';
        },
        (error) => {
          this.transferSuccess = false;
          this.transferError = error.message;
        }
      );
  }
}