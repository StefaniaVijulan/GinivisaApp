import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FructeCapsuniComponent } from './fructe-capsuni.component';

describe('FructeCapsuniComponent', () => {
  let component: FructeCapsuniComponent;
  let fixture: ComponentFixture<FructeCapsuniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FructeCapsuniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FructeCapsuniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
