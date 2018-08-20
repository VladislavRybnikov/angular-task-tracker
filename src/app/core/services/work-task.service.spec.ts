import { TestBed, inject } from '@angular/core/testing';

import { WorkTaskService } from './work-task.service';

describe('WorkTaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkTaskService]
    });
  });

  it('should be created', inject([WorkTaskService], (service: WorkTaskService) => {
    expect(service).toBeTruthy();
  }));
});
