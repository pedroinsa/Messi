import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QatarCardComponent } from './qatar-card.component';

describe('QatarCardComponent', () => {
  let component: QatarCardComponent;
  let fixture: ComponentFixture<QatarCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QatarCardComponent]
    });
    fixture = TestBed.createComponent(QatarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
