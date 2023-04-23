import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joburi',
  templateUrl: './joburi.component.html',
  styleUrls: ['./joburi.component.scss']
})
export class JoburiComponent implements OnInit {
  displayCOO = false;
  displaySMM = false;
  displayContabil = false;

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth', block: "start"});
}

  showCOO() {
    this.displayCOO = true;
    this.displaySMM = false;
    this.displayContabil = false;
  }
  showSMM() {
    this.displaySMM = true;
    this.displayCOO = false;
    this.displayContabil = false;
  }
  showContabil() {
    this.displaySMM = false;
    this.displayCOO = false;
    this.displayContabil = true;
  }
  closeAll() {
    this.displayCOO = false;
    this.displaySMM = false;
    this.displayContabil = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
