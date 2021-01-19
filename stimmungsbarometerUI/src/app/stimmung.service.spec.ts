import { TestBed } from '@angular/core/testing';

import { StimmungService } from './stimmung.service';

describe('StimmungService', () => {
  let service: StimmungService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StimmungService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
