import { TestBed } from '@angular/core/testing';

import { HousePlan } from './house-plan';

describe('HousePlan', () => {
  let service: HousePlan;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HousePlan);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
