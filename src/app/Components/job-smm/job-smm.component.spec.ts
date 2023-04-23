import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSMMComponent } from './job-smm.component';

describe('JobSMMComponent', () => {
  let component: JobSMMComponent;
  let fixture: ComponentFixture<JobSMMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobSMMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSMMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
