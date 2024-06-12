import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommunityPageComponent } from '../../pages/community-page/community-page.component';

const routes: Routes = [
  {
    path: '',
    component: CommunityPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), RouterModule],
  exports: [],
})
export class CommunityPageModule {}
