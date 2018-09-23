import { TestBed, inject } from '@angular/core/testing';

import { TruckService } from './truck-api.service';

describe('TruckApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TruckService]
    });
  });

  it('should be created', inject([TruckService], (service: TruckService) => {
    expect(service).toBeTruthy();
  }));
});
