import { TestBed } from '@angular/core/testing';

import { VillageProfileService } from './village-profile.service';

describe('VillageProfileService', () => {
  let service: VillageProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VillageProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
