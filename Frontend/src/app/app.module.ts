import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { AppRoutingModule } from './app-routing.module';
import {AccountService} from "./services/account.service";
import {HttpClientModule} from "@angular/common/http";
import { AmountChoiceComponent } from './withdraw/amount-choice/amount-choice.component';
import { WithdrawalOverviewComponent } from './withdraw/withdrawal-overview/withdrawal-overview.component';
import {WithdrawComponent} from "./withdraw/withdraw.component";
import {AccountChoiceComponent} from "./withdraw/account-choice/account-choice.component";

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    WithdrawComponent,
    AccountChoiceComponent,
    AmountChoiceComponent,
    WithdrawalOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      HttpClientModule,

  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
