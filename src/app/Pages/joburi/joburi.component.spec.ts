import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoburiComponent } from './joburi.component';

describe('JoburiComponent', () => {
  let component: JoburiComponent;
  let fixture: ComponentFixture<JoburiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoburiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoburiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
