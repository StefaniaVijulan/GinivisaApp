import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fructe',
  templateUrl: './fructe.component.html',
  styleUrls: ['./fructe.component.scss']
})
export class FructeComponent implements OnInit {

  home = true;
  capsuni = false;
  zmeura = false;
  arahide = false;

  scroll(el: HTMLElement) {

    el.scrollIntoView({behavior: 'smooth', block: "start"});
}

  changeFruitToCapsuni() {
    this.home = false;
    this.capsuni = true;
    this.zmeura = false;
    this.arahide = false;
  }
  changeFruitToZmeura() {
    this.home = false;
    this.zmeura = true;
    this.capsuni = false;
    this.arahide = false;
  }
  changeFruitToArahide() {
    this.home = false;
    this.arahide = true;
    this.capsuni = false;
    this.zmeura = false;
  }
  changeFruitToHome() {
    this.home = true;
    this.arahide = false;
    this.capsuni = false;
    this.zmeura = false;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
