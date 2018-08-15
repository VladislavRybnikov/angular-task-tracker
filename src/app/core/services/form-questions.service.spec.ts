import { TestBed, inject } from '@angular/core/testing';

import { FormQuestionsService } from './form-questions.service';

describe('FormQuestionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormQuestionsService]
    });
  });

  it('should be created', inject([FormQuestionsService], (service: FormQuestionsService) => {
    expect(service).toBeTruthy();
  }));
});
