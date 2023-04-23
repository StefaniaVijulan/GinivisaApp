import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobContabilComponent } from './job-contabil.component';

describe('JobContabilComponent', () => {
  let component: JobContabilComponent;
  let fixture: ComponentFixture<JobContabilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobContabilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobContabilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
