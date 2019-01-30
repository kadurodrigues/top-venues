import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tv-venue-tips',
  templateUrl: './venue-tips.component.html',
  styleUrls: ['./venue-tips.component.scss']
})
export class VenueTipsComponent implements OnInit {
  @Input() tips: any;

  constructor() { }

  ngOnInit() {
  }

}
