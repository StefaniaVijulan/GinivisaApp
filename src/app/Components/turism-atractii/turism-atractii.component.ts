import { Component, OnInit, Input,  ElementRef } from '@angular/core';
import  atractii  from '../../../assets/Data-json/atractii.json';

@Component({
  selector: 'app-turism-atractii',
  templateUrl: './turism-atractii.component.html',
  styleUrls: ['./turism-atractii.component.scss']
})
export class TurismAtractiiComponent implements OnInit {

  @Input() public Atractii: {id: number, title: string, imageURL: string, thumbURL:string, text: string}[] = atractii;

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
