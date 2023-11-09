import { Component } from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Account} from "../model/Account";
import {AccountService} from "../services/account.service";
import {Customer} from "../model/Customer";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent{

  customers : Customer[] = [];
  accounts : Account [] = [];
  customer: number = 0;

  constructor(private accountService : AccountService) {
  }



  accounts$ : Observable<Account[]> = this.accountService.loadAccounts();


}
