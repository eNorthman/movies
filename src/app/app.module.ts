import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

// Generic reuseable components like the header/menu component.
import { CardService } from './services/card.service';
import { StorageService } from './services/storage.service';
import { Routes, RouterModule } from '@angular/router';
import { HomepageModule } from './pages/home/homepage.module';

export function getHomePageModule() { return HomepageModule; }

const homepageRoutes: Routes = [
  {
    path: 'home',
    loadChildren: './pages/home/homepage.module#HomepageModule'
  },
];


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(homepageRoutes),
  ],
  providers: [
    CardService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
