import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FructeZmeuraComponent } from './fructe-zmeura.component';

describe('FructeZmeuraComponent', () => {
  let component: FructeZmeuraComponent;
  let fixture: ComponentFixture<FructeZmeuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FructeZmeuraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FructeZmeuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
