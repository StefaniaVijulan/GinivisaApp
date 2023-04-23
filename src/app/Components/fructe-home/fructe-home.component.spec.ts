import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FructeHomeComponent } from './fructe-home.component';

describe('FructeHomeComponent', () => {
  let component: FructeHomeComponent;
  let fixture: ComponentFixture<FructeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FructeHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FructeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
