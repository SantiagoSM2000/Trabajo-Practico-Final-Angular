import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViandasshopAbout } from './viandasshop-about';

describe('ViandasshopAbout', () => {
  let component: ViandasshopAbout;
  let fixture: ComponentFixture<ViandasshopAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViandasshopAbout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViandasshopAbout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
