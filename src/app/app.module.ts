import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { VenuesModule } from './components/venues/venues.module';
import { VenuesService } from './components/venues/venues.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VenuesModule
  ],
  providers: [VenuesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
