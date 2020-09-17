import { TestBed } from '@angular/core/testing';

import { MarketDataService } from './marketdata.service';

describe('MarketdataService', () => {
  let service: MarketDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
