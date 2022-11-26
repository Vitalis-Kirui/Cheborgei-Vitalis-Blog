import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './Components/account/account.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { UpdateDetailsComponent } from './Components/update-details/update-details.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'account', component: AccountComponent },
  { path: 'update-details', component: UpdateDetailsComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '', redirectTo:'register', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
