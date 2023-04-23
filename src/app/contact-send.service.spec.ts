import { TestBed } from '@angular/core/testing';

import { ContactSendService } from './contact-send.service';

describe('ContactSendService', () => {
  let service: ContactSendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactSendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
