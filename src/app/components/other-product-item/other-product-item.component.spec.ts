import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherProductItemComponent } from './other-product-item.component';

describe('OtherProductItemComponent', () => {
  let component: OtherProductItemComponent;
  let fixture: ComponentFixture<OtherProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherProductItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
