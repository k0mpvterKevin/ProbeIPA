import { Component, OnDestroy } from '@angular/core';
import {AccountService} from "../../services/account.service";
import {Observable, Subscription} from "rxjs";
import {Account} from "../../model/Account";
import next from "ajv/lib/vocabularies/next";

@Component({
  selector: 'app-account-choice',
  templateUrl: './account-choice.component.html',
  styleUrls: ['./account-choice.component.css']
})
export class AccountChoiceComponent{

  constructor(private accountService : AccountService) {
  }
  accounts$ : Observable<Account[]> = this.accountService.loadAccounts();


  protected readonly next = next;
}
