import { TestBed } from '@angular/core/testing';

import { SighupService } from './sighup.service';

describe('SighupService', () => {
  let service: SighupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SighupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
