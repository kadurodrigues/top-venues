import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenuesRoutingModule } from './venues.routing.module';

import { VenuesComponent } from './venues.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { VenueComponent } from './venue/venue.component';
import { CategoriesComponent } from './venue/categories/categories.component';

import { VenuesService } from './venues.service';
import { VenueStore } from './venues.store';
import { VenueTipsComponent } from './venue-tips/venue-tips.component';

@NgModule({
  declarations: [
    VenuesComponent,
    ListComponent,
    DetailsComponent,
    VenueComponent,
    CategoriesComponent,
    VenueTipsComponent
  ],
  imports: [
    CommonModule,
    VenuesRoutingModule
  ],
  exports: [
    VenuesComponent
  ],
  providers: [
    VenuesService,
    VenueStore
  ]
})
export class VenuesModule { }
