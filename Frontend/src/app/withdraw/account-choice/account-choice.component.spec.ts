import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChoiceComponent } from './account-choice.component';

// @ts-ignore
describe('AccountChoiceComponent', () => {
  let component: AccountChoiceComponent;
  let fixture: ComponentFixture<AccountChoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountChoiceComponent]
    });
    fixture = TestBed.createComponent(AccountChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
