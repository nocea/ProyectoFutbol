import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaClasiComponent } from './tabla-clasi.component';

describe('TablaClasiComponent', () => {
  let component: TablaClasiComponent;
  let fixture: ComponentFixture<TablaClasiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaClasiComponent]
    });
    fixture = TestBed.createComponent(TablaClasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
