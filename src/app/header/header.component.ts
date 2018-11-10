import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navOpener;

  constructor() { }

  ngOnInit() {
    this.navOpener = document.getElementById("openSideNav");
    this.navOpener.addEventListener("click", function(){
        document.getElementById("sidenav").classList.remove("close");
    });
  }

}
