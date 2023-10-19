import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormToBeFilledComponent } from './form-to-be-filled.component';

describe('FormToBeFilledComponent', () => {
  let component: FormToBeFilledComponent;
  let fixture: ComponentFixture<FormToBeFilledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormToBeFilledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormToBeFilledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
