import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperGalleryRestaurantComponent } from './swiper-gallery-restaurant.component';

describe('SwiperGalleryRestaurantComponent', () => {
  let component: SwiperGalleryRestaurantComponent;
  let fixture: ComponentFixture<SwiperGalleryRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiperGalleryRestaurantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiperGalleryRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
