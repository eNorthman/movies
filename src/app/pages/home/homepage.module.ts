import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage.component';
import { UsersRoutingModule } from './homepage-routing.module';
import { HomepageOverviewComponent } from './overview/homepage-overview.component';
import { HomepageDetailComponent } from './detail/homepage-detail.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomepageComponent,
    HomepageOverviewComponent,
    HomepageDetailComponent,
    // this would be a nice place to add the header component.
  ],
  imports: [UsersRoutingModule, FormsModule, CommonModule, HttpClientModule],
  providers: [],
})
export class HomepageModule { }
