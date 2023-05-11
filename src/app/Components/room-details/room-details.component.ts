import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewEncapsulation, ViewChild } from "@angular/core";
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss'],
  inputs: ['room'],
  encapsulation: ViewEncapsulation.None,
})
export class RoomDetailsComponent implements OnInit {
  public room: any;
  thumbsSwiper: any;
  constructor(private _activateRouter: ActivatedRoute) { }

  ngOnInit() {
  }

}
