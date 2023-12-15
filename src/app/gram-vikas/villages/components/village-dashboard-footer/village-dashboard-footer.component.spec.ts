import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageDashboardFooterComponent } from './village-dashboard-footer.component';

describe('VillageDashboardFooterComponent', () => {
  let component: VillageDashboardFooterComponent;
  let fixture: ComponentFixture<VillageDashboardFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillageDashboardFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillageDashboardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
