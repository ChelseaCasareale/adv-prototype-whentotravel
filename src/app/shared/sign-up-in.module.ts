import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from './shared.module';

import { BadEmailDirective } from './bad-email.directive';

import { SignInComponent } from '../sign-in/sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';


@NgModule({
  declarations: [
    BadEmailDirective,
    SignInComponent,
    SignUpComponent
   ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [
    BadEmailDirective,
    SignInComponent,
    SignUpComponent
  ]
})
export class SignUpOrInModule { }
