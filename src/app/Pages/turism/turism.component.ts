import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-turism',
  templateUrl: './turism.component.html',
  styleUrls: ['./turism.component.scss']
})
export class TurismComponent implements OnInit {
  selectedRoom: any = {
    photo: "",
    id: 0,
    name: "",
    price: "",
    noPers: 0,
    description: "",
    noBathrooms: "",
    img: ""
  };
  public rooms = [{
      "id": 1,
      "name": "Apartament Casa Ana",
      "price": "1200",
      "noPers": 8,
      "noBathrooms": 2,
      "img": "assets/images/Turism/Rooms/ap_8_pers/ca.jpg",
      "img1":"assets/images/Turism/Rooms/ap_8_pers/Afara1.jpg",
      "img2":"assets/images/Turism/Rooms/ap_8_pers/Afara2.jpg",
      "img3":"assets/images/Turism/Rooms/ap_8_pers/ca.jpg",
      "img4":"assets/images/Turism/Rooms/ap_8_pers/Bucatarie0.jpg",
      "img5":"assets/images/Turism/Rooms/ap_8_pers/Bucatarie2.jpg",
      "img6":"assets/images/Turism/Rooms/ap_8_pers/Bucatarie1.jpg",
      "img7":"assets/images/Turism/Rooms/ap_8_pers/Camera1.jpg",
      "img8":"assets/images/Turism/Rooms/ap_8_pers/Camera2.jpg",
      "img9":"assets/images/Turism/Rooms/ap_8_pers/Camera4.jpg",
      "img10":"assets/images/Turism/Rooms/ap_8_pers/Camera30.jpg",
      "img11":"assets/images/Turism/Rooms/ap_8_pers/Camera41.jpg",
      "img12":"assets/images/Turism/Rooms/ap_8_pers/living.jpg",
    },
    {
      "id": 2,
      "name": "Apartament Han",
      "price": "350",
      "noPers": 4,
      "noBathrooms": 1,
      "img": "assets/images/Turism/Rooms/ap_4_pers/camera1.jpg",
      "img1":"assets/images/Turism/Rooms/ap_4_pers/camera2.jpg",
      "img2":"assets/images/Turism/Rooms/ap_4_pers/camera3.jpg",
      "img3":"assets/images/Turism/Rooms/ap_4_pers/baie1.jpg",
      "img4":"assets/images/Turism/Rooms/ap_4_pers/cam4.jpg",
      "img5":"assets/images/Turism/Rooms/ap_4_pers/terasa1.jpg",
      "img6":"assets/images/Turism/Rooms/ap_4_pers/terasa2.jpg",
      "img7":"assets/images/Turism/Rooms/ap_4_pers/hol1.jpg",
    },
    {
      "id": 5,
      "name": "Apartament Tuguiata",
      "price": "320",
      "noPers": 4,
      "noBathrooms": 1,
      "img": "assets/images/Turism/Rooms/tuguiata/tuguiata2.jpeg",
      "img1":"assets/images/Turism/Rooms/tuguiata/tuguiata1.jpeg",
      "img2":"assets/images/Turism/Rooms/tuguiata/tuguiata2.jpeg",
      "img3":"assets/images/Turism/Rooms/tuguiata/tuguiata3.jpg",
      "img4":"assets/images/Turism/Rooms/tuguiata/tuguiata4.jpg",
    },
    {
      "id": 3,
      "name": "Camera dubla x 4",
      "price": "250",
      "noPers": 2,
      "noBathrooms": 1,
      "img": "assets/images/Turism/Rooms/2_pers/camera3.jpg",
      "img1":"assets/images/Turism/Rooms/2_pers/camera3.jpg",
      "img2":"assets/images/Turism/Rooms/2_pers/camera4.jpg",
      "img3":"assets/images/Turism/Rooms/2_pers/camera5.jpg",
      "img4":"assets/images/Turism/Rooms/2_pers/camera6.jpg",
      "img5":"assets/images/Turism/Rooms/2_pers/camera7.jpg",
      "img11": "assets/images/Turism/Rooms/2_pers/camera2.jpg",
    },
    {
      "id": 4,
      "name": "Camera single",
      "price": "180",
      "noPers": 1,
      "noBathrooms": 1,
      "img": "assets/images/Turism/Rooms/single/single1.jpeg"
    },
    {
      "id": 4,
      "name": "Ciubar",
      "price": "200",
      "noPers": 8,
      "noBathrooms": 0,
      "img": "assets/images/Turism/Rooms/ciubar/ciubar1.png",
      "img1": "assets/images/Turism/Rooms/ciubar/ciubar1.png"
    },
    {
      "id": 4,
      "name": "Sala de joucri",
      "price": "180",
      "noPers": 10,
      "noBathrooms": 0,
      "img": "assets/images/Turism/Rooms/jocuri/jocuri1.jpg",
      "img1": "assets/images/Turism/Rooms/jocuri/jocuri1.jpg",
    },


  ]
  scroll(el: HTMLElement) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: "start"
    });
  }
  onSelect(x: any) {
    this.selectedRoom = x;
  }


  constructor() {}

  ngOnInit(): void {}
}
