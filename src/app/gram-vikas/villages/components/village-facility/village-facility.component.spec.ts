import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageFacilityComponent } from './village-facility.component';

describe('VillageFacilityComponent', () => {
  let component: VillageFacilityComponent;
  let fixture: ComponentFixture<VillageFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillageFacilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillageFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
