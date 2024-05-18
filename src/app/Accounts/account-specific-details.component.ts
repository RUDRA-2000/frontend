import { Component } from '@angular/core';
import { Account } from '../Models/account';
import { ActivatedRoute } from '@angular/router';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-account-specific-details',
  templateUrl: './account-specific-details.component.html',
  styleUrl: './account-specific-details.component.css'
})
export class AccountSpecificDetailsComponent {
  account: Account | undefined;

  constructor(
    private route: ActivatedRoute,
    private accService: AccountsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const accountID = +params['id']; // Retrieve the account ID from the route
      this.fetchAccountDetails(accountID);
    });
  }

  fetchAccountDetails(accountID: number): void {
    this.accService.getAccountByAccountId(accountID).subscribe(account => {
      this.account = account;
    });
  }

}
