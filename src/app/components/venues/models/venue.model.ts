export interface Venue {
  id: string,
  name: string;
  categories: Array<string>;
  location?: Location;
}

export interface Location {
  address: string,
  city: string
}
