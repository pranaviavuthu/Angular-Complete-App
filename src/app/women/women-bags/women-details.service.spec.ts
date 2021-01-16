import { TestBed } from '@angular/core/testing';

import { WomenDetailsService } from './women-details.service';

describe('WomenDetailsService', () => {
  let service: WomenDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WomenDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
