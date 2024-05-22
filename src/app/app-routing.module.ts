import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransferFundsComponent } from './transaction/transfer-funds.component';
import { AccountDetailsComponent } from './transaction/account-details.component';

const routes: Routes = [
  {path:'transferFunds', component: TransferFundsComponent},
  {path:'transactions', component: AccountDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
