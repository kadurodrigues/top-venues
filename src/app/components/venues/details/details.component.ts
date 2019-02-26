import { Component, OnInit, OnDestroy } from '@angular/core';
import { VenueStore } from '../venues.store';
import { VenuesService } from '../venues.service';

import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'tv-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  public venue$: Observable<[]>;
  public prices: Array<string>;
  public maxPriceRating: number = 4;
  private venueSubscription$: Subscription = new Subscription;

  constructor(
    private venueStore: VenueStore,
    private venueService: VenuesService
  ) {}

  ngOnInit() {
    this.venueSubscription$ = this.venueStore.getVenueId()
      .subscribe(venueId => this.getVenueDetails(venueId));
  }

  ngOnDestroy() {
    this.venueSubscription$.unsubscribe();
  }

  public getVenueDetails(venueId: string) {
    this.venue$ = this.venueService.getVenueDetails(venueId)
      .pipe(map(result => result.response.venue));
  }

  public setPriceRating(venue: any) {
    if (venue.price) {
      const { tier, currency } = venue.price;
      return [
        ...Array(tier).fill({ currency, active: true }),
        ...Array(this.maxPriceRating - tier).fill({ currency, active: false })
      ];
    }
  }
}
