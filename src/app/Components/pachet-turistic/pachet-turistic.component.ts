import { Component, OnInit, Input,  ElementRef } from '@angular/core';
import { ViewEncapsulation } from "@angular/core";

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";

import  pachetTuristic  from '../../../assets/Data-json/pachet-turistic.json';

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-pachet-turistic',
  templateUrl: './pachet-turistic.component.html',
  styleUrls: ['./pachet-turistic.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PachetTuristicComponent implements OnInit {

  thumbsSwiper: any;
  public Ziua = pachetTuristic;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  showModal(event: any) {
    // get target ID
   let target = event.target || event.srcElement || event.currentTarget;
   let idAttr = target.attributes.id;
   let id = idAttr.value;

   let elementClick = this.el.nativeElement.parentElement.parentElement;
   let itemModal = elementClick.getElementsByClassName('modal')

   itemModal[id].style.setProperty('display', 'block')
 }

 closeModal(event: any) {
   // get target ID
   let target = event.target || event.srcElement || event.currentTarget;
   let idAttr = target.attributes.id;
   let id = idAttr.value;

   let elementClick = this.el.nativeElement.parentElement.parentElement;
   let itemModal = elementClick.getElementsByClassName('modal')

   itemModal[id].style.setProperty('display', 'none')
 }

}
