import { TestBed } from '@angular/core/testing';

import { VillagersDashboardService } from './villagers-dashboard.service';

describe('VillagersDashboardService', () => {
  let service: VillagersDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VillagersDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
