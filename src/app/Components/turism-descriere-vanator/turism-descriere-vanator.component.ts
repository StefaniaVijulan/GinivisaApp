import { Component, OnInit, Input } from '@angular/core';
import  galerieHan  from '../../../assets/Data-json/Galerie-Han.json';

@Component({
  selector: 'app-turism-descriere-vanator',
  templateUrl: './turism-descriere-vanator.component.html',
  styleUrls: ['./turism-descriere-vanator.component.scss']
})
export class TurismDescriereVanatorComponent implements OnInit {

  linkFacebookHan = "https://www.facebook.com/hanulvanatoruluigorj/";
  linkBookingHan = "https://www.booking.com/hotel/ro/casa-vanatorului-comuna-pestisani.ro.html?aid=304142;label=gen173nr-1FCAMowAFCCXBlc3Rpc2FuaUggWARowAGIAQGYASC4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AurCrI4GwAIB0gIkZWY4NTFjZTgtZTBlMS00ODhiLTgwNjEtMmQ5NWRiYjMxYTk32AIF4AIB;sid=0b0fa2b531b84774c89abd138acb0c13;atlas_src=sr_iw_btn;dest_id=-1166429;dest_type=city;dist=0;group_adults=2;group_children=0;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&";

  displayRezerva = false;
  displayTEL = false;

  @Input() public GalerieHan: { image: string, thumbImage: string}[] = galerieHan;

  constructor() { }



  ngOnInit(): void {
    innerWidth = window.innerWidth;
    if (innerWidth < 800) {
      this.displayTEL = true;
    }
    else { this.displayTEL = false; }
  }

  showRezerva() {
    this.displayRezerva = true;
  }
  closeRezerva() {
    this.displayRezerva = false;
  }

}
