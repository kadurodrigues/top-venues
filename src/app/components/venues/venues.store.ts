import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LOCAL_STORAGE_KEYS } from '../../../assets/constants';

@Injectable()
export class VenueStore {
  private venueId: any = localStorage.getItem(LOCAL_STORAGE_KEYS.venueId);
  private venueObservable: BehaviorSubject<any> = new BehaviorSubject<any>(this.venueId);

  constructor() {}

  public setVenueId(venueId: any) {
    this.venueObservable.next(venueId);
  }

  public getVenueId() {
    return this.venueObservable.asObservable();
  }
}
