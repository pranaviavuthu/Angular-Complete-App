import { TestBed } from '@angular/core/testing';

import { WomenShoesService } from './women-shoes.service';

describe('WomenShoesService', () => {
  let service: WomenShoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WomenShoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
