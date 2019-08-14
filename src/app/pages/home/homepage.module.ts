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
import { CardGridComponent } from 'src/app/components/card-grid/card-grid.component';
import { CardComponent } from 'src/app/components/card/card.component';

@NgModule({
  declarations: [
    HomepageComponent,
    SearchComponent,
    HomepageOverviewComponent,
    HomepageDetailComponent,
    CardGridComponent,
    CardComponent,
  ],
  imports: [UsersRoutingModule, FormsModule, CommonModule, HttpClientModule   ],
  providers: [MovieService],
})
export class HomepageModule { }
