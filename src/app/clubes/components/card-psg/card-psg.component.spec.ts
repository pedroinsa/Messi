import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPsgComponent } from './card-psg.component';

describe('CardPsgComponent', () => {
  let component: CardPsgComponent;
  let fixture: ComponentFixture<CardPsgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPsgComponent]
    });
    fixture = TestBed.createComponent(CardPsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
