import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurismAtractiiComponent } from './turism-atractii.component';

describe('AtractiiTuristiceComponent', () => {
  let component: TurismAtractiiComponent;
  let fixture: ComponentFixture<TurismAtractiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurismAtractiiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurismAtractiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
