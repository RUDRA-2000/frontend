import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountsService } from './accounts.service';
import { Account } from '../Models/account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts-create-new',
  templateUrl: './accounts-create-new.component.html',
  styleUrls: ['./accounts-create-new.component.css']
})
export class AccountsCreateNewComponent implements OnInit {
  accountForm: FormGroup;
  newAccount: Account = <Account>{};
  successMessage: string = '';
  isFormInvalid: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private accountsService: AccountsService,
    private router: Router
  ) { 
    this.accountForm = this.formBuilder.group({}); // Initialize with an empty form group
  }

  ngOnInit(): void {
    this.accountForm = this.formBuilder.group({
      accountID: ['0'],
      balance: [null, Validators.required],
      hasCheque: [false, Validators.required],
      wd_quota: [''],
      dp_quota: [''],
      isActive: [true],
      customerID: [null, Validators.required],
      type_id: [null, Validators.required],
      branchID: ['BRN000']
    }, { validators: this.balanceValidator });

    this.accountForm.get('type_id')?.valueChanges.subscribe(typeId => {
      this.updateQuotas(typeId);
    });
  }

  updateQuotas(typeId: number): void {
    if (typeId === 1) {
      this.accountForm.get('wd_quota')?.setValue(10);
      this.accountForm.get('dp_quota')?.setValue(5);
    } else if (typeId === 2) {
      this.accountForm.get('wd_quota')?.setValue(99999);
      this.accountForm.get('dp_quota')?.setValue(30);
    } else {
      this.accountForm.get('wd_quota')?.setValue('');
      this.accountForm.get('dp_quota')?.setValue('');
    }
  }

  balanceValidator(control: AbstractControl): { [key: string]: string } | null {
    const typeId = control.get('type_id')?.value;
    const balance = control.get('balance')?.value;
    if (typeId == null || balance == null) {
      return null;
    }
    if (typeId === 1 && balance < 5000) {
      return { balanceError: 'For Savings Account, the initial deposit must be 5,000' };
    } else if (typeId === 2 && balance < 10000) {
      return { balanceError: 'For Current Account, the initial deposit must be 10,000' };
    }
    return null;
  }

  onReset(): void {
    this.accountForm.reset();
  }

  onSubmit(): void {
    if (this.accountForm.valid) {
      this.accountsService.createAccount(this.accountForm.value).subscribe(
        (response: any) => {
          console.log('Account created successfully', this.successMessage);
          this.accountForm.reset();
          this.router.navigate(['/list']);
        },
        error => {
          console.error('Error creating account:', error);
          if (error.status === 400) {
            console.log();
          } else {
            // Handle other errors
          }
        }
      );
    } else {
      this.accountForm.markAllAsTouched();
    }
  }
}
