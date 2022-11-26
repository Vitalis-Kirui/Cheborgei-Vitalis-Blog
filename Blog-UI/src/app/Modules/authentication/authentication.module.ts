import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { AccountComponent } from './Components/account/account.component';
import { UpdateDetailsComponent } from './Components/update-details/update-details.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthenticationComponent,
    RegisterComponent,
    LoginComponent,
    AccountComponent,
    UpdateDetailsComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
