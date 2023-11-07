import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {OverviewComponent} from "./overview/overview.component";

const routes : Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: OverviewComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
