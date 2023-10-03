import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageProfileComponent } from './village-profile.component';

describe('VillageProfileComponent', () => {
  let component: VillageProfileComponent;
  let fixture: ComponentFixture<VillageProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillageProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillageProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
