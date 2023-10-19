import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVillagersComponent } from './add-villagers.component';

describe('AddVillagersComponent', () => {
  let component: AddVillagersComponent;
  let fixture: ComponentFixture<AddVillagersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVillagersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVillagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
