import { TestBed, inject } from '@angular/core/testing';

import { BookService } from './book-api.service';

describe('BookApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookService]
    });
  });

  it('should be created', inject([BookService], (service: BookService) => {
    expect(service).toBeTruthy();
  }));
});
