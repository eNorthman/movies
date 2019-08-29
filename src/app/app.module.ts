import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

// Generic reuseable components like the header/menu component.
import { CardService } from './services/card.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    CardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
