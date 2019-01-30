import { Component, OnInit } from '@angular/core';
import { VenueStore } from '../venues.store';
import { VenuesService } from '../venues.service';

import { LOCAL_STORAGE_KEYS } from '../../../../assets/constants';

@Component({
  selector: 'tv-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public venue: any = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.venueObject)) || null;
  public prices: Array<string>;
  public maxPriceRating = 4;

  constructor(
    private venueStore: VenueStore,
    private venueService: VenuesService
  ) { }

  ngOnInit() {
    if (!this.venue) {
      this.venueStore.getVenueId().subscribe(venueId => this.getVenueDetails(venueId));
    }
    this.setPriceRating();
  }

  public getVenueDetails(venueId: string) {
    this.venueService.getVenueDetails(venueId).subscribe(result => {
      this.venue = result.response.venue;
      this.setPriceRating();
      this.storeVenue(this.venue);
    })
  }

  public setPriceRating() {
    if (this.venue) {
      if (this.venue.price) {
        const { tier, currency } = this.venue.price;
        this.prices = [
          ...Array(tier).fill({ currency, active: true }),
          ...Array(this.maxPriceRating - tier).fill({ currency, active: false })
        ];
      }
    }
  }

  public storeVenue(venue: any) {
    localStorage.setItem(LOCAL_STORAGE_KEYS.venueObject, JSON.stringify(venue));
  }
}
