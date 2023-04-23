import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activitati',
  templateUrl: './activitati.component.html',
  styleUrls: ['./activitati.component.scss']
})
export class ActivitatiComponent implements OnInit {

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth', block: "start"});
}

  displayAtractii = false;


  showAtractii() {
    this.displayAtractii = true;
  }

  closeAtractii() {
    this.displayAtractii = false;
  }


  constructor() { }

  ngOnInit(): void {
  }
}
