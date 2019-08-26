import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageModule } from './pages/home/homepage.module';

export function getHomePageModule() { return HomepageModule; }

const homepageRoutes: Routes = [
  {
    path: '',
    loadChildren: () => HomepageModule
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(homepageRoutes) ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
