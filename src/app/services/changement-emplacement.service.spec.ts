import { TestBed } from '@angular/core/testing';

import { ChangementEmplacementService } from './changement-emplacement.service';

describe('ChangementEmplacementService', () => {
  let service: ChangementEmplacementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangementEmplacementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
