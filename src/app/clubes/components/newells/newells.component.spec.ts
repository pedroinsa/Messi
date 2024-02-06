import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewellsComponent } from './newells.component';

describe('NewellsComponent', () => {
  let component: NewellsComponent;
  let fixture: ComponentFixture<NewellsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewellsComponent]
    });
    fixture = TestBed.createComponent(NewellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
