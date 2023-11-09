import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {OverviewComponent} from "./overview/overview.component";

const routes : Routes = [
  {path: '', redirectTo: '/overview', pathMatch: 'full'},
  {path: 'overview', component: OverviewComponent}
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
