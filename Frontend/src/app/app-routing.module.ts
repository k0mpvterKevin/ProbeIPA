import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {OverviewComponent} from "./overview/overview.component";
import {WithdrawComponent} from "./withdraw/withdraw.component";

const routes : Routes = [
  {path: '', redirectTo: '/overview', pathMatch: 'full'},
  {path: 'overview', component: OverviewComponent},
  {path: 'withdraw', component: WithdrawComponent}
]

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
