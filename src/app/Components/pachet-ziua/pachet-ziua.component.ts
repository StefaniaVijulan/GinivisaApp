import { Component, OnInit, Input, Output } from '@angular/core';
// import { Activity } from './activity';
import  pachetTuristic  from '../../../assets/Data-json/pachet-turistic.json';

@Component({
  selector: 'app-pachet-ziua',
  templateUrl: './pachet-ziua.component.html',
  styleUrls: ['./pachet-ziua.component.scss']
})
export class PachetZiuaComponent implements OnInit {

public Ziua = pachetTuristic;
// public ActivityArray = this.Ziua.map(e => e.activity.map(a => a.title))
// public Activity = this.Ziua.activity.activity1


  constructor() { }

  ngOnInit(): void {
    console.log(this.Ziua[0].activity)
  }

}
