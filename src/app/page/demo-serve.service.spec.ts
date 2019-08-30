import { TestBed } from '@angular/core/testing';

import { DemoServeService } from './demo-serve.service';

describe('DemoServeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemoServeService = TestBed.get(DemoServeService);
    expect(service).toBeTruthy();
  });
});
