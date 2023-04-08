import { TestBed } from '@angular/core/testing';

import { MyLibrarySudhaAService } from './my-library-sudha-a.service';

describe('MyLibrarySudhaAService', () => {
  let service: MyLibrarySudhaAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyLibrarySudhaAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
