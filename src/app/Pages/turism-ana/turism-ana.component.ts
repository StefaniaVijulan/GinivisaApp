import { Component, OnInit, Input } from '@angular/core';
import  galerieAna  from '../../../assets/Data-json/Galerie-Ana.json';

@Component({
  selector: 'app-turism-ana',
  templateUrl: './turism-ana.component.html',
  styleUrls: ['./turism-ana.component.scss']
})
export class TurismAnaComponent implements OnInit {

    // URL Buttons
    linkFacebookAna = "https://www.facebook.com/casaanagorj/";
    linkBookingAna = "https://www.booking.com/hotel/ro/vila-ana-pestisani.ro.html?aid=304142;label=gen173nr-1FCAMowAFCCXBlc3Rpc2FuaUggWARowAGIAQGYASC4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AurCrI4GwAIB0gIkZWY4NTFjZTgtZTBlMS00ODhiLTgwNjEtMmQ5NWRiYjMxYTk32AIF4AIB;sid=4121c0c07d16aa85c414a3dda80a6b5f;dest_id=-1166429;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1642261135;srpvid=2bbf6e079ca60042;type=total;ucfs=1&#hotelTmpl";


    @Input() public GalerieAna: { image: string, thumbImage: string}[] = galerieAna;


    scroll(el: HTMLElement) {
      el.scrollIntoView({behavior: 'smooth', block: "start"});
    }

    displayPachetTuristic = false;

    showPachetTuristic() {
      this.displayPachetTuristic = true;
    }

    closePachetTuristic() {
      this.displayPachetTuristic = false;
    }

  constructor() { }

  ngOnInit(): void {
  }

}
