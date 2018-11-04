import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: 'project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input('id') id : string;
  @Input('title') title : string;
  @Input('img') img : string;
  @Input('description') desc : string;
  @Input('languages') lang : string;
  @Input('source') source : string;
  @Input('visit') visit : string;

  imgPath : string;
  filters = []

  constructor() {
  }

  ngOnInit() {
    this.imgPath = new String().concat("../../assets/images/projects/" , this.img);

    if(this.source === null) this.source = "";

    let filterData = this.lang.split(",");
    for(let f of filterData){
      this.filters.push(f);
    }
  }

}
