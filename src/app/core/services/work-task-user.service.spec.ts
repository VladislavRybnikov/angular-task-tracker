import { TestBed, inject } from '@angular/core/testing';

import { WorkTaskUserService } from './work-task-user.service';

describe('WorkTaskUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkTaskUserService]
    });
  });

  it('should be created', inject([WorkTaskUserService], (service: WorkTaskUserService) => {
    expect(service).toBeTruthy();
  }));
});
