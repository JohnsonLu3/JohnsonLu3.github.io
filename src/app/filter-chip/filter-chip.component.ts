import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-filter-chip',
  templateUrl: 'filter-chip.component.html',
  styleUrls: ['./filter-chip.component.scss']
})
export class FilterChipComponent implements OnInit {

  @Input("filter")filter : string;

  constructor() { }

  ngOnInit() {
  }

}
