import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatieComponent } from './donatie.component';

describe('DonatieComponent', () => {
  let component: DonatieComponent;
  let fixture: ComponentFixture<DonatieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonatieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
