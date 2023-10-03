import { TestBed } from '@angular/core/testing';

import { AgentVillageService } from './agent-village.service';

describe('AgentVillageService', () => {
  let service: AgentVillageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentVillageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
