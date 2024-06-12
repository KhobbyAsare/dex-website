import { Component, inject } from '@angular/core';
import { PostCardsComponent } from './components/post-cards/post-cards.component';
import { BrandNameSignalService } from '../../services/brandNameSignal/brand-name-signal.service';
import { CurrentUserProfileImageService } from '../../services/CurrentUser-ProfileImage/current-user-profile-image.service';
import { RouterModule } from '@angular/router';
import { AsideNavComponent } from './components/aside-nav/aside-nav.component';

@Component({
  selector: 'app-community-page',
  standalone: true,
  templateUrl: './community-page.component.html',
  styleUrl: './community-page.component.scss',
  imports: [PostCardsComponent, RouterModule, AsideNavComponent],
})
export class CommunityPageComponent {
  public currentUserIcon = inject(
    CurrentUserProfileImageService
  ).userProfileImage();

  count: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  openSearchBar: boolean = false;

  toggleSearchBar(status: boolean) {
    this.openSearchBar = status;
  }
}
