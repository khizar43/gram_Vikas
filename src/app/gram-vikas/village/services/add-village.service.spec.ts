import { TestBed } from '@angular/core/testing';

import { AddVillageService } from './add-village.service';

describe('AddVillageService', () => {
  let service: AddVillageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddVillageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
