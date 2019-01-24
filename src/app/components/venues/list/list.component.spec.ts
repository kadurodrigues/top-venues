import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.venues = [
      { name: 'Venue 1', rating: '2', categories: ['restaurant'] },
      { name: 'Venue 2', rating: '7', categories: ['pub'] },
      { name: 'Venue 3', rating: '8', categories: ['park'] }
    ];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
