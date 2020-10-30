import { TestBed } from '@angular/core/testing';

import { NebuBlueSoulService } from './nebu-blue-soul.service';

describe('NebuBlueSoulService', () => {
  let service: NebuBlueSoulService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NebuBlueSoulService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
