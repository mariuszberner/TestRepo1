import { TestBed } from '@angular/core/testing';

import { MojServiceService } from './moj-service.service';

describe('MojServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MojServiceService = TestBed.get(MojServiceService);
    expect(service).toBeTruthy();
  });
});
