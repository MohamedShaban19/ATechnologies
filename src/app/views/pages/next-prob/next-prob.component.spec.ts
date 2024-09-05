import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextProbComponent } from './next-prob.component';

describe('NextProbComponent', () => {
  let component: NextProbComponent;
  let fixture: ComponentFixture<NextProbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextProbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextProbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
