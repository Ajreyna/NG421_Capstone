import { TestBed } from '@angular/core/testing';

import { CustodiansService } from './custodians.service';

describe('CustodiansService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustodiansService = TestBed.get(CustodiansService);
    expect(service).toBeTruthy();
  });
});
