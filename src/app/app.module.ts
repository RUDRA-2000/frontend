import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './ui/site-header.component';
import { SiteFooterComponent } from './ui/site-footer.component';
import { NotFoundComponent } from './ui/not-found.component';
import { SiteErrorComponent } from './ui/site-error.component';
import { HomeComponent } from './ui/home.component';
import { TransactionComponent } from './Transaction/transaction.component';
import { AccountDetailsComponent } from './Transaction/account-details.component';
import { TransferFundsComponent } from './Transaction/transfer-funds.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './SignUp/sign-up.component';
import { AccountsCreateNewComponent } from './Accounts/accounts-create-new.component';
import { LoginComponent } from './Login/login.component';
import { EnquiryFormComponent } from './EnquiryForm/enquiry-form.component';
import { AccountsDeleteComponent } from './Accounts/accounts-delete.component';
import { AccountSpecificDetailsComponent } from './Accounts/account-specific-details.component';
import { AccountsListComponent } from './Accounts/accounts-list.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    NotFoundComponent,
    SiteErrorComponent,
    HomeComponent,
    TransactionComponent,
    AccountDetailsComponent,
    TransferFundsComponent,
    SignUpComponent,
    LoginComponent,
    EnquiryFormComponent,
    AccountsListComponent,
    AccountsCreateNewComponent, 
    AccountsDeleteComponent, 
    AccountSpecificDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
