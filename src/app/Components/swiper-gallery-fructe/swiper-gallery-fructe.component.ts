import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation, ViewChild } from "@angular/core";
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-swiper-gallery-fructe',
  templateUrl: './swiper-gallery-fructe.component.html',
  styleUrls: ['./swiper-gallery-fructe.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SwiperGalleryFructeComponent implements OnInit {

  thumbsSwiper: any;
    // config: SwiperOptions = {
  //   slidesPerView: 3,
  //   spaceBetween: 50,
  //   navigation: true,
  //   pagination: { clickable: true },
  //   scrollbar: { draggable: true },
  // };
  // onSwiper([swiper]) {
  //   console.log(swiper);
  // }
  // onSlideChange() {
  //   console.log('slide change');
  // }


  constructor() { }

  ngOnInit(): void {
  }

}
