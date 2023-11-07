import {Customer} from "./Customer";

export interface Account {
  id: number;
  iban: string;
  balance: number;
  overdraft: number;
  customer: Customer;
}
