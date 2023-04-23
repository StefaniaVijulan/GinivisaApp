import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazinFructeComponent } from './magazin-fructe.component';

describe('FructeComponent', () => {
  let component: MagazinFructeComponent;
  let fixture: ComponentFixture<MagazinFructeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagazinFructeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazinFructeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
