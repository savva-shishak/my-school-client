import { TestBed } from '@angular/core/testing';

import { ApiLessonsService } from './api-lessons.service';

describe('ApiLessonsServiceService', () => {
  let service: ApiLessonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiLessonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
