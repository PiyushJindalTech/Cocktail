import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './cocktails/dashboard/dashboard.component';
import {  HttpClientModule } from '@angular/common/http';
import { LimitToPipe } from './pipes/limit-to.pipe';
import { HeaderComponent } from './cocktails/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LimitToPipe,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
