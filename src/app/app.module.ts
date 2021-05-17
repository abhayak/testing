import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { DemoTestComponent } from './admin/demo-test/demo-test.component';
import { IndexComponent } from './container/index/index.component';
import { LoginComponent } from './login/login.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ErrorInterceptor, JwtInterceptor } from './_helpers';
import { UserIdleModule } from 'angular-user-idle';
import { SessionPopupComponent } from './session-popup/session-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    SessionPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    UserIdleModule.forRoot({idle: 60, timeout: 30, ping: 15})

  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy

  },
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  // provider used to create fake backend
  // fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
