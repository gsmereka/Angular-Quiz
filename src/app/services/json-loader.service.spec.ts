import { TestBed } from '@angular/core/testing';

import { JsonLoaderService } from './json-loader.service';

describe('JsonLoaderService', () => {
  let service: JsonLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
