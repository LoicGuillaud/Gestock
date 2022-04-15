import { TestBed } from '@angular/core/testing';

import { LigneStockService } from './ligne-stock.service';

describe('LigneStockService', () => {
  let service: LigneStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LigneStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
