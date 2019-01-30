import { Component, OnInit } from '@angular/core';
import { VenuesService } from '../venues.service';
import { Venue } from '../models/venue.model';

@Component({
  selector: 'tv-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public venues: Array<Venue>;
  public venueListLoading: Array<number> = Array(10);

  constructor(private venuesService: VenuesService) {}

  ngOnInit() {
    this.venuesService
      .getVenues()
      .subscribe(result => this.venues = this.mapVenuesResult(result));

    this.clearLocalStorage();
  }

  public mapVenuesResult(result: any) {
    return result.response.groups[0].items
      .map((item: any) => Object.assign({}, item.venue));
  }

  public clearLocalStorage() {
    localStorage.clear();
  }
}
