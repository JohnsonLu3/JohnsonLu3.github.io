import { Component, OnInit } from '@angular/core';


import * as $ from 'jquery';

@Component({
  selector: 'app-sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  sidenav;
  dismissBtn;

  constructor() { }

  ngOnInit() {
    this.sidenav = document.getElementById("sidenav");
    this.dismissBtn = document.getElementById("dismissNav");
    document.getElementById("sidenav").classList.add("close");
    
    this.dismissBtn.addEventListener("click", function(){
        document.getElementById("sidenav").classList.add("close");
    });
  }

}
