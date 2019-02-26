import { Component, OnInit } from '@angular/core';
import { VenuesService } from '../venues.service';
import { Venue } from '../models/venue.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'tv-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public venues$: Observable<Venue>;

  constructor(private venuesService: VenuesService) {}

  ngOnInit() {
    this.venues$ = this.venuesService.getVenues()
      .pipe(map(result => this.mapVenuesResult(result)));
  }

  public mapVenuesResult(result: any) {
    return result.response.groups[0].items
      .map((item: any) => Object.assign({}, item.venue));
  }
}
