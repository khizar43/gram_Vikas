import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import * as Sentry from "@sentry/angular-ivy";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Router } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: true,
      }),
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(trace: Sentry.TraceService) {}
 }



