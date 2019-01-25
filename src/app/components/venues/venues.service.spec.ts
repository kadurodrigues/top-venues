import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { VenuesService } from './venues.service';

describe('VenuesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [HttpClient, HttpHandler]
  }));

  it('should be created', () => {
    const service: VenuesService = TestBed.get(VenuesService);
    expect(service).toBeTruthy();
  });
});
