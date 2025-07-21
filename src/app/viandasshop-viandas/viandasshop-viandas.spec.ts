import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViandasshopViandas } from './viandasshop-viandas';

describe('ViandasshopViandas', () => {
  let component: ViandasshopViandas;
  let fixture: ComponentFixture<ViandasshopViandas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViandasshopViandas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViandasshopViandas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
