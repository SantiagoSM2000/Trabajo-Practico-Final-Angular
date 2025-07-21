import { TestBed } from '@angular/core/testing';

import { ViandasCart } from './viandas-cart';

describe('ViandasCart', () => {
  let service: ViandasCart;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViandasCart);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
