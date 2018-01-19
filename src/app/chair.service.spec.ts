import { TestBed, inject } from '@angular/core/testing';

import { ChairService } from './chair.service';

describe('ChairService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChairService]
    });
  });

  it('should be created', inject([ChairService], (service: ChairService) => {
    expect(service).toBeTruthy();
  }));
});
