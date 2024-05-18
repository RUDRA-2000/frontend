import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './SignUp/sign-up.component';
import { AccountSpecificDetailsComponent } from './Accounts/account-specific-details.component';
import { AccountsCreateNewComponent } from './Accounts/accounts-create-new.component';
import { AccountsDeleteComponent } from './Accounts/accounts-delete.component';
import { AccountsListComponent } from './Accounts/accounts-list.component';
import { EnquiryFormComponent } from './EnquiryForm/enquiry-form.component';
import { LoginComponent } from './Login/login.component';

const routes: Routes = [
  {path:'signUp', component: SignUpComponent},
  {path:'login', component: LoginComponent},
  {path:'enquiryForm', component: EnquiryFormComponent},
  {path: 'list', component: AccountsListComponent},
  {path: 'create', component: AccountsCreateNewComponent},
  {path: 'delete/:id', component: AccountsDeleteComponent},
  { path: 'account-specific-details/:id', component: AccountSpecificDetailsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
