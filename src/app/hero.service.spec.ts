import { TestBed } from '@angular/core/testing';

import { MissionService } from './hero.service';

describe('MissionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MissionService = TestBed.get(MissionService);
    expect(service).toBeTruthy();
  });
});
