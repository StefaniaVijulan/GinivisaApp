import { Component } from '@angular/core';
import { ViewEncapsulation, ViewChild } from "@angular/core";
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-super-oferta',
  templateUrl: './super-oferta.component.html',
  styleUrls: ['./super-oferta.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SuperOfertaComponent {
  thumbsSwiper: any;
}
