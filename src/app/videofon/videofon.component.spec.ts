import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideofonComponent } from './videofon.component';

describe('VideofonComponent', () => {
  let component: VideofonComponent;
  let fixture: ComponentFixture<VideofonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideofonComponent]
    });
    fixture = TestBed.createComponent(VideofonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
