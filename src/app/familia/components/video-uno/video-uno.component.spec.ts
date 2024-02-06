import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoUnoComponent } from './video-uno.component';

describe('VideoUnoComponent', () => {
  let component: VideoUnoComponent;
  let fixture: ComponentFixture<VideoUnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoUnoComponent]
    });
    fixture = TestBed.createComponent(VideoUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
