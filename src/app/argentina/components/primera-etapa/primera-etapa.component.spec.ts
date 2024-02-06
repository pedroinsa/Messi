import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeraEtapaComponent } from './primera-etapa.component';

describe('PrimeraEtapaComponent', () => {
  let component: PrimeraEtapaComponent;
  let fixture: ComponentFixture<PrimeraEtapaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimeraEtapaComponent]
    });
    fixture = TestBed.createComponent(PrimeraEtapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
