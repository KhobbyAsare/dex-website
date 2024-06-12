import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentUserUploadsComponent } from '../../pages/current-user-uploads/current-user-uploads.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: 'profile',
    component: UserProfileComponent,
  },
  {
    path: 'uploads',
    component: CurrentUserUploadsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), RouterModule],
  exports: [],
})
export class CurrentUser {}
