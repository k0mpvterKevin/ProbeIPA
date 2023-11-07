import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Account} from "../model/Account";
import {AccountService} from "../services/account.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent{

  accounts$ : Observable<Account[]> = this.accountService.loadAccounts();

  constructor(private accountService : AccountService) {
  }

}
