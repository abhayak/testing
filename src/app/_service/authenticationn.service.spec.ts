import { TestBed } from '@angular/core/testing';

import { AuthenticationnService } from './authenticationn.service';

describe('AuthenticationnService', () => {
  let service: AuthenticationnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
