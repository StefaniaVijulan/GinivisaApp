import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss'],
  inputs: ['room']
})
export class RoomDetailsComponent implements OnInit {
  public room: any;
  
  constructor(private _activateRouter: ActivatedRoute) { }

  ngOnInit() {
  }

}
