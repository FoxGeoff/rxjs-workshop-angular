import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PullComponent } from './pull/pull.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppData } from './app-data';
import { FailoverCatchComponent } from './failover-catch/failover-catch.component';

@NgModule({
  declarations: [
    AppComponent,
    PullComponent,
    FailoverCatchComponent
  ],
  imports: [
    BrowserModule,
    InMemoryWebApiModule.forRoot(AppData, { delay: 1000 }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
