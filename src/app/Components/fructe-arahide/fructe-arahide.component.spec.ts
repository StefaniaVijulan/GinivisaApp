import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FructeArahideComponent } from './fructe-arahide.component';

describe('FructeArahideComponent', () => {
  let component: FructeArahideComponent;
  let fixture: ComponentFixture<FructeArahideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FructeArahideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FructeArahideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
