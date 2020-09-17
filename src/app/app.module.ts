import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketdataComponent } from './marketdata/marketdata.component';
import {FormsModule} from '@angular/forms';
import { TradeHistoryComponent } from './trade-history/trade-history.component';

@NgModule({
  declarations: [
    AppComponent,
    MarketdataComponent,
    TradeHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
