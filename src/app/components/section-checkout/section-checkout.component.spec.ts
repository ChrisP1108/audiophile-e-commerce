import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCheckoutComponent } from './section-checkout.component';

describe('SectionCheckoutComponent', () => {
  let component: SectionCheckoutComponent;
  let fixture: ComponentFixture<SectionCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionCheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
