import { TestBed } from '@angular/core/testing';

import { SptState } from './spt-state';

describe('SptState', () => {
  let service: SptState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SptState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
