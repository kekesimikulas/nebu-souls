import { TestBed } from '@angular/core/testing';

import { NebuRedSoulService } from './nebu-red-soul.service';

describe('NebuRedSoulService', () => {
  let service: NebuRedSoulService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NebuRedSoulService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
