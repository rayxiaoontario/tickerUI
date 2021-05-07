import { TestBed } from '@angular/core/testing';

import { TickerDetailServiceService } from './ticker-detail-service.service';

describe('TickerDetailServiceService', () => {
  let service: TickerDetailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TickerDetailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
