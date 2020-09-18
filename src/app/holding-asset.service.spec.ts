import { TestBed } from '@angular/core/testing';

import { HoldingAssetService } from './holding-asset.service';

describe('HoldingAssetService', () => {
  let service: HoldingAssetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoldingAssetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
