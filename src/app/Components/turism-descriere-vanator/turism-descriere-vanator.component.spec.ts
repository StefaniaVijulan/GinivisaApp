import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurismDescriereVanatorComponent } from './turism-descriere-vanator.component';

describe('TurismDescriereVanatorComponent', () => {
  let component: TurismDescriereVanatorComponent;
  let fixture: ComponentFixture<TurismDescriereVanatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurismDescriereVanatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurismDescriereVanatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
