import { Component, OnInit } from '@angular/core';
import { ProfilePageNavigationBarComponent } from '../user-profile/components/profile-page-navigation-bar/profile-page-navigation-bar.component';
import { VideoCardComponent } from '../videos-gallery/components/video-card/video-card.component';
import { videoList } from '../videos-gallery/card-videos';
import { CommonModule } from '@angular/common';
import { CardsComponent } from "../gallery/components/cards/cards.component";
import { MyGalleryComponent } from "./components/my-gallery/my-gallery.component";

@Component({
    selector: 'app-current-user-uploads',
    standalone: true,
    templateUrl: './current-user-uploads.component.html',
    styleUrl: './current-user-uploads.component.scss',
    imports: [
        ProfilePageNavigationBarComponent,
        VideoCardComponent,
        CommonModule,
        CardsComponent,
        MyGalleryComponent
    ]
})
export class CurrentUserUploadsComponent implements OnInit {
  cardVideo: {
    description: string;
    thumbnail: string;
    src: string;
    title: string;
    views: number;
    uploaderIcon: string;
    uploaderName: string;
  }[] = [];

  currentView:string = 'videos';

  ngOnInit() {
    this.cardVideo = videoList;
  }
}
