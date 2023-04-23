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
    noPers:0,
    description:"",
    noBathrooms:"",
    img:""
  };
  public rooms =[
    {"id":1, "name":"Apartament Casa Ana"         ,"price":"1200", "noPers": 8, "noBathrooms": 2, "img":"assets/images/Turism/Rooms/ap_8_pers/ca.jpg"},
    {"id":2, "name":"Apartament Han"              ,"price":"350",  "noPers": 4, "noBathrooms": 1, "img":"assets/images/Turism/Rooms/ap_4_pers/camera1.jpg"},
    {"id":5, "name":"Apartament Tuguiata"         ,"price":"320",  "noPers": 4, "noBathrooms": 1, "img":"assets/images/Turism/Rooms/tuguiata/tuguiata2.jpeg"},
    {"id":3, "name":"Camera dubla x 4"            ,"price":"250",  "noPers": 2, "noBathrooms": 1, "img":"assets/images/Turism/Rooms/2_pers/camera3.jpg"},
    {"id":4, "name":"Camera single"               ,"price":"180",  "noPers": 1, "noBathrooms": 1, "img":"assets/images/Turism/Rooms/single/single1.jpeg"},
    {"id":4, "name":"Ciubar"                      ,"price":"200",  "noPers": 8, "noBathrooms": 0, "img":"assets/images/Turism/Rooms/ciubar/ciubar1.png"},
    {"id":4, "name":"Sala de joucri"              ,"price":"180",  "noPers": 10, "noBathrooms": 0, "img":"assets/images/Turism/Rooms/jocuri/jocuri1.jpg"},
    

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
