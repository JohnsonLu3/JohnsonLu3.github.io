import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: 'skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent implements OnInit {

  skillName;
  skillIco;
  @Input('skill') skill;
  @Input('ico') ico;

  constructor() {
  }

  ngOnInit() {

    this.skillName = this.skill;
    this.skillIco = this.ico;
  }

}
