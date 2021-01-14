import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './components/signin/signin.component';
import {AuthRoutingModule} from './auth-routing.module';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import {UserPartsModule} from '../shared/user-parts/user-parts.module';
import { LandingpageComponent } from './components/landingpage/landingpage.component';



@NgModule({
  declarations: [SigninComponent, SignupComponent, LandingpageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    UserPartsModule
  ]
})
export class AuthModule { }
