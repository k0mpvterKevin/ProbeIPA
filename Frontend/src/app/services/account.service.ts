import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Account} from "../model/Account";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient : HttpClient) {
  }

  public loadAccounts() : Observable<Account[]>{
    return this.httpClient.get<Account[]>('http://localhost:8080/account/all').pipe(
        catchError(this.handleError)
    )
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Ein Fehler ist aufgetreten beim Laden der Accounts'));
  }
}
