import { TestBed } from '@angular/core/testing';

import { LoginOtpService } from './login-otp.service';

describe('LoginOtpService', () => {
  let service: LoginOtpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginOtpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
