import { NgModule, ErrorHandler, APP_INITIALIZER } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
// import * as Sentry from "@sentry/angular-ivy";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Router } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  // providers: [{
  //   provide: ErrorHandler,
  //   useValue: Sentry.createErrorHandler({
  //     showDialog: true,
  //   }),
  // }, {
  //   provide: Sentry.TraceService,
  //   deps: [Router],
  // },
  // {
  //   provide: APP_INITIALIZER,
  //   useFactory: () => () => {},
  //   deps: [Sentry.TraceService],
  //   multi: true,
  // },
  // ],
  bootstrap: [AppComponent]
})
export class AppModule {
}




