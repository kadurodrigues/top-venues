import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VenuesComponent } from './venues.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { VenueComponent } from './venue/venue.component';

import { VenuesService } from './venues.service';
import { CategoriesComponent } from './venue/categories/categories.component';

@NgModule({
  declarations: [
    VenuesComponent,
    ListComponent,
    DetailsComponent,
    VenueComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [VenuesService]
})
export class VenuesModule { }
