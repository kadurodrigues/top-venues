import { Component, OnInit } from '@angular/core';
import { Venue } from '../models/venue.model';
import { VenuesService } from '../venues.service';
import { map } from 'rxjs/operators';

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
      .pipe(
        map(venues => console.log(venues))
      );
    // this.venues = [
    //   { name: 'Venue 1', rating: '2', categories: ['restaurant'] },
    //   { name: 'Venue 2', rating: '4', categories: ['pub', 'restaurant'] },
    //   { name: 'Venue 3', rating: '5', categories: ['park'] },
    //   { name: 'Venue 4', rating: '4', categories: ['theater'] }
    // ];
  }

}
