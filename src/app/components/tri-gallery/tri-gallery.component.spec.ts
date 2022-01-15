import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriGalleryComponent } from './tri-gallery.component';

describe('TriGalleryComponent', () => {
  let component: TriGalleryComponent;
  let fixture: ComponentFixture<TriGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
