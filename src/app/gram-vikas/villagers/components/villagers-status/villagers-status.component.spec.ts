import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagersStatusComponent } from './villagers-status.component';

describe('VillagersStatusComponent', () => {
  let component: VillagersStatusComponent;
  let fixture: ComponentFixture<VillagersStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillagersStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillagersStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
