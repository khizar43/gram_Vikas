import { TestBed } from '@angular/core/testing';

import { VillageDashboardService } from './village-dashboard.service';

describe('VillageDashboardService', () => {
  let service: VillageDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VillageDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
