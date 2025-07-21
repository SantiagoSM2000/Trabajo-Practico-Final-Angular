import { TestBed } from '@angular/core/testing';

import { ViandaData } from './vianda-data';

describe('ViandaData', () => {
  let service: ViandaData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViandaData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
