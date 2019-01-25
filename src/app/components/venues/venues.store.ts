import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class VenueStore {
  private venueId: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor() {}

  public setVenueId(venueId: string) {
    this.venueId.next(venueId);
  }

  public getVenueId() {
    return this.venueId.asObservable();
  }
}
