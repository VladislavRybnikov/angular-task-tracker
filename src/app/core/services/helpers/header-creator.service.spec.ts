import { TestBed, inject } from '@angular/core/testing';

import { HeaderCreatorService } from './header-creator.service';

describe('HeaderCreatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeaderCreatorService]
    });
  });

  it('should be created', inject([HeaderCreatorService], (service: HeaderCreatorService) => {
    expect(service).toBeTruthy();
  }));
});
