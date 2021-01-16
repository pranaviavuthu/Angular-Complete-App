import { TestBed } from '@angular/core/testing';

import { WomenBagsService } from './women-bags.service';

describe('WomenBagsService', () => {
  let service: WomenBagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WomenBagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
