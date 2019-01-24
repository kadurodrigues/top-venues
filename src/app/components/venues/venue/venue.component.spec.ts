import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueComponent } from './venue.component';

describe('VenueComponent', () => {
  let component: VenueComponent;
  let fixture: ComponentFixture<VenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueComponent);
    component = fixture.componentInstance;
    component.venue = { name: 'Venue 1', rating: '2', categories: ['restaurant'] };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
