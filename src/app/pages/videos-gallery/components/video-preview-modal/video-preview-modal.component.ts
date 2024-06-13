import { CommonModule } from '@angular/common';
import { Component, OnInit, input, output } from '@angular/core';
import { VideoCardComponent } from '../video-card/video-card.component';
import { videoList } from '../../card-videos';
import { VideoInterface } from '../video-card/video-interface';

@Component({
  selector: 'app-video-preview-modal',
  standalone: true,
  templateUrl: './video-preview-modal.component.html',
  styleUrl: './video-preview-modal.component.scss',
  imports: [CommonModule, VideoCardComponent],
})
export class VideoPreviewModalComponent implements OnInit {
  isPreview = output<boolean>();
  previewingVideo = input<string>();
  relatedVideoSrc: string = '';
  cardVideo: VideoInterface[] = [];

  ngOnInit() {
    this.cardVideo = videoList;
  }

  handleClosePreviewModal() {
    this.isPreview.emit(false);
  }

  getPreviewVideo(src: string) {
    console.log(src);
    this.relatedVideoSrc = src;
  }
}
