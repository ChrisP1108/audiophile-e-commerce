import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutSummaryListComponent } from './checkout-summary-list.component';

describe('CheckoutSummaryListComponent', () => {
  let component: CheckoutSummaryListComponent;
  let fixture: ComponentFixture<CheckoutSummaryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutSummaryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutSummaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
