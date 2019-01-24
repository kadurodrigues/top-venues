import { Component, OnInit } from '@angular/core';
import { Venue } from '../models/venue.model';
import { VenuesService } from '../venues.service';

@Component({
  selector: 'tv-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public venues: Array<Venue>;

  constructor(private venuesService: VenuesService) { }

  ngOnInit() {
    this.venuesService
      .getVenues()
      .subscribe(result => this.venues = this.mapVenuesToArray(result));
  }

  public mapVenuesToArray(result: any) {
    const { items } = result.response.groups[0];
    return items.map((item: any) => Object.assign({}, item.venue));
  }
}
