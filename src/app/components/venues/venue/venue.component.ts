import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Venue } from '../models/venue.model';
import { VenueStore } from '../venues.store';

import { LOCAL_STORAGE_KEYS } from '../../../../assets/constants';

@Component({
  selector: 'tv-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.scss']
})
export class VenueComponent implements OnInit {
  @Input() venue: Venue;

  constructor(
    private router: Router,
    private venueStore: VenueStore
  ) { }

  ngOnInit() {
  }

  public handleGetDetails(venue: Venue) {
    const { name, id } = venue;
    localStorage.setItem(LOCAL_STORAGE_KEYS.venueId, id);
    this.venueStore.setVenueId(id);
    this.router.navigate(['/venues', this.setUrlPath(name)]);
  }

  public setUrlPath(path: string) {
    return path.replace(/[.:' ]+/g, "-").toLowerCase();
  }

}
