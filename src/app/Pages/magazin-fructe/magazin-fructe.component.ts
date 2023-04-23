import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magazin-fructe',
  templateUrl: './magazin-fructe.component.html',
  styleUrls: ['./magazin-fructe.component.scss']
})
export class MagazinFructeComponent implements OnInit {

  displayFructe = false;
  displayGallery = false;
  displayTEL = false;

  showDespreFructe() {
    this.displayFructe = true;
    this.displayGallery = false;
  }
  showGalleryFructe() {
    this.displayGallery = true;
    this.displayFructe = false;
  }
  hideDespreFructe() {
    this.displayFructe = false;

  }
  hideGalleryFructe() {
    this.displayGallery = false;

  }
  hideAll() {
    this.displayFructe = false;
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
