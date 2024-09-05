import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionHouseComponent } from './selection-house.component';

describe('SelectionHouseComponent', () => {
  let component: SelectionHouseComponent;
  let fixture: ComponentFixture<SelectionHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectionHouseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectionHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
