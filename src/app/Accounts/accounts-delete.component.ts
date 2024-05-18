import { Component, OnInit } from '@angular/core';
import { Account } from '../model/account';
import { AccountsService } from './accounts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-accounts-delete',
  templateUrl: './accounts-delete.component.html',
  styleUrl: './accounts-delete.component.css'
})
export class AccountsDeleteComponent implements OnInit{
  account:Account = <Account>{};
  accountId:number = <number>{};
  isDeleteAction: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private accountsService: AccountsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.accountId = +params.get('id')!;
      this.fetchAccountDetails(this.accountId);
    });
  }

  fetchAccountDetails(accountId: number): void {
    this.accountsService.getAccountByAccountId(accountId).subscribe(
      (account: Account) => {
        this.account = account;
        this.isDeleteAction = true;
      },
      error => {
        console.error('Error fetching account details:', error);
      }
    );
  }

  deleteAccount(): void {
    // Call the deleteAccount method of the AccountsService to delete the account by accountId
    this.accountsService.deleteAccount(this.accountId).subscribe(
      () => {
        console.log('Account deleted successfully');
        // Redirect to some page after successful deletion
        this.router.navigate(['/list']);
      },
      error => {
        console.error('Error deleting account:', error);
      }
    );
  }
}
