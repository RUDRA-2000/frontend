import { Component } from '@angular/core';
import { Account } from '../model/account';
import { AccountsService } from './accounts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrl: './accounts-list.component.css'
})
export class AccountsListComponent {
  accounts:Account[] = [];
  CustId: number = 100001;
  constructor(private accService: AccountsService, private router: Router) { }

  ngOnInit(): void {
    this.fetchAccounts();
  }

  fetchAccounts(): void {
    this.accService.getAllAccountsByCustomerId(this.CustId) // Replace '1' with the actual Customer ID
      .subscribe(accounts => {
        this.accounts = accounts;
      });
  }

  shouldDisplayChequeButton(account: Account): boolean {
    if(account.hasCheque) return false;
    else if (account.type_id === 1 && account.balance >= 5000) {
      return true;
    } else if (account.type_id === 2 && account.balance >= 10000) {
      return true;
    }
    return false;
  }

  applyForCheque(accountId: number): void {
    this.accService.applyForCheque(accountId).subscribe(
      response => {
        console.log('Cheque book applied successfully', response);
        // Handle successful response (e.g., display a success message, refresh the account list, etc.)
      },
      error => {
        console.error('Error applying for cheque book:', error);
        // Handle error response (e.g., display an error message)
      }
    );
  }
}
