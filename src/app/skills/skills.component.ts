import { Component, OnInit } from '@angular/core';
import {SkillData} from '../../assets/data/Skills-Data';
@Component({
  selector: 'app-skills',
  templateUrl: 'skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills = new SkillData().skills;

  data = [];
  
  constructor(){

  }

  ngOnInit() {

  }

}
