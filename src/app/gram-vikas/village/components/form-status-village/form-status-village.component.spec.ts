import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStatusVillageComponent } from './form-status-village.component';

describe('FormStatusVillageComponent', () => {
  let component: FormStatusVillageComponent;
  let fixture: ComponentFixture<FormStatusVillageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormStatusVillageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormStatusVillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
