import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartModalListComponent } from './cart-modal-list.component';

describe('CartModalListComponent', () => {
  let component: CartModalListComponent;
  let fixture: ComponentFixture<CartModalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartModalListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartModalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
