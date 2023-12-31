import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVillageComponent } from './add-village.component';

describe('AddVillageComponent', () => {
  let component: AddVillageComponent;
  let fixture: ComponentFixture<AddVillageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVillageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
