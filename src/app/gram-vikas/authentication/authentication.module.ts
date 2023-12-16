import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginOtpComponent } from './components/login-otp/login-otp.component';
import { NewPasswordComponent } from './components/new-password/new-password.component';
import { AppLanguageComponent } from './components/app-language/app-language.component';


@NgModule({
  declarations: [
    SplashScreenComponent,
    LandingComponent,
    LoginComponent,
    ForgotPasswordComponent,
    LoginOtpComponent,
    NewPasswordComponent,
    AppLanguageComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
