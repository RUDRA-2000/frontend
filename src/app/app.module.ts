import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './ui/site-header.component';
import { SiteFooterComponent } from './ui/site-footer.component';
import { NotFoundComponent } from './ui/not-found.component';
import { SiteErrorComponent } from './ui/site-error.component';
import { HomeComponent } from './ui/home.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AccountDetailsComponent } from './transaction/account-details.component';
import { TransferFundsComponent } from './transaction/transfer-funds.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
