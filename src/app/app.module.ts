import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { appRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketdataComponent } from './marketdata/marketdata.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TradeHistoryComponent } from './trade-history/trade-history.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AlertComponent } from './alert/alert.component';
import { RouterModule } from '@angular/router';
import { HistoryComponent } from './history/history.component';


@NgModule({
  declarations: [
    AppComponent,
    MarketdataComponent,
    TradeHistoryComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AlertComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
