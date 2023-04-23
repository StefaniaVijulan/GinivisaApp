import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-brain-hub',
  templateUrl: './brain-hub.component.html',
  styleUrls: ['./brain-hub.component.scss']
})
export class BrainHubComponent implements OnInit {

  displayGallery = false;
  displayTEL = false;

  showGallery() {
    this.displayGallery = true;
  }
  hideGallery() {
    this.displayGallery = false;
  }

  constructor() { }

  ngOnInit(): void {
    innerWidth = window.innerWidth;
    if (innerWidth < 800) {
      this.displayTEL = true;
    }
    else { this.displayTEL = false; }
  }

}
