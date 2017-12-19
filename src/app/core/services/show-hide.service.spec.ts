import { TestBed, inject } from '@angular/core/testing';

import { ShowHideService } from './show-hide.service';

describe('ShowHideService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowHideService]
    });
  });

  it('should be created', inject([ShowHideService], (service: ShowHideService) => {
    expect(service).toBeTruthy();
  }));
});
