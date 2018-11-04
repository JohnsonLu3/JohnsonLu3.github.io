import { Component, OnInit } from '@angular/core';
import {Projects} from '../../assets/data/Projects-Data'
@Component({
  selector: 'app-projects',
  templateUrl: 'projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = []
  data = new Projects().Projects;
  constructor() { }

  ngOnInit() {
  }

}
