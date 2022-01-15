import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomHeadlineComponent } from './bottom-headline.component';

describe('BottomHeadlineComponent', () => {
  let component: BottomHeadlineComponent;
  let fixture: ComponentFixture<BottomHeadlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomHeadlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
