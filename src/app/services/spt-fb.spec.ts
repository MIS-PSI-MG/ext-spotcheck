import { TestBed } from '@angular/core/testing';

import { SptFb } from './spt-fb';

describe('SptFb', () => {
  let service: SptFb;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SptFb);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
