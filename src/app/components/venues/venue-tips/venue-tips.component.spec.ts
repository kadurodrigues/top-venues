import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueTipsComponent } from './venue-tips.component';

describe('VenueTipsComponent', () => {
  let component: VenueTipsComponent;
  let fixture: ComponentFixture<VenueTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
