import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBarcaComponent } from './card-barca.component';

describe('CardBarcaComponent', () => {
  let component: CardBarcaComponent;
  let fixture: ComponentFixture<CardBarcaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardBarcaComponent]
    });
    fixture = TestBed.createComponent(CardBarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
