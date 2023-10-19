import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagersDashboardComponent } from './villagers-dashboard.component';

describe('VillagersDashboardComponent', () => {
  let component: VillagersDashboardComponent;
  let fixture: ComponentFixture<VillagersDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillagersDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillagersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
