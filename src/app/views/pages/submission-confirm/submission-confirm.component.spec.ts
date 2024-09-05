import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionConfirmComponent } from './submission-confirm.component';

describe('SubmissionConfirmComponent', () => {
  let component: SubmissionConfirmComponent;
  let fixture: ComponentFixture<SubmissionConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmissionConfirmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmissionConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
