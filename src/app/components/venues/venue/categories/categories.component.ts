import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tv-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  @Input() categories: Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
