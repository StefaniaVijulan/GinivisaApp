import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turism-cazare',
  templateUrl: './turism-cazare.component.html',
  styleUrls: ['./turism-cazare.component.scss']
})
export class TurismCazareComponent implements OnInit {

  home = true;
  han = false;
  ana = false;

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth', block: "start"});
}

  showHan() {
    this.home = false;
    this.han = true;
    this.ana = false;
  }

  showAna() {
    this.home = false;
    this.han = false;
    this.ana = true;
  }

  hideAll() {
    this.home = true;
    this.han = false;
    this.ana = false;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
