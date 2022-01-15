import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutSummaryItemComponent } from './checkout-summary-item.component';

describe('CheckoutSummaryItemComponent', () => {
  let component: CheckoutSummaryItemComponent;
  let fixture: ComponentFixture<CheckoutSummaryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutSummaryItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutSummaryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
