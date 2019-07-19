import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage.component';
import { HomepageOverviewComponent } from './overview/homepage-overview.component';
import { HomepageDetailComponent } from './detail/homepage-detail.component';

const homepageRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: [
      {
        path: '',
        component: HomepageOverviewComponent
      },
      {
        path: ':movieId',
        children: [
          {
            path: '',
            redirectTo: 'detail',
            pathMatch: 'full'
          },
          {
            path: 'detail',
            component: HomepageDetailComponent
          },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(homepageRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
