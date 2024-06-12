import { Routes } from '@angular/router';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AuthComponent } from './pages/auth/auth.component';
import { VideosGalleryComponent } from './pages/videos-gallery/videos-gallery.component';
import { authGuardGuard } from './Guard/auth-guard.guard';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { CurrentUserUploadsComponent } from './pages/current-user-uploads/current-user-uploads.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'videos',
    component: VideosGalleryComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'upload',
    loadChildren: () =>
      import('./modules/upload-page/upload-page.module').then(
        (m) => m.UploadPageModule
      ),
    canActivate: [authGuardGuard],
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user/currentUser.module').then(
        (m) => m.CurrentUser
      ),
  }
];
