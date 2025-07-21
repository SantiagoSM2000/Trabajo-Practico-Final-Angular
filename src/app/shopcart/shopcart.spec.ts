import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shopcart } from './shopcart';

describe('Shopcart', () => {
  let component: Shopcart;
  let fixture: ComponentFixture<Shopcart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Shopcart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shopcart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
