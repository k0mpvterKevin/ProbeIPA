import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {AccountService} from "../services/account.service";
import {Account} from "../model/Account";

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent{

    constructor(private accountService:AccountService) {

    }

    accounts$ : Observable<Account[]> = this.accountService.loadAccounts();


}
