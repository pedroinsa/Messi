import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubesComponent } from './clubes.component';

describe('ClubesComponent', () => {
  let component: ClubesComponent;
  let fixture: ComponentFixture<ClubesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClubesComponent]
    });
    fixture = TestBed.createComponent(ClubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
