import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVillagersComponent } from './update-villagers.component';

describe('UpdateVillagersComponent', () => {
  let component: UpdateVillagersComponent;
  let fixture: ComponentFixture<UpdateVillagersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVillagersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateVillagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
