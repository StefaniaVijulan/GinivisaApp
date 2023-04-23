import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperGalleryFructeComponent } from './swiper-gallery-fructe.component';

describe('SwiperGalleryFructeComponent', () => {
  let component: SwiperGalleryFructeComponent;
  let fixture: ComponentFixture<SwiperGalleryFructeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiperGalleryFructeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperGalleryFructeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
