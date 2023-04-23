import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCOOComponent } from './job-coo.component';

describe('JobCOOComponent', () => {
  let component: JobCOOComponent;
  let fixture: ComponentFixture<JobCOOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobCOOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobCOOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
