import { TestBed } from '@angular/core/testing';

import { ApiRoomsService } from './api-rooms.service';

describe('ApiRoomsService', () => {
  let service: ApiRoomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRoomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
