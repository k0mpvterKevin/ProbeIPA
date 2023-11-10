import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountChoiceComponent } from './amount-choice.component';

describe('AmountChoiceComponent', () => {
  let component: AmountChoiceComponent;
  let fixture: ComponentFixture<AmountChoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmountChoiceComponent]
    });
    fixture = TestBed.createComponent(AmountChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
