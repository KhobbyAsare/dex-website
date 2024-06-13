import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPreviewModalComponent } from './video-preview-modal.component';

describe('VideoPreviewModalComponent', () => {
  let component: VideoPreviewModalComponent;
  let fixture: ComponentFixture<VideoPreviewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoPreviewModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideoPreviewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
