import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PachetZiuaComponent } from './pachet-ziua.component';

describe('PachetZiuaComponent', () => {
  let component: PachetZiuaComponent;
  let fixture: ComponentFixture<PachetZiuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PachetZiuaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PachetZiuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
