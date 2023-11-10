import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawalOverviewComponent } from './withdrawal-overview.component';

describe('WithdrawalOverviewComponent', () => {
  let component: WithdrawalOverviewComponent;
  let fixture: ComponentFixture<WithdrawalOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WithdrawalOverviewComponent]
    });
    fixture = TestBed.createComponent(WithdrawalOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
