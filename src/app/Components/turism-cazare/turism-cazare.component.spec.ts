import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurismCazareComponent } from './turism-cazare.component';

describe('TurismCazareComponent', () => {
  let component: TurismCazareComponent;
  let fixture: ComponentFixture<TurismCazareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurismCazareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurismCazareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
