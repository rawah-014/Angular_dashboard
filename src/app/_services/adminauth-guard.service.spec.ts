import { TestBed } from '@angular/core/testing';

import { AdminauthGuard } from './adminauth-guard.service';

describe('AdminauthGuardService', () => {
  let service: AdminauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminauthGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
