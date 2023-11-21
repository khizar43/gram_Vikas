import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { AppLanguageComponent } from './components/app-language/app-language.component';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginOtpComponent } from './components/login-otp/login-otp.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NewPasswordComponent } from './components/new-password/new-password.component';
import { DashboardComponent } from '../analytics/components/dashboard/dashboard.component';
import { HomeComponent } from '../dashboard/components/home/home.component';

const routes: Routes = [
  { path: '', component: SplashScreenComponent },
  { path: 'app-language', component: AppLanguageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'Landing', component: LandingComponent },
  { path: 'otp', component: LoginOtpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'newpassword', component: NewPasswordComponent },
  { path: 'home', component: HomeComponent },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
