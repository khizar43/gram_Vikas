import { TestBed } from '@angular/core/testing';

import { AddFamilyService } from './add-family.service';

describe('AddFamilyService', () => {
  let service: AddFamilyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddFamilyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
