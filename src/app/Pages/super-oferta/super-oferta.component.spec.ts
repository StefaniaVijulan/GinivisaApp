import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperOfertaComponent } from './super-oferta.component';

describe('SuperOfertaComponent', () => {
  let component: SuperOfertaComponent;
  let fixture: ComponentFixture<SuperOfertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperOfertaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
