import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
