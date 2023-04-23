import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PachetTuristicComponent } from './pachet-turistic.component';

describe('PachetTuristicComponent', () => {
  let component: PachetTuristicComponent;
  let fixture: ComponentFixture<PachetTuristicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PachetTuristicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PachetTuristicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
