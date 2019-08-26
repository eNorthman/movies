import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/home/homepage.component';
import { HomepageModule } from './pages/home/homepage.module';

export function getHomePageModule() { return HomepageModule; }

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/homepage.module').then(m => m.HomepageModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
