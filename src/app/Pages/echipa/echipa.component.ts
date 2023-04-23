import { Component, OnInit, Input,  ElementRef } from '@angular/core';
import { ViewEncapsulation } from "@angular/core";
import  echipa  from '../../../assets/Data-json/echipa.json';

@Component({
  selector: 'app-echipa',
  templateUrl: './echipa.component.html',
  styleUrls: ['./echipa.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EchipaComponent implements OnInit {

  @Input() public Echipa: {id: number, nume: string, functie: string, descriere: string, imgURL: string, despre: string}[] = echipa;

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
