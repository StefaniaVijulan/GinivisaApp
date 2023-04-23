import { Component, OnInit } from '@angular/core';

import { Router, NavigationEnd  } from '@angular/router';
import {Location} from '@angular/common';

import {style, state, animate, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-footer',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(500, style({opacity:1}))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({opacity:0}))
      ])
    ])
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  displayTEL = false;

  showOferta = false;

  ngOnInit(): void {
    innerWidth = window.innerWidth;
    if (innerWidth < 800) {
      this.displayTEL = true;
    }
    else { this.displayTEL = false; }

    setTimeout( () => {this.showOferta = true}, 900)
  }

  closeOferta() {
    this.showOferta = false
  }


  // Condition for Contact Ginivisa/BrainHub

  myRoute: any;

  constructor(router: Router, public location: Location ){
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        this.myRoute = this.location.path().toString();
        console.log(this.myRoute);
      }
    });
  }



}
