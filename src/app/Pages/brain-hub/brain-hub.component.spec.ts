import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrainHubComponent } from './brain-hub.component';

describe('BrainHubComponent', () => {
  let component: BrainHubComponent;
  let fixture: ComponentFixture<BrainHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrainHubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrainHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
