import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagersDashboardFooterComponent } from './villagers-dashboard-footer.component';

describe('VillagersDashboardFooterComponent', () => {
  let component: VillagersDashboardFooterComponent;
  let fixture: ComponentFixture<VillagersDashboardFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillagersDashboardFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillagersDashboardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
