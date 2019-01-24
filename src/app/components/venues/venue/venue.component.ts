import { Component, OnInit, Input } from '@angular/core';
import { Venue } from '../models/venue.model';

@Component({
  selector: 'tv-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.scss']
})
export class VenueComponent implements OnInit {
  @Input() venue: Venue;
  constructor() { }

  ngOnInit() {
  }

}
