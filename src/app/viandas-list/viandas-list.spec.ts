import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViandasList } from './viandas-list';

describe('ViandasList', () => {
  let component: ViandasList;
  let fixture: ComponentFixture<ViandasList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViandasList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViandasList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
