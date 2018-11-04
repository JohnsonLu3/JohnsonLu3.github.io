import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-headerbar',
  templateUrl: 'headerbar.component.html',
  styleUrls: ['./headerbar.component.scss']
})
export class HeaderbarComponent implements OnInit {

  @Input('text')text : string;

  constructor() { }

  ngOnInit() {
  }

}
