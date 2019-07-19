import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage.component';
import { SearchComponent } from 'src/app/components/search/search.component';
import { UsersRoutingModule } from './homepage-routing.module';
import { HomepageOverviewComponent } from './overview/homepage-overview.component';
import { HomepageDetailComponent } from './detail/homepage-detail.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomepageComponent,
    SearchComponent,
    HomepageOverviewComponent,
    HomepageDetailComponent,
  ],
  imports: [UsersRoutingModule, FormsModule, CommonModule, HttpClientModule   ],
  providers: [MovieService],
})
export class HomepageModule { }
